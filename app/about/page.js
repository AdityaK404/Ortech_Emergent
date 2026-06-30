import Link from "next/link";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import SectionHeader from "@/components/site/SectionHeader";
import { milestones, leadership, company } from "@/data/site";

export const metadata = { title: "About — ORTECH Infra Pvt Ltd" };

const ABOUT_HERO = "https://images.pexels.com/photos/4458205/pexels-photo-4458205.jpeg";

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Operators of plant. Custodians of schedule. Stewards of safety." image={ABOUT_HERO} />

      <section className="container-x py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="eyebrow"><span className="accent-rule"></span>Our promise</div>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl text-primary leading-tight">A heavy-civil partner built around evidence, not adjectives.</h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
          <p>ORTECH Infra was founded in 2008 to fill a specific gap in India's infrastructure delivery market: a privately-held contractor with the discipline of a listed major and the agility of a regional specialist. Seventeen years on, we deliver heavy civil packages across highways, bridges, industrial sites, urban infrastructure, and mining support — across 14 states.</p>
          <p>What makes us different isn't a slogan. It's the combination of plant ownership, an in-house engineering bench, a measurable safety culture, and a deliberate repeat-client mandate. 68% of our FY24 revenue came from clients who have worked with us on three or more packages.</p>
          <p>We work for the most demanding buyers in the country — NHAI, Indian Railways, L&T, Tata Projects, Adani, NTPC, Reliance — and we earn that work by performing every package as if it were the only one.</p>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-24">
          <SectionHeader eyebrow="Journey" title="Sixteen years. Six discipline lines. One operating model." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {milestones.map((m) => (
              <div key={m.year} className="bg-background p-8">
                <div className="font-serif text-4xl text-accent">{m.year}</div>
                <div className="mt-3 text-base font-medium text-primary">{m.title}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeader eyebrow="Leadership" title="Career operators. Not figureheads." />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {leadership.map((l) => (
            <div key={l.name} className="bg-background p-8">
              <div className="h-14 w-14 rounded-full bg-secondary grid place-items-center text-primary font-serif text-lg">
                {l.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <div className="mt-5 font-serif text-xl text-primary leading-tight">{l.name}</div>
              <div className="mt-1 text-[11px] tracking-[0.2em] uppercase text-accent">{l.title}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{l.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip />
    </>
  );
}

export function PageHero({ eyebrow, title, kicker, image }) {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
      </div>
      <div className="relative container-x pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="eyebrow text-accent"><span className="accent-rule bg-accent"></span>{eyebrow}</div>
        <h1 className="mt-5 font-serif text-[40px] md:text-[64px] leading-[1] tracking-tight max-w-4xl text-balance">{title}</h1>
        {kicker && <p className="mt-6 max-w-2xl text-primary-foreground/75 text-pretty">{kicker}</p>}
      </div>
    </section>
  );
}

export function CTAStrip() {
  return (
    <section className="container-x py-16">
      <div className="bg-primary text-primary-foreground p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="eyebrow text-accent"><span className="accent-rule bg-accent"></span>Next step</div>
          <div className="mt-3 font-serif text-2xl md:text-3xl">Engage our pre-construction team.</div>
        </div>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 text-[12px] tracking-[0.2em] uppercase">
          Start an inquiry <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
