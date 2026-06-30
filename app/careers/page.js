import Link from "next/link";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";
import { PageHero, CTAStrip } from "../about/page";

export const metadata = { title: "Careers — ORTECH Infra Pvt Ltd" };

const roles = [
  { title: "HDD Rig Operator / Foreman", location: "Karnataka · Site", type: "Full-time", exp: "5–10 yrs" },
  { title: "Site Engineer — OFC / Telecom", location: "Karnataka & Maharashtra", type: "Full-time", exp: "3–6 yrs" },
  { title: "Site Engineer — CGD", location: "Belagavi", type: "Full-time", exp: "4–7 yrs" },
  { title: "Civil Site Engineer", location: "Multiple sites", type: "Full-time", exp: "3–6 yrs" },
  { title: "Electrical Engineer — HT/LT", location: "Karnataka", type: "Full-time", exp: "3–7 yrs" },
  { title: "Project Manager — Telecom Rollout", location: "Belagavi HQ", type: "Full-time", exp: "8–12 yrs" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build India's networks. Build a career on real infrastructure."
        kicker="We hire field operators, engineers and planners who treat infrastructure execution as a craft. Below are openings across our discipline lines."
        image="https://images.unsplash.com/photo-1579847188804-ecba0e2ea330"
      />
      <section className="container-x py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-16">
          {[
            { v: "200+", l: "Skilled workforce" },
            { v: "23 yrs", l: "Of continuous operations" },
            { v: "6 lines", l: "Career paths across disciplines" },
          ].map((s) => (
            <div key={s.l} className="bg-background p-8">
              <div className="font-serif text-3xl text-accent">{s.v}</div>
              <div className="mt-2 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="eyebrow"><span className="accent-rule"></span>Open roles</div>
            <h2 className="mt-3 font-serif text-3xl text-primary">Currently hiring</h2>
          </div>
          <Link href="/contact" className="text-[12px] tracking-[0.18em] uppercase text-primary hover:text-accent">Send general application →</Link>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {roles.map((r) => (
            <Link href="/contact" key={r.title} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-secondary/40 px-4 -mx-4 group">
              <div className="md:col-span-5 font-serif text-lg text-primary">{r.title}</div>
              <div className="md:col-span-3 text-sm text-muted-foreground flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-accent" />{r.location}</div>
              <div className="md:col-span-2 text-sm text-muted-foreground flex items-center gap-2"><Briefcase className="h-3.5 w-3.5 text-accent" />{r.type}</div>
              <div className="md:col-span-1 text-sm text-muted-foreground">{r.exp}</div>
              <div className="md:col-span-1 flex md:justify-end"><ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent" /></div>
            </Link>
          ))}
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
