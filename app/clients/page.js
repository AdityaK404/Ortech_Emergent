import { PageHero, CTAStrip } from "../about/page";
import { Quote } from "lucide-react";

export const metadata = { title: "Clients — ORTECH Infra Pvt Ltd" };

const sectors = [
  { name: "Telecom operators", items: ["Bharti Airtel", "BSNL", "Reliance Infocom", "Tata Teleservices", "Vodafone", "Nokia"] },
  { name: "EPC majors", items: ["Larsen & Toubro", "MEIL", "ITI Limited"] },
  { name: "Government & utilities", items: ["BTDA", "CPWD", "Karnataka Neeravari Nigam Ltd", "Karnataka Electricity Board"] },
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Trusted by operators, EPC majors and government bodies across India."
        kicker="Most of our work is repeat appointments. Reference contacts are available under NDA for shortlisted RFQs."
        image="https://images.unsplash.com/photo-1533664488202-6af66d26c44a"
      />
      <section className="container-x py-24 space-y-16">
        {sectors.map((s) => (
          <div key={s.name}>
            <div className="eyebrow"><span className="accent-rule"></span>{s.name}</div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
              {s.items.map((c) => (
                <div key={c} className="bg-background p-6 grid place-items-center text-center min-h-[96px]">
                  <div className="font-serif text-lg text-primary">{c}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border mt-12">
          {[
            { q: "ORTECH ran our Karnataka OFC rollout end-to-end — survey, HDD, blowing, splicing. Predictable, audit-clean handover.", a: "Rollout Lead", c: "Bharti Airtel · Karnataka" },
            { q: "Their HDD crew completed multiple arterial crossings in Belagavi for the city gas network on schedule. That kind of delivery is rare.", a: "Project Engineer", c: "MEIL · Belagavi CGD" },
          ].map((t) => (
            <div key={t.q} className="bg-background p-10">
              <Quote className="h-6 w-6 text-accent" />
              <p className="mt-5 font-serif text-xl md:text-2xl text-primary leading-snug text-balance">“{t.q}”</p>
              <div className="mt-6 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">{t.a} · {t.c}</div>
            </div>
          ))}
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
