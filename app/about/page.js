import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/site/SectionHeader";
import { milestones, leadership } from "@/data/site";

export const metadata = { title: "About — ORTECH Infra Pvt Ltd" };

const ABOUT_HERO = "https://images.unsplash.com/photo-1608303588026-884930af2559";

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="An infrastructure engineering and execution company — since 2000." image={ABOUT_HERO} />

      <section className="container-x py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="eyebrow"><span className="accent-rule"></span>Our promise</div>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl text-primary leading-tight">Engineered to deliver. Built to repeat.</h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
          <p>ORTECH Infra Pvt Ltd was founded in 2000 in Belagavi, Karnataka, to deliver specialised telecom and utility infrastructure for India's emerging operators. Over twenty-three years, we have grown into a multi-discipline infrastructure execution firm covering Telecom, Horizontal Directional Drilling (HDD), City Gas Distribution (CGD), Civil and Electrical infrastructure.</p>
          <p>We work for telecom operators (Airtel, BSNL, Vodafone, Tata Tele, Reliance), EPC majors (Larsen & Toubro, MEIL), government and utility bodies (BTDA, KEB, CPWD, KNNL), and a range of industrial clients. The work is delivered by a 200-strong field workforce, our owned HDD and cable plant, and an engineering team that has executed over 1,000 km of utility and telecom infrastructure.</p>
          <p>Our discipline is simple: own the equipment, retain the crews, and accept full accountability from survey to commissioned link. The repeat appointments we receive are the only evidence that matters.</p>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-24">
          <SectionHeader eyebrow="Journey" title="Twenty-three years. Six discipline lines." />
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
        <SectionHeader eyebrow="Leadership" title="A career operator at the helm." />
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {leadership.map((l) => (
            <div key={l.name} className="bg-background border border-border p-10">
              <div className="h-16 w-16 rounded-full bg-accent text-accent-foreground grid place-items-center font-serif text-xl">
                {l.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <div className="mt-6 font-serif text-2xl text-primary">{l.name}</div>
              <div className="mt-1 text-[11px] tracking-[0.2em] uppercase text-accent">{l.title}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{l.bio}</p>
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
          <div className="mt-3 font-serif text-2xl md:text-3xl">Talk to our execution team.</div>
        </div>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 text-[12px] tracking-[0.2em] uppercase">
          Start an inquiry <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
