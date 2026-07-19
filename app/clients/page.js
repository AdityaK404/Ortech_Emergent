import PageHero from "@/components/site/PageHero";
import CTAStrip from "@/components/site/CTAStrip";
import SectionHeader from "@/components/site/SectionHeader";
import { clientSectors, testimonials, images } from "@/data/site";
import { getClientLogoImages } from "@/lib/clientLogos";

export const metadata = { title: "Clients" };

export default function ClientsPage() {
  const logos = getClientLogoImages();

  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Repeat appointments from the names that build India."
        kicker="Telecom operators, EPC majors and government bodies return to ORTECH because we own the plant, retain the crews and own the outcome."
        image={images.clientsHero}
      />

      {/* LOGO WALL */}
      <section className="container-x section-pad">
        <SectionHeader eyebrow="Trusted by" title="A partner list built over two decades." align="center" />
        {logos.length > 0 ? (
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
            {logos.map((src) => (
              <div key={src} className="bg-white aspect-[3/2] flex items-center justify-center p-6">
                <img src={src} alt="" className="max-h-16 w-auto max-w-full object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition" />
              </div>
            ))}
          </div>
        ) : null}
      </section>

      {/* SECTORS */}
      <section className="bg-secondary border-y border-border">
        <div className="container-x section-pad">
          <SectionHeader eyebrow="By sector" title="Where our work lands." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientSectors.map((s) => (
              <div key={s.name} className="bg-white border border-border p-8">
                <div className="eyebrow-plain">{s.name}</div>
                <ul className="mt-6 space-y-3">
                  {s.items.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-navy-900 font-medium">
                      <span className="h-1.5 w-1.5 bg-accent" />{c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — only render if real, attributable quotes exist */}
      {testimonials.length > 0 && (
        <section className="container-x section-pad">
          <SectionHeader eyebrow="In their words" title="What partners say." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.author} className="bg-white border border-border p-8">
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

      {/* REFERENCES NOTE */}
      <section className="container-x pb-20">
        <div className="bg-navy-900 text-white p-10 md:p-14 text-center">
          <h3 className="font-display font-semibold text-2xl md:text-3xl tracking-[-0.02em]">Client references available on request</h3>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto leading-relaxed">
            We provide project-specific references and work-completion certificates under NDA during qualification. Contact us to arrange verification.
          </p>
        </div>
      </section>

      <CTAStrip title="Join the list of partners who rebuild with us." />
    </>
  );
}
