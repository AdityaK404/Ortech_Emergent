import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CTAStrip from "@/components/site/CTAStrip";
import { services, images } from "@/data/site";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six discipline lines. One accountable delivery model."
        kicker="Owned plant, in-house engineering and a single point of accountability for cost, schedule and safety on every package we sign."
        image={images.servicesHero}
      />

      {/* Sticky anchor sub-nav */}
      <div className="sticky top-[76px] z-30 bg-white/95 backdrop-blur border-b border-border">
        <div className="container-x flex gap-1 overflow-x-auto py-3 no-scrollbar">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`#${s.slug}`}
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.1em] text-steel hover:text-navy-900 px-3 py-1.5 transition-colors"
            >
              {s.title.replace(/\s*\(.*\)/, "")}
            </Link>
          ))}
        </div>
      </div>

      <section className="container-x section-pad space-y-20 md:space-y-28">
        {services.map((s, i) => (
          <div key={s.slug} id={s.slug} className="scroll-mt-40 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="font-display font-semibold text-5xl text-navy-900/12">{String(i + 1).padStart(2, "0")}</div>
              <h2 className="mt-3 font-display font-semibold text-[clamp(1.6rem,2.6vw,2.25rem)] text-navy-900 leading-tight tracking-[-0.02em]">{s.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.summary}</p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {s.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-navy-900/85">{b}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="mt-8 link-accent">
                Discuss this discipline <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      <CTAStrip />
    </>
  );
}
