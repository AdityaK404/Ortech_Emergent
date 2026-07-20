import Link from "next/link";
import { ArrowRight, Repeat2, Cog, MapPinned, FileCheck2 } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { clientSectors, testimonials, images, company, getYearsInOperation } from "@/data/site";
import { getClientLogoImages } from "@/lib/clientLogos";

export const metadata = { title: "Clients" };

const SECTOR_NOTES = {
  "Telecom operators": "National carriers whose OFC backbones, last-mile links and tower infrastructure we build.",
  "EPC majors": "Tier-1 EPCs that appoint ORTECH as their underground and telecom execution partner.",
  "Government & utilities": "State and central bodies for water, power and public network programmes.",
};

const WHY_RETURN = [
  { icon: Repeat2, title: "Repeat appointments", body: "Most of our order book is clients coming back for the next package." },
  { icon: Cog, title: "Owned plant & crews", body: "HDD rigs, cable plant and field teams in-house — no schedule roulette." },
  { icon: MapPinned, title: "Multi-state reach", body: "Licensed and mobilised across seven states, from Karnataka to Maharashtra." },
  { icon: FileCheck2, title: "Audit-clean handover", body: "OTDR-tested, hydro-tested, documented. Handover that survives scrutiny." },
];

// Soft, layered shadow used by the floating logo cards.
const CARD_SHADOW = "shadow-[0_1px_2px_rgba(11,31,51,0.05),0_10px_28px_rgba(11,31,51,0.08)]";
const CARD_SHADOW_HOVER = "hover:shadow-[0_16px_40px_rgba(11,31,51,0.16)]";

export default function ClientsPage() {
  const logos = getClientLogoImages();
  const years = getYearsInOperation();
  const clientCount = clientSectors.reduce((n, s) => n + s.items.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Repeat appointments from the names that build India."
        kicker="Telecom operators, EPC majors and government bodies return to ORTECH because we own the plant, retain the crews and own the outcome."
        image={images.clientsHero}
      />

      {/* LOGO WALL — floating cards on a navy-tinted canvas */}
      <section className="bg-[#EDF2F7] section-pad overflow-hidden">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow justify-center">Client portfolio</div>
            <h2 className="mt-4 font-display font-semibold text-[clamp(1.85rem,3.2vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-navy-900 text-balance">
              The companies that keep coming back.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-[15px]">
              Every logo below is a client we have executed for — not a target list. Built over {years} years of delivered packages.
            </p>
          </div>

          {/* stats ribbon */}
          <div className="mt-10 flex justify-center gap-10 md:gap-16">
            {[
              { v: `${clientCount}+`, l: "Clients served" },
              { v: "7", l: "States covered" },
              { v: `${years}`, l: "Years operating" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display font-semibold text-3xl md:text-4xl text-navy-900 tabular">{s.v}</div>
                <div className="mt-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-steel">{s.l}</div>
              </div>
            ))}
          </div>

          {/* floating logo cards — flex-wrap keeps the last row centered */}
          {logos.length > 0 && (
            <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-6">
              {logos.map((src, i) => (
                <div
                  key={src}
                  className={`group bg-white rounded-2xl ${CARD_SHADOW} ${CARD_SHADOW_HOVER} transition-all duration-300 hover:-translate-y-1.5 flex items-center justify-center p-6 md:p-8 w-[calc(50%-8px)] sm:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] aspect-[2/1]`}
                >
                  <img
                    src={src}
                    alt=""
                    loading={i > 5 ? "lazy" : undefined}
                    className="max-h-12 md:max-h-16 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.06]"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTORS — dark band */}
      <section className="bg-navy-950 text-white">
        <div className="container-x section-pad">
          <div className="max-w-2xl">
            <div className="eyebrow">By sector</div>
            <h2 className="mt-4 font-display font-semibold text-[clamp(1.85rem,3.2vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-balance">
              Three sectors. One standard of delivery.
            </h2>
          </div>
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {clientSectors.map((s, i) => (
              <div key={s.name} className="border-t border-navy-line pt-7">
                <div className="font-display font-semibold text-4xl text-white/15">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 font-display font-semibold text-xl">{s.name}</h3>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">{SECTOR_NOTES[s.name]}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.items.map((c) => (
                    <span key={c} className="rounded-full border border-white/15 px-3.5 py-1.5 text-[13px] text-white/85 transition-colors hover:border-accent hover:text-white">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THEY RETURN — floating cards on white */}
      <section className="bg-white section-pad">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="eyebrow">Why they return</div>
            <h2 className="mt-4 font-display font-semibold text-[clamp(1.85rem,3.2vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-navy-900 text-balance">
              Loyalty you earn one package at a time.
            </h2>
          </div>
          <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {WHY_RETURN.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className={`bg-white rounded-2xl border border-border ${CARD_SHADOW} ${CARD_SHADOW_HOVER} transition-all duration-300 hover:-translate-y-1.5 p-7 md:p-8`}
              >
                <div className="h-11 w-11 rounded-xl bg-[#EDF2F7] grid place-items-center">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-base text-navy-900">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — only render if real, attributable quotes exist */}
      {testimonials.length > 0 && (
        <section className="container-x pb-14 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.author} className="bg-secondary border border-border rounded-2xl p-8">
                <p className="text-lg text-navy-900 leading-relaxed">“{t.quote}”</p>
                <footer className="mt-6 text-sm">
                  <span className="font-semibold text-navy-900">{t.author}</span>
                  <span className="block text-steel">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {/* REFERENCES CLOSER */}
      <section className="bg-navy-950 text-white">
        <div className="container-x section-pad grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow">References</div>
            <h2 className="mt-4 font-display font-semibold text-[clamp(1.85rem,3.2vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-balance">
              Verify us before you shortlist us.
            </h2>
            <p className="mt-5 text-white/60 leading-relaxed max-w-xl">
              Project-specific references and work-completion certificates are shared under NDA
              during qualification. Ask, and we will connect you with the people we have delivered for.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 lg:items-end">
            <Link href="/contact" className="btn-accent w-full sm:w-auto lg:w-auto">
              Request references <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="btn-on-dark w-full sm:w-auto lg:w-auto">
              {company.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
