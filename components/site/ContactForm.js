"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

const INTERESTS = [
  "General inquiry",
  "Telecom / OFC rollout",
  "HDD (trenchless)",
  "City Gas Distribution",
  "Civil / Electrical",
  "Careers",
  "Media / Press",
];

const EMPTY = { name: "", company: "", email: "", phone: "", interest: INTERESTS[0], message: "", website: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.fieldErrors) {
          const flat = {};
          for (const [k, v] of Object.entries(data.fieldErrors)) flat[k] = Array.isArray(v) ? v[0] : v;
          setErrors(flat);
          toast.error("Please check the highlighted fields.");
        } else {
          toast.error(data.error || "Something went wrong. Please try again.");
        }
        return;
      }
      toast.success("Thank you — your message is on its way. We'll respond within one business day.");
      setForm(EMPTY);
    } catch {
      toast.error("Network error. Please email us directly at info@ortechinfra.com.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Name" required error={errors.name}>
          <input className={inputCls(errors.name)} value={form.name} onChange={set("name")} placeholder="Your full name" autoComplete="name" />
        </Field>
        <Field label="Company" error={errors.company}>
          <input className={inputCls(errors.company)} value={form.company} onChange={set("company")} placeholder="Organisation" autoComplete="organization" />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email" required error={errors.email}>
          <input type="email" className={inputCls(errors.email)} value={form.email} onChange={set("email")} placeholder="you@company.com" autoComplete="email" />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input className={inputCls(errors.phone)} value={form.phone} onChange={set("phone")} placeholder="+91 ..." autoComplete="tel" />
        </Field>
      </div>

      <Field label="How can we help?" error={errors.interest}>
        <select className={inputCls(errors.interest)} value={form.interest} onChange={set("interest")}>
          {INTERESTS.map((i) => <option key={i} value={i}>{i}</option>)}
        </select>
      </Field>

      <Field label="Message" required error={errors.message}>
        <textarea rows={5} className={inputCls(errors.message)} value={form.message} onChange={set("message")} placeholder="Tell us about your scope, location and timeline." />
      </Field>

      {/* Honeypot — visually hidden, off-screen; bots fill it, humans don't. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} /></label>
      </div>

      <button type="submit" disabled={loading} className="btn-accent w-full sm:w-auto disabled:opacity-60">
        {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <>Send message <Send className="h-4 w-4" /></>}
      </button>
    </form>
  );
}

function Field({ label, required, error, children }) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-steel">
        {label}{required && <span className="text-accent"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function inputCls(error) {
  return `w-full bg-white border px-4 py-3 text-sm text-navy-900 placeholder:text-steel/60 outline-none transition-colors focus:border-navy-900 ${
    error ? "border-destructive" : "border-border"
  }`;
}
