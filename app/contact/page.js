"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { company } from "@/data/site";
import { toast } from "sonner";

const HERO = "https://images.unsplash.com/photo-1759579478942-a6992a87fb8f";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", interest: "General inquiry", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error("Failed");
      setDone(true);
      toast.success("Inquiry received. We'll respond within 24 hours.");
    } catch {
      toast.error("Could not submit. Please email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative bg-ink text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        </div>
        <div className="relative container-x pt-24 pb-20 md:pt-32 md:pb-24">
          <div className="eyebrow">Contact</div>
          <h1 className="mt-4 font-display text-[38px] md:text-[60px] leading-[1] tracking-tight max-w-4xl text-balance">
            Send us your scope. We respond within 24 hours.
          </h1>
        </div>
      </section>

      <section className="container-x py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-8">
          <div>
            <div className="eyebrow">Reach us</div>
            <div className="mt-6 space-y-5">
              <Field icon={MapPin} label="Head office" value={company.address} />
              <Field icon={Mail} label="Email" value={company.email} />
              <Field icon={Phone} label="Telephone" value={company.phone} />
            </div>
          </div>
          <div className="bg-white border border-neutral-200 p-6">
            <div className="eyebrow">For RFP / tender</div>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">Attach BOQ / IFC drawings to the email above. Pre-construction team responds within 24 hours on weekdays.</p>
          </div>
        </div>

        <div className="lg:col-span-8">
          {done ? (
            <div className="bg-white border border-neutral-200 p-12 text-center">
              <div className="mx-auto h-14 w-14 grid place-items-center bg-accent text-white rounded-full">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-display text-3xl text-neutral-900">Inquiry received.</h2>
              <p className="mt-3 text-neutral-600 max-w-md mx-auto">A member of our team will respond within 24 hours. For urgent matters, please call {company.phone}.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="bg-white border border-neutral-200 p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Full name *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Input label="Company *" value={form.company} onChange={(v) => setForm({ ...form, company: v })} required />
              <Input label="Work email *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
              <Input label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
              <div className="md:col-span-2">
                <Label>Nature of inquiry</Label>
                <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900">
                  {["General inquiry", "Telecom / OFC rollout", "HDD (trenchless)", "City Gas Distribution", "Civil / Electrical", "Careers", "Media"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <Label>Project / scope details</Label>
                <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900" placeholder="Scope, location, value range, timeline..." />
              </div>
              <div className="md:col-span-2">
                <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
                  {submitting ? "Sending…" : "Submit Project Inquiry"} <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 bg-neutral-900 text-white grid place-items-center shrink-0"><Icon className="h-4 w-4" /></div>
      <div>
        <div className="text-[10px] tracking-[0.18em] uppercase text-neutral-500 font-semibold">{label}</div>
        <div className="mt-1 text-sm text-neutral-900">{value}</div>
      </div>
    </div>
  );
}
function Label({ children }) {
  return <label className="block text-[10px] font-semibold tracking-[0.14em] uppercase text-neutral-500 mb-2">{children}</label>;
}
function Input({ label, value, onChange, type = "text", required }) {
  return (
    <div>
      <Label>{label}</Label>
      <input type={type} value={value} required={required} onChange={(e) => onChange(e.target.value)} className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900" />
    </div>
  );
}
