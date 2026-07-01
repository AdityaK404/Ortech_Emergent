import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/site/SectionHeader";
import { milestones, leadership } from "@/data/site";

export const metadata = { title: "About — ORTECH Infra Pvt Ltd" };

const ABOUT_HERO = "https://images.unsplash.com/photo-1608303588026-884930af2559";

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="An infrastructure engineering and execution company — since 2000." image={ABOUT_HERO} />

      <section className="container-x py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="eyebrow">Our promise</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-neutral-900 leading-tight">Engineered to deliver. Built to repeat.</h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-neutral-600 leading-relaxed">
          <p>ORTECH Infra Pvt Ltd was founded in 2000 in Belagavi, Karnataka, to deliver specialised telecom and utility infrastructure for India's emerging operators. Over twenty-three years, we have grown into a multi-discipline infrastructure execution firm covering Telecom, Horizontal Directional Drilling (HDD), City Gas Distribution (CGD), Civil and Electrical infrastructure.</p>
          <p>We work for telecom operators (Airtel, BSNL, Vodafone, Tata Tele, Reliance), EPC majors (Larsen & Toubro, MEIL), government and utility bodies (BTDA, KEB, CPWD, KNNL), and industrial clients. The work is delivered by a 200-strong field workforce, our owned HDD and cable plant, and an engineering team that has executed over 1,000 km of utility and telecom infrastructure.</p>
          <p>Our discipline is simple: own the equipment, retain the crews, and accept full accountability from survey to commissioned link. The repeat appointments we receive are the only evidence that matters.</p>
        </div>
      </section>

      <section className="bg-secondary/60 border-y border-border">
        <div className="container-x py-20">
          <SectionHeader eyebrow="Journey" title="Twenty-three years. Six discipline lines." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="bg-white border border-neutral-200 p-7">
                <div className="font-display text-4xl text-accent">{m.year}</div>
                <div className="mt-3 text-base font-semibold text-neutral-900">{m.title}</div>
                <div className="mt-2 text-sm text-neutral-600 leading-relaxed">{m.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeader eyebrow="Leadership" title="A career operator at the helm." />
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leadership.map((l) => (
            <div key={l.name} className="bg-white border border-neutral-200 p-10">
              <div className="h-16 w-16 rounded-full bg-accent text-white grid place-items-center font-display text-xl">
                {l.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <div className="mt-6 font-display text-2xl text-neutral-900">{l.name}</div>
              <div className="mt-1 text-[11px] tracking-[0.18em] uppercase text-accent font-semibold">{l.title}</div>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">{l.bio}</p>
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
    <section className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      </div>
      <div className="relative container-x pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="mt-4 font-display text-[38px] md:text-[60px] leading-[1] tracking-tight max-w-4xl text-balance">{title}</h1>
        {kicker && <p className="mt-6 max-w-2xl text-white/70 text-pretty text-[15px]">{kicker}</p>}
      </div>
    </section>
  );
}

export function CTAStrip() {
  return (
    <section className="bg-ink text-white">
      <div className="container-x py-16 md:py-20 text-center">
        <h2 className="font-display text-[28px] md:text-[40px] leading-[1.05] tracking-tight text-balance max-w-3xl mx-auto">
          Ready to Start Your Rollout?
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-primary">Request Quote Now <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/contact" className="btn-ghost-dark">Speak with an Engineer</Link>
        </div>
      </div>
    </section>
  );
}
