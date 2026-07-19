import Link from "next/link";
import { ArrowRight, Award, FileText } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CTAStrip from "@/components/site/CTAStrip";
import SectionHeader from "@/components/site/SectionHeader";
import { milestones, leadership, machinery, credentials, images, getYearsInOperation } from "@/data/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  const years = getYearsInOperation();

  return (
    <>
      <PageHero
        eyebrow="About"
        title="An infrastructure engineering and execution company — since 2000."
        kicker={`${years} years delivering telecom, HDD, city gas, civil and electrical infrastructure across India — with owned plant and in-house crews.`}
        image={images.aboutHero}
      />

      {/* STORY */}
      <section className="container-x section-pad grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="eyebrow">Our promise</div>
          <h2 className="mt-4 font-display font-semibold text-[clamp(1.75rem,3vw,2.5rem)] text-navy-900 leading-[1.1] tracking-[-0.02em]">
            Engineered to deliver. Built to repeat.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
          <p>ORTECH Infra Pvt Ltd was founded in 2000 in Belagavi, Karnataka, to deliver specialised telecom and utility infrastructure for India&apos;s emerging operators. Over {years} years, we have grown into a multi-discipline infrastructure execution firm covering Telecom, Horizontal Directional Drilling (HDD), City Gas Distribution (CGD), Civil and Electrical infrastructure.</p>
          <p>We work for telecom operators (Airtel, BSNL, Vodafone, Tata Teleservices, Reliance), EPC majors (Larsen &amp; Toubro, MEIL), government and utility bodies (BTDA, KEB, CPWD, KNNL), and industrial clients. The work is delivered by our field workforce, our owned HDD and cable plant, and an engineering team with a long record of executed utility and telecom infrastructure. {/* TODO: confirm workforce size & total km delivered */}</p>
          <p>Our discipline is simple: own the equipment, retain the crews, and accept full accountability from survey to commissioned link. The repeat appointments we receive are the only evidence that matters.</p>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="bg-secondary border-y border-border">
        <div className="container-x section-pad">
          <SectionHeader eyebrow="Journey" title={`${years} years. Six discipline lines.`} />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="bg-white border border-border p-7">
                <div className="font-display font-semibold text-3xl text-accent">{m.year}</div>
                <div className="mt-3 text-base font-semibold text-navy-900">{m.title}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="container-x section-pad">
        <SectionHeader eyebrow="Leadership" title="A career operator at the helm." />
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leadership.map((l) => (
            <div key={l.name} className="bg-white border border-border p-8 md:p-10">
              <div className="h-16 w-16 bg-navy-900 text-white grid place-items-center font-display font-semibold text-xl">
                {l.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <div className="mt-6 font-display font-semibold text-2xl text-navy-900">{l.name}</div>
              <div className="mt-1 eyebrow-plain">{l.title}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{l.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MACHINERY */}
      <section id="machinery" className="bg-secondary border-y border-border scroll-mt-24">
        <div className="container-x section-pad">
          <SectionHeader
            eyebrow="Plant & Machinery"
            title="Owned HDD rigs, cable plant and survey kit — all in-house."
            kicker="Plant ownership removes our single largest schedule risk. The full machinery schedule, with serial numbers and ages, accompanies the company profile on request."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {machinery.map((m) => (
              <div key={m.name} className="bg-white p-7">
                <div className="flex items-baseline justify-between">
                  <div className="font-display font-semibold text-3xl text-navy-900">{m.count}</div>
                  <div className="eyebrow-plain">Owned</div>
                </div>
                <div className="mt-3 text-base font-semibold text-navy-900">{m.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{m.spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section id="credentials" className="container-x section-pad scroll-mt-24">
        <SectionHeader
          eyebrow="Credentials"
          title="Government registered. Class-I certified. EPC empanelled."
          kicker="Every certificate, work-completion letter and vendor approval is on file. Request the complete bundle and our team will share it within one business day."
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {credentials.map((c) => (
            <div key={c.code} className="bg-white p-6">
              <Award className="h-6 w-6 text-accent" />
              <div className="mt-5 font-display font-semibold text-sm text-navy-900">{c.code}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.title}</div>
              <div className="mt-4 text-[10px] tracking-[0.16em] uppercase text-steel">{c.issuer} · {c.year}</div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/contact" className="inline-flex items-center gap-3 bg-white border border-border p-6 hover:border-navy-900/25 transition-colors group w-full md:w-auto">
            <div className="h-10 w-10 bg-secondary text-navy-900 grid place-items-center"><FileText className="h-4 w-4" /></div>
            <span className="text-sm">
              <span className="block font-semibold text-navy-900">Document library available on request</span>
              <span className="block text-muted-foreground">Company profile, licenses & completion certificates</span>
            </span>
            <ArrowRight className="h-4 w-4 text-accent ml-auto group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
