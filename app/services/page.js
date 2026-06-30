import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/site/SectionHeader";
import { services } from "@/data/site";
import { PageHero, CTAStrip } from "../about/page";

export const metadata = { title: "Services — ORTECH Infra Pvt Ltd" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six discipline lines. One accountable delivery model."
        kicker="Owned plant, in-house engineering, and a single P&L for every package — enabling direct accountability for cost, schedule and safety on every package we sign."
        image="https://images.pexels.com/photos/3818947/pexels-photo-3818947.jpeg"
      />
      <section className="container-x py-24 space-y-24">
        {services.map((s, i) => (
          <div key={s.slug} id={s.slug} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-1 font-serif text-5xl text-accent/40">{String(i + 1).padStart(2, "0")}</div>
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl md:text-4xl text-primary leading-tight">{s.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{s.summary}</p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {s.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3 text-sm border-l-2 border-accent pl-4 py-1">
                    <span className="text-foreground/85">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 bg-secondary/60 border border-border p-8">
              <div className="eyebrow"><span className="accent-rule"></span>Engage</div>
              <div className="mt-3 font-serif text-xl text-primary">Have a package in this discipline?</div>
              <p className="mt-3 text-sm text-muted-foreground">Share scope and our pre-construction team will respond with referenceable projects and a fit assessment.</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-[11px] tracking-[0.2em] uppercase">
                Discuss with team <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </section>
      <CTAStrip />
    </>
  );
}
