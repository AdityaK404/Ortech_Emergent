import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Building2, Zap } from "lucide-react";
import ClientMarquee from "@/components/site/ClientMarquee";
import { services, process as processSteps, projects, heroStats, getYearsInOperation, images } from "@/data/site";
import { getClientLogoImages } from "@/lib/clientLogos";

const CREDENTIAL_STRIP = [
  { icon: ShieldCheck, label: "Government Registered" },
  { icon: Zap, label: "Class I — Electrical" },
  { icon: Building2, label: "Class I — Civil" },
  { icon: Award, label: "EPC Empanelled — L&T, MEIL" },
];

// Soft, layered shadow shared with the Clients page floating cards.
const CARD_SHADOW = "shadow-[0_1px_2px_rgba(11,31,51,0.05),0_10px_28px_rgba(11,31,51,0.08)]";
const CARD_SHADOW_HOVER = "hover:shadow-[0_16px_40px_rgba(11,31,51,0.16)]";

export default function Home() {
  const clientLogos = getClientLogoImages();
  const featured = projects.slice(0, 3);
  const years = getYearsInOperation();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <Image src={images.homeHero} alt="" fill priority sizes="100vw" className="object-cover opacity-30 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/80 to-navy-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
        </div>
        <div className="relative container-x pt-16 pb-14 md:pt-32 md:pb-28 text-white">
          <div className="fade-up max-w-4xl">
            <div className="eyebrow">Telecom · HDD · CGD · Civil · Electrical</div>
            <h1 className="mt-6 font-display font-semibold text-[clamp(2.6rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] text-balance">
              Digital & utility infrastructure,<br />
              <span className="text-accent">built with precision.</span>
            </h1>
            <p className="mt-6 md:mt-7 max-w-xl text-white/70 text-[15px] md:text-[16px] leading-relaxed">
              An infrastructure engineering and execution company delivering turnkey telecom,
              trenchless and utility networks for India&apos;s operators, EPC majors and government bodies since 2000.
            </p>
            <div className="mt-8 md:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact" className="btn-accent w-full sm:w-auto">Discuss your project <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/projects" className="btn-on-dark w-full sm:w-auto">View our projects</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-b border-border">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-border">
          {heroStats.map((s) => (
            <div key={s.label} className="py-6 md:py-10 px-3 md:px-8 text-center">
              <div className="font-display font-semibold text-navy-900 text-[30px] md:text-[46px] leading-none tabular">
                {s.value}{s.unit && <span className="text-[16px] md:text-[22px] ml-1 text-steel">{s.unit}</span>}
              </div>
              <div className="mt-2.5 md:mt-3 text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-steel leading-relaxed max-w-[200px] mx-auto">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS MARQUEE — trust first */}
      <section className="bg-white overflow-hidden section-pad">
        <div className="container-x text-center max-w-3xl mx-auto">
          <div className="eyebrow-plain">Reliability built on trust</div>
          <h2 className="mt-4 font-display font-semibold text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-navy-900 text-balance">
            Trusted by India&apos;s leading operators, EPCs and government bodies.
          </h2>
        </div>
        <div className="mt-14">
          <ClientMarquee logos={clientLogos} />
        </div>
      </section>
      {/* SERVICES */}
      <section className="bg-secondary section-pad">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="eyebrow">What we do</div>
              <h2 className="mt-4 font-display font-semibold text-[clamp(1.85rem,3.2vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-navy-900 text-balance">
                Six discipline lines, one accountable delivery model.
              </h2>
            </div>
            <Link href="/services" className="link-accent shrink-0">All services <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-border ${CARD_SHADOW} ${CARD_SHADOW_HOVER} transition-all duration-300 hover:-translate-y-1.5`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex flex-col flex-1 p-6 md:p-7">
                  <h3 className="font-display font-semibold text-lg text-navy-900 leading-snug">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.summary}</p>
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-accent">Learn more</span>
                    <span className="h-9 w-9 rounded-full grid place-items-center bg-[#EDF2F7] text-navy-900 transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white section-pad">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="eyebrow">How we deliver</div>
            <h2 className="mt-4 font-display font-semibold text-[clamp(1.85rem,3.2vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-navy-900 text-balance">
              Our proven rollout process.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {processSteps.map((s) => (
              <div key={s.n} className="border-t-2 border-accent pt-6">
                <div className="font-display font-semibold text-4xl text-navy-900/15">{s.n}</div>
                <h3 className="mt-3 font-display font-semibold text-lg text-navy-900">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-secondary section-pad">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="eyebrow">Selected work</div>
              <h2 className="mt-4 font-display font-semibold text-[clamp(1.85rem,3.2vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-navy-900 text-balance">
                Referenceable projects across seven states.
              </h2>
            </div>
            <Link href="/projects" className="link-accent shrink-0">All projects <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
            {featured.map((p) => (
              <article
                key={p.slug}
                className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-border ${CARD_SHADOW} ${CARD_SHADOW_HOVER} transition-all duration-300 hover:-translate-y-1.5`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-900 shadow-sm">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6 md:p-7">
                  <h3 className="font-display font-semibold text-lg text-navy-900 leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
                  <div className="mt-auto pt-6 flex items-center justify-between text-[12px] border-t border-border">
                    <span className="pt-4 text-navy-900 font-semibold">{p.client}</span>
                    <span className="pt-4 text-steel">{p.state}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section className="bg-navy-900 text-white">
        <div className="container-x py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6">
            {CREDENTIAL_STRIP.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4">
                <Icon className="h-6 w-6 md:h-7 md:w-7 text-accent shrink-0" />
                <span className="text-[13px] md:text-sm font-semibold leading-snug">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-navy-line flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-white/60 text-sm max-w-2xl">
              {years}+ years of continuous operation. Every certificate, work-completion letter and vendor approval is on file.
            </p>
            <Link href="/about#credentials" className="link-accent shrink-0">View credentials <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy-950 text-white">
        <div className="container-x section-pad text-center">
          <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.02em] text-balance max-w-3xl mx-auto">
            Ready to start your rollout?
          </h2>
          <p className="mt-5 text-white/60 max-w-xl mx-auto leading-relaxed">
            Partner with a specialist who owns the plant, retains the crews, and accepts accountability from survey to commissioned link.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <Link href="/contact" className="btn-accent">Request a quote <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/contact" className="btn-on-dark">Speak with an engineer</Link>
          </div>
        </div>
      </section>
    </>
  );
}
