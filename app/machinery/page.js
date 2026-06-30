import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/site/SectionHeader";
import { machinery } from "@/data/site";
import { PageHero, CTAStrip } from "../about/page";

export const metadata = { title: "Machinery & Fleet — ORTECH Infra Pvt Ltd" };

export default function MachineryPage() {
  return (
    <>
      <PageHero
        eyebrow="Machinery"
        title="650+ owned heavy assets. Maintained in-house. Mobilized on demand."
        kicker="Plant ownership removes our largest schedule risk. Below is a summary of fleet categories — the full machinery schedule with serial numbers is available with the company profile."
        image="https://images.pexels.com/photos/5125783/pexels-photo-5125783.jpeg"
      />
      <section className="container-x py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {machinery.map((m) => (
          <div key={m.name} className="bg-background p-7">
            <div className="aspect-[4/3] overflow-hidden mb-6">
              <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex items-baseline justify-between">
              <div className="font-serif text-4xl text-primary">{m.count}</div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-accent">Owned</div>
            </div>
            <div className="mt-2 text-base font-medium text-primary">{m.name}</div>
            <div className="mt-1 text-sm text-muted-foreground">{m.spec}</div>
          </div>
        ))}
      </section>
      <section className="container-x pb-24">
        <div className="bg-secondary/60 border border-border p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="eyebrow"><span className="accent-rule"></span>Full schedule</div>
            <div className="mt-3 font-serif text-2xl text-primary">Need the complete fleet schedule with serial numbers and ages?</div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 text-[12px] tracking-[0.2em] uppercase">
            Request schedule <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
