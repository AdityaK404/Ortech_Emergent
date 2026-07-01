"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import { projects, projectCategories } from "@/data/site";

const HERO = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e";

export default function ProjectsPage() {
  const [cat, setCat] = useState("All");
  const filtered = useMemo(() => (cat === "All" ? projects : projects.filter((p) => p.category === cat)), [cat]);
  return (
    <>
      <section className="relative bg-ink text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        </div>
        <div className="relative container-x pt-24 pb-20 md:pt-32 md:pb-24">
          <div className="eyebrow">Projects</div>
          <h1 className="mt-4 font-display text-[38px] md:text-[60px] leading-[1] tracking-tight max-w-4xl text-balance">
            100+ packages delivered. Referenceable on request.
          </h1>
          <p className="mt-6 max-w-2xl text-white/70 text-[15px]">Filter by discipline to see relevant prior work — across Telecom OFC, HDD, CGD, Civil and Electrical scope.</p>
        </div>
      </section>

      <section className="sticky top-[72px] z-30 bg-background border-b border-border">
        <div className="container-x py-4 flex flex-wrap items-center gap-2">
          <Filter className="h-3.5 w-3.5 text-neutral-400 mr-2" />
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`text-[11px] font-semibold tracking-[0.14em] uppercase px-4 py-2 border transition-colors ${
                cat === c ? "bg-neutral-900 text-white border-neutral-900" : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-900"
              }`}
            >{c}</button>
          ))}
        </div>
      </section>

      <section className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <article key={p.slug} className="bg-white border border-neutral-200 group">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="tag-orange">{p.category}</div>
              <h3 className="mt-3 font-display text-xl text-neutral-900 leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{p.summary}</p>
              <div className="mt-5 grid grid-cols-3 gap-3 pt-5 border-t border-neutral-200">
                <Meta l="Client" v={p.client} />
                <Meta l="Location" v={p.state} />
                <Meta l="Status" v={p.status} />
              </div>
              <ul className="mt-5 space-y-1.5">
                {p.proof.map((x) => (
                  <li key={x} className="text-[12px] text-neutral-700 flex gap-2"><span className="text-accent">•</span>{x}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="container-x pb-20 text-center">
        <p className="text-sm text-neutral-600">Showing {filtered.length} of {projects.length} highlighted projects. Full project sheet available on request.</p>
        <Link href="/contact" className="mt-6 btn-primary inline-flex">Request Full Project Sheet <ArrowRight className="h-4 w-4" /></Link>
      </section>
    </>
  );
}

function Meta({ l, v }) {
  return (
    <div>
      <div className="text-[9px] tracking-[0.14em] uppercase text-neutral-500">{l}</div>
      <div className="mt-1 text-[12px] text-neutral-900 font-semibold">{v}</div>
    </div>
  );
}
