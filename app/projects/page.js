"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CTAStrip from "@/components/site/CTAStrip";
import { projects, projectCategories, images } from "@/data/site";

export default function ProjectsPage() {
  const [cat, setCat] = useState("All");
  const filtered = useMemo(
    () => (cat === "All" ? projects : projects.filter((p) => p.category === cat)),
    [cat]
  );

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Referenceable work across seven states."
        kicker="Filter by discipline to see relevant prior work — across Telecom OFC, HDD, CGD, Civil and Electrical scope."
        image={images.projectsHero}
      />

      {/* Filter bar */}
      <section className="sticky top-[76px] z-30 bg-white/95 backdrop-blur border-b border-border">
        <div className="container-x py-4 flex flex-wrap items-center gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-2 border transition-colors ${
                cat === c
                  ? "bg-navy-900 text-white border-navy-900"
                  : "bg-white text-steel border-border hover:border-navy-900"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-x section-pad grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <article key={p.slug} className="group bg-white border border-border hover:border-navy-900/25 hover:shadow-sm transition-all">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="eyebrow-plain">{p.category}</span>
                <span className="text-[11px] uppercase tracking-[0.1em] text-steel">{p.status}</span>
              </div>
              <h3 className="mt-3 font-display font-semibold text-xl text-navy-900 leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
              <div className="mt-5 grid grid-cols-2 gap-3 pt-5 border-t border-border">
                <Meta l="Client" v={p.client} />
                <Meta l="Location" v={p.state} />
              </div>
              <ul className="mt-5 space-y-1.5">
                {p.proof.map((x) => (
                  <li key={x} className="text-[12px] text-navy-900/80 flex gap-2">
                    <span className="text-accent">•</span>{x}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="container-x pb-20 text-center">
        <p className="text-sm text-muted-foreground">
          Showing {filtered.length} of {projects.length} highlighted projects. Full project sheet available on request.
        </p>
        <Link href="/contact" className="mt-6 btn-primary inline-flex">
          Request full project sheet <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <CTAStrip />
    </>
  );
}

function Meta({ l, v }) {
  return (
    <div>
      <div className="text-[9px] tracking-[0.12em] uppercase text-steel">{l}</div>
      <div className="mt-1 text-[12px] text-navy-900 font-semibold">{v}</div>
    </div>
  );
}
