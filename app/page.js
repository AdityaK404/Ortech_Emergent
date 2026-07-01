import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import SectionHeader from "@/components/site/SectionHeader";
import { services, projects, machinery, milestones, heroStats } from "@/data/site";

const HERO = "https://images.unsplash.com/photo-1559510981-10719ce4266a";
const PROBLEMS = [
  { img: "https://images.unsplash.com/photo-1509390144018-eeaf65052242", title: "Missed Deadlines", body: "Poorly-planned OFC routes and rented HDD rigs derail rollouts. Our owned 5-rig fleet + in-house survey team keeps schedule on track." },
  { img: "https://images.unsplash.com/photo-1559510981-10719ce4266a", title: "Costly Rework", body: "Bad splicing, weak welding or non-compliant cabling means rework, penalties and reputation loss. Every ORTECH job is OTDR / hydro tested before handover." },
  { img: "https://images.unsplash.com/photo-1509390673020-a5b2450e33f1", title: "Safety & Compliance Risk", body: "Class I Electrical / Civil registration, documented method statements and daily toolbox talks eliminate incident exposure across live-utility sites." },
];
const PROCESS = [
  { n: "01", title: "Survey & Planning", body: "Route survey, GPS mapping, ROW planning and utility locating — before a single trench is opened." },
  { n: "02", title: "HDD or Open-Cut", body: "Owned 5-rig HDD fleet for trenchless crossings; open-cut trenching for greenfield corridors." },
  { n: "03", title: "Cable / Pipe Install", body: "OFC blowing, MDPE/steel pipe laying, HT/LT cable pulling — executed by our own 200-strong crew." },
  { n: "04", title: "Test & Handover", body: "OTDR, hydro-testing and commissioning. Audit-clean handover with as-built documentation." },
];
const SERVICE_AREAS = [
  { name: "Belagavi", img: "https://images.unsplash.com/photo-1759579478942-a6992a87fb8f", desc: "HQ and primary HDD & CGD execution base. City gas distribution and municipal utility corridors." },
  { name: "North Karnataka", img: "https://images.unsplash.com/photo-1533664488202-6af66d26c44a", desc: "Telecom backbone and last-mile OFC across Belagavi, Bagalkot, Dharwad and Hubli." },
  { name: "Uttara Kannada", img: "https://images.unsplash.com/photo-1772600110243-f4e1349259b6", desc: "BSNL 4G saturation programme — 24F OFC across coastal Karnataka with HDD + open trench hybrid." },
  { name: "Maharashtra", img: "https://images.unsplash.com/photo-1583024011792-b165975b52f5", desc: "L&T BSNL packages — underground OFC and utility infrastructure across the state." },
];
const TESTIMONIALS = [
  { q: "ORTECH ran our Karnataka OFC rollout end-to-end — survey, HDD, blowing, splicing. Predictable, audit-clean handover.", who: "Rollout Lead", where: "Bharti Airtel · Karnataka" },
  { q: "Their HDD crew completed multiple arterial crossings in Belagavi for the city gas network on schedule. That kind of delivery is rare.", who: "Project Engineer", where: "MEIL · Belagavi CGD" },
  { q: "On the BSNL Maharashtra package, ORTECH delivered underground OFC to spec with clean weekly reporting and zero safety incidents.", who: "EPC Package Manager", where: "Larsen & Toubro" },
];

export default function Home() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <img src={HERO} alt="Underground utility installation" className="h-full w-full object-cover opacity-45 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        </div>
        <div className="relative container-x pt-24 pb-28 md:pt-32 md:pb-36 text-white">
          <div className="fade-up max-w-4xl">
            <h1 className="font-display text-[44px] md:text-[76px] leading-[0.98] tracking-tight text-balance">
              Telecom & Utility Infrastructure Contractors That Deliver <span className="text-accent">On Time, Every Time</span>
            </h1>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-white/70 max-w-2xl text-pretty">
              Turnkey OFC, HDD, City Gas Distribution, Civil and Electrical infrastructure for telecom
              operators, EPC majors and government bodies across India. Engineering precision met with
              heavy-duty execution since 2000.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Request a Project <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/projects" className="btn-outline-dark">View Our Projects</Link>
            </div>
          </div>
        </div>
        <div className="relative border-t border-ink-3">
          <div className="container-x grid grid-cols-2 md:grid-cols-4">
            {heroStats.map((s, i) => (
              <div key={s.label} className={`py-8 md:py-10 ${i !== 0 ? "md:border-l border-ink-3" : ""} ${i % 2 !== 0 ? "border-l border-ink-3 md:border-l" : ""}`}>
                <div className="font-display text-3xl md:text-4xl text-white">{s.value}</div>
                <div className="mt-2 text-[11px] tracking-[0.14em] uppercase text-white/50 max-w-[220px] leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== COSTLY PROBLEMS ========== */}
      <section className="bg-ink text-white">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="font-display text-[30px] md:text-[42px] leading-[1.05] tracking-tight text-white text-balance">
              The Costly Problems of Telecom & Utility Rollouts
            </h2>
            <p className="mt-5 text-[15px] text-white/60 leading-relaxed">
              Subsurface work, live-utility crossings, and pan-state OFC rollouts derail timelines and budgets in hours. We eliminate the friction through owned plant, in-house engineering, and rigid safety protocols.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="bg-ink-2 border border-ink-3 p-6">
                <div className="aspect-[16/10] overflow-hidden mb-6">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover grayscale" />
                </div>
                <h3 className="font-display text-xl text-white">{p.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="bg-background">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="font-display text-[30px] md:text-[42px] leading-[1.05] tracking-tight text-neutral-900 text-balance">
              Our Proven Rollout Process
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {PROCESS.map((s) => (
              <div key={s.n}>
                <div className="font-display text-5xl text-neutral-300">{s.n}</div>
                <h3 className="mt-4 font-display text-xl text-neutral-900">{s.title}</h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="bg-background">
        <div className="container-x py-20 md:py-28">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display text-[30px] md:text-[42px] leading-[1.05] tracking-tight text-neutral-900 text-balance max-w-2xl">
              Our Telecom & Utility Services
            </h2>
            <Link href="/services" className="link-orange hidden md:inline-flex">All Services <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.slice(0, 3).map((s, i) => (
              <ServiceCard key={s.slug} service={s} image={SERVICE_IMGS[i]} />
            ))}
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.slice(3, 5).map((s, i) => (
              <ServiceCard key={s.slug} service={s} image={SERVICE_IMGS[i + 3]} large />
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICE AREAS ========== */}
      <section className="bg-background">
        <div className="container-x py-20 md:py-28">
          <h2 className="font-display text-[30px] md:text-[42px] uppercase tracking-tight text-neutral-900 text-balance">
            Our Service Areas
          </h2>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {SERVICE_AREAS.map((a) => (
              <div key={a.name} className="group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={a.img} alt={a.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-5 font-display text-lg uppercase tracking-tight text-neutral-900">{a.name}</div>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{a.desc}</p>
                <Link href="/projects" className="mt-4 link-orange inline-flex">Explore {a.name.split(" ")[0]} <ArrowRight className="h-3 w-3" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WORK IN THE FIELD (PROJECTS) ========== */}
      <section className="bg-secondary/60 border-y border-border">
        <div className="container-x py-20 md:py-28">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <h2 className="font-display text-[30px] md:text-[42px] leading-[1.05] tracking-tight text-neutral-900 text-balance">
                Our Work in the Field
              </h2>
              <p className="mt-4 text-sm text-neutral-600">Successful telecom, HDD and utility deployments across India.</p>
            </div>
            <Link href="/projects" className="link-orange hidden md:inline-flex">View All Projects <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p) => (
              <article key={p.slug} className="bg-white group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="tag-orange">{p.category}</div>
                  <h3 className="mt-3 font-display text-xl text-neutral-900 leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{p.summary}</p>
                  <div className="mt-5 pt-5 border-t border-neutral-200 text-[11px] tracking-[0.14em] uppercase text-neutral-500">
                    {p.client} · {p.state}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== RELIABILITY / TESTIMONIALS ========== */}
      <section className="bg-background">
        <div className="container-x py-20 md:py-28">
          <h2 className="font-display text-[30px] md:text-[42px] leading-[1.05] tracking-tight text-neutral-900 text-balance text-center">
            Reliability Built on Trust
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.q} className="bg-white border border-neutral-200 p-8">
                <Quote className="h-6 w-6 text-accent" strokeWidth={2.5} />
                <p className="mt-5 text-[15px] text-neutral-700 leading-relaxed">“{t.q}”</p>
                <div className="mt-6 h-px w-10 bg-accent" />
                <div className="mt-5 font-display text-sm text-neutral-900">{t.who}</div>
                <div className="mt-1 text-[11px] tracking-[0.14em] uppercase text-neutral-500">{t.where}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INLINE QUOTE FORM ========== */}
      <section className="bg-background">
        <div className="container-x pb-24">
          <div className="bg-white border border-neutral-200 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
            <div className="p-10 md:p-14">
              <h2 className="font-display text-[28px] md:text-[36px] leading-[1.05] tracking-tight text-neutral-900 text-balance">
                Request a Quote for Your Rollout or Package
              </h2>
              <p className="mt-4 text-sm text-neutral-600">Share your scope. We respond within 24 hours with a structured capability fit.</p>
              <form action="/contact" className="mt-8 space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <FormField label="Full Name" placeholder="First Last" />
                  <FormField label="Phone Number" placeholder="+91 00000 00000" />
                </div>
                <FormField label="Email Address" placeholder="email@company.com" type="email" />
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500">Project Type</label>
                  <select className="mt-2 w-full bg-white border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900">
                    <option>Select Service</option>
                    <option>Telecom / OFC Rollout</option>
                    <option>HDD (Trenchless)</option>
                    <option>City Gas Distribution</option>
                    <option>Civil / Electrical</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500">Project Details</label>
                  <textarea rows={4} placeholder="Scope of work and timeline…" className="mt-2 w-full bg-white border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900"></textarea>
                </div>
                <Link href="/contact" className="btn-primary w-full">Submit Project Inquiry <ArrowRight className="h-4 w-4" /></Link>
              </form>
            </div>
            <div className="relative min-h-[400px] lg:min-h-[600px]">
              <img src="https://images.unsplash.com/photo-1759579478942-a6992a87fb8f" alt="Trench excavation" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="bg-ink text-white">
        <div className="container-x py-20 md:py-28 text-center">
          <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-tight text-balance max-w-3xl mx-auto">
            Ready to Start Your Rollout?
          </h2>
          <p className="mt-5 text-white/60 max-w-xl mx-auto">Don't leave your subsurface or telecom infrastructure to chance. Partner with the specialists who understand the weight of the work.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">Request Quote Now <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/contact" className="btn-ghost-dark">Speak with an Engineer</Link>
          </div>
        </div>
      </section>
    </>
  );
}

const SERVICE_IMGS = [
  "https://images.unsplash.com/photo-1533664488202-6af66d26c44a",
  "https://images.unsplash.com/photo-1759579478942-a6992a87fb8f",
  "https://images.unsplash.com/photo-1559510981-10719ce4266a",
  "https://images.unsplash.com/photo-1772600110243-f4e1349259b6",
  "https://images.unsplash.com/photo-1509390144018-eeaf65052242",
];

function ServiceCard({ service, image, large = false }) {
  return (
    <Link href="/services" className={`group relative overflow-hidden block ${large ? "aspect-[16/9]" : "aspect-square"}`}>
      <img src={image} alt={service.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 text-white">
        <h3 className="font-display text-xl md:text-2xl leading-tight">{service.title}</h3>
        <p className="mt-2 text-sm text-white/75 leading-relaxed max-w-md">{service.summary}</p>
      </div>
    </Link>
  );
}

function FormField({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500">{label}</label>
      <input type={type} placeholder={placeholder} className="mt-2 w-full bg-white border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900" />
    </div>
  );
}
