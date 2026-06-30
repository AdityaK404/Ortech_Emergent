import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from "uuid";

const uri = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || "ortech";

let cached = global._mongoClient;
async function getDb() {
  if (!cached) {
    cached = new MongoClient(uri);
    await cached.connect();
    global._mongoClient = cached;
  }
  return cached.db(dbName);
}

function json(data, status = 200) {
  return NextResponse.json(data, { status });
}

export async function GET(request, { params }) {
  const path = (params?.path || []).join("/");
  try {
    if (!path || path === "") {
      return json({ ok: true, service: "ortech-api", version: "1.0.0" });
    }
    if (path === "health") {
      return json({ status: "ok", ts: new Date().toISOString() });
    }
    if (path === "inquiries") {
      const db = await getDb();
      const items = await db.collection("inquiries").find({}).sort({ createdAt: -1 }).limit(100).toArray();
      return json({ items: items.map(({ _id, ...rest }) => rest) });
    }
    return json({ error: "Not found" }, 404);
  } catch (e) {
    return json({ error: e.message }, 500);
  }
}

export async function POST(request, { params }) {
  const path = (params?.path || []).join("/");
  try {
    const body = await request.json().catch(() => ({}));
    if (path === "inquiries") {
      if (!body.name || !body.email || !body.company) {
        return json({ error: "name, email, company required" }, 400);
      }
      const doc = {
        id: uuidv4(),
        name: String(body.name).slice(0, 200),
        company: String(body.company).slice(0, 200),
        email: String(body.email).slice(0, 200),
        phone: String(body.phone || "").slice(0, 60),
        interest: String(body.interest || "General inquiry").slice(0, 80),
        message: String(body.message || "").slice(0, 5000),
        createdAt: new Date().toISOString(),
      };
      const db = await getDb();
      await db.collection("inquiries").insertOne(doc);
      return json({ ok: true, id: doc.id });
    }
    return json({ error: "Not found" }, 404);
  } catch (e) {
    return json({ error: e.message }, 500);
  }
}
