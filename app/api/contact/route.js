import { NextResponse } from "next/server";
import { z } from "zod";

// ORTECH Infra — contact endpoint.
// POST only. Validates with zod, emails via Resend (plain fetch, no SDK),
// and optionally stores in MongoDB when MONGO_URL is configured.
// There is deliberately NO GET handler — the old catch-all route publicly
// leaked every submission; that is gone.

const INTERESTS = [
  "General inquiry",
  "Telecom / OFC rollout",
  "HDD (trenchless)",
  "City Gas Distribution",
  "Civil / Electrical",
  "Careers",
  "Media / Press",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  interest: z.enum(INTERESTS).catch("General inquiry"),
  message: z.string().trim().min(10, "Tell us a little about your scope").max(3000),
  // Honeypot — real users never fill this. Bots do. Accept any value here so
  // validation passes; the POST handler silently discards non-empty submissions.
  website: z.string().optional().default(""),
});

function json(data, status = 200) {
  return NextResponse.json(data, { status });
}

async function sendEmail(data) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "info@ortechinfra.com";
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey) {
    // No key configured — don't lose the lead. Log it and signal undelivered.
    console.warn("[contact] RESEND_API_KEY not set. Submission logged only:", {
      ...data,
      message: data.message.slice(0, 200),
    });
    return { delivered: false };
  }

  const subject = `New website inquiry — ${data.interest} — ${data.name}`;
  const text = [
    `Name:     ${data.name}`,
    `Company:  ${data.company || "—"}`,
    `Email:    ${data.email}`,
    `Phone:    ${data.phone || "—"}`,
    `Interest: ${data.interest}`,
    ``,
    `Message:`,
    data.message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `ORTECH Infra Website <${from}>`,
      to: [to],
      reply_to: data.email,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend failed (${res.status}): ${detail.slice(0, 300)}`);
  }
  return { delivered: true };
}

async function storeInquiry(data) {
  if (!process.env.MONGO_URL) return;
  try {
    const { MongoClient } = await import("mongodb");
    let client = global._mongoClient;
    if (!client) {
      client = new MongoClient(process.env.MONGO_URL);
      await client.connect();
      global._mongoClient = client;
    }
    const db = client.db(process.env.DB_NAME || "ortech");
    await db.collection("inquiries").insertOne({
      id: crypto.randomUUID(),
      ...data,
      createdAt: new Date().toISOString(),
    });
  } catch (e) {
    // Storage is best-effort — never block the lead on a DB hiccup.
    console.error("[contact] Mongo store failed (non-fatal):", e.message);
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request body" }, 400);
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return json({ error: "Validation failed", fieldErrors }, 400);
  }

  const { website, ...data } = parsed.data;

  // Honeypot tripped — pretend success, do nothing.
  if (website) return json({ ok: true });

  try {
    const [result] = await Promise.all([sendEmail(data), storeInquiry(data)]);

    if (!result.delivered && process.env.NODE_ENV === "production") {
      return json(
        {
          error:
            "We couldn't send your message right now. Please email us directly at " +
            (process.env.CONTACT_TO_EMAIL || "info@ortechinfra.com") + ".",
        },
        503
      );
    }
    return json({ ok: true, delivered: result.delivered });
  } catch (e) {
    console.error("[contact] send failed:", e.message);
    return json(
      {
        error:
          "Something went wrong sending your message. Please email us directly at " +
          (process.env.CONTACT_TO_EMAIL || "info@ortechinfra.com") + ".",
      },
      502
    );
  }
}
