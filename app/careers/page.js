import Link from "next/link";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";
import { PageHero, CTAStrip } from "../about/page";

export const metadata = { title: "Careers — ORTECH Infra Pvt Ltd" };

const roles = [
  { title: "Project Manager — Highways", location: "Hyderabad / Site", type: "Full-time", exp: "12–18 yrs" },
  { title: "Sr. Engineer — Bridges (PSC)", location: "Vijayawada", type: "Full-time", exp: "6–10 yrs" },
  { title: "Planning Engineer — P6", location: "Hyderabad HQ", type: "Full-time", exp: "4–7 yrs" },
  { title: "HSE Officer — Industrial", location: "Jamnagar", type: "Contract", exp: "5–8 yrs" },
  { title: "Plant Manager — Heavy Fleet", location: "Hyderabad / Site", type: "Full-time", exp: "10–15 yrs" },
  { title: "Quantity Surveyor", location: "Multiple sites", type: "Full-time", exp: "3–6 yrs" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the country. Build a career that compounds."
        kicker="We hire career operators — engineers, planners, plant specialists, HSE leaders — who treat infrastructure delivery as a craft. Below are current openings."
        image="https://images.unsplash.com/photo-1593313637552-29c2c0dacd35"
      />
      <section className="container-x py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-16">
          {[
            { v: "1,800+", l: "Employees on rolls" },
            { v: "4.7 yrs", l: "Median tenure" },
            { v: "62%", l: "Internal promotions FY24" },
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
