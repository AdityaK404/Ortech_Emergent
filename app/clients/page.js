import { trustedClients } from "@/data/site";
import { PageHero, CTAStrip } from "../about/page";
import { Quote } from "lucide-react";

export const metadata = { title: "Clients — ORTECH Infra Pvt Ltd" };

const sectors = [
  { name: "Government & PSU", items: ["NHAI", "Indian Railways", "NTPC", "NHIDCL", "State PWDs", "Smart Cities Mission"] },
  { name: "EPC Majors", items: ["L&T Construction", "Tata Projects", "Megha Engineering", "Dilip Buildcon", "NCC Limited"] },
  { name: "Private Enterprises", items: ["Adani Group", "Reliance Industries", "GMR Group", "JSW Steel", "UltraTech Cement"] },
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Hired by the most demanding buyers in Indian infrastructure."
        kicker="68% of FY24 revenue came from clients on three or more packages. Below is a partial list — detailed reference contacts are shared on request under NDA."
        image="https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg"
      />
      <section className="container-x py-24 space-y-16">
        {sectors.map((s) => (
          <div key={s.name}>
            <div className="eyebrow"><span className="accent-rule"></span>{s.name}</div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
              {s.items.map((c) => (
                <div key={c} className="bg-background p-6 grid place-items-center text-center">
                  <div className="font-serif text-lg text-primary">{c}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border mt-12">
          {[
            { q: "ORTECH ran Package 9 like a listed-major. Predictable, audit-clean, no surprises at handover.", a: "Project Director", c: "NHAI · NH-44 corridor" },
            { q: "Their precast yard delivered 60m PSC segments to tolerance, in monsoon, on a live river. That is rare in India.", a: "Chief Engineer", c: "Indian Railways · SCR" },
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
