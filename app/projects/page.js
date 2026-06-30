"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Filter } from "lucide-react";
import { projects, projectCategories } from "@/data/site";

const HERO = "https://images.pexels.com/photos/16982346/pexels-photo-16982346.jpeg";

export default function ProjectsPage() {
  const [cat, setCat] = useState("All");
  const filtered = useMemo(
    () => (cat === "All" ? projects : projects.filter((p) => p.category === cat)),
    [cat]
  );
  return (
    <>
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        </div>
        <div className="relative container-x pt-28 pb-20 md:pt-36 md:pb-24">
          <div className="eyebrow text-accent"><span className="accent-rule bg-accent"></span>Projects</div>
          <h1 className="mt-5 font-serif text-[40px] md:text-[64px] leading-[1] tracking-tight max-w-4xl text-balance">
            100+ packages delivered. Referenceable on request.
          </h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/75">Filter by discipline to see relevant prior work. Every project on this page is referenceable on request.</p>
        </div>
      </section>

      <section className="sticky top-[72px] z-30 bg-background border-b border-border">
        <div className="container-x py-4 flex flex-wrap items-center gap-2">
          <Filter className="h-3.5 w-3.5 text-muted-foreground mr-2" />
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`text-[11px] tracking-[0.2em] uppercase px-4 py-2 border transition-colors ${
                cat === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground/70 border-border hover:border-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {filtered.map((p) => (
          <article key={p.slug} className="bg-background group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-3 left-3 bg-background/95 text-primary px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase">{p.category}</div>
            </div>
            <div className="p-7">
              <div className="text-[11px] tracking-[0.22em] uppercase text-accent">{p.client} · {p.state}</div>
              <h3 className="mt-2 font-serif text-xl text-primary leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
              <div className="mt-5 grid grid-cols-3 gap-3 pt-5 border-t border-border">
                <Meta l="Value" v={p.value} />
                <Meta l="Duration" v={p.duration} />
                <Meta l="Status" v={p.status} />
              </div>
              <ul className="mt-5 space-y-1.5">
                {p.proof.map((x) => (
                  <li key={x} className="text-[12px] text-foreground/75 flex gap-2"><span className="text-accent">•</span>{x}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="container-x pb-24 text-center">
        <p className="text-sm text-muted-foreground">Showing {filtered.length} of {projects.length} highlighted projects. Full project sheet available on request.</p>
        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 text-[12px] tracking-[0.2em] uppercase">
          Request full project sheet <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </section>
    </>
  );
}

function Meta({ l, v }) {
  return (
    <div>
      <div className="text-[9px] tracking-[0.22em] uppercase text-muted-foreground">{l}</div>
      <div className="mt-1 text-[12px] text-primary font-medium">{v}</div>
    </div>
  );
}
