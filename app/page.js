import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/site/SectionHeader";
import { services, milestones, heroStats } from "@/data/site";
import { getClientLogoImages } from "@/lib/clientLogos";

const HERO = "/home-banner.jpg";
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

export default function Home() {
  const clientLogos = getClientLogoImages();
  const marqueeLogos = clientLogos.length ? [...clientLogos, ...clientLogos] : [];

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <img src={HERO} alt="Underground utility installation" className="h-full w-full object-cover opacity-45 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        </div>
        <div className="relative container-x pt-20 pb-20 md:pt-24 md:pb-24 text-white">
          <div className="fade-up max-w-4xl">
            <h1 className="font-hero text-[40px] md:text-[68px] leading-[1.08] tracking-tight text-balance">
              Telecom & Township Digital Infrastructure <br></br><span className="text-accent">Built with Precision and Reliability</span>
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Request a Project <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/projects" className="btn-outline-dark">View Our Projects</Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container-x grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {heroStats.map((s, i) => (
              <div key={s.label} className="py-6 md:py-8 flex flex-col items-center text-center">
                <div className="font-display text-3xl md:text-4xl text-white">{s.value}</div>
                <div className="mt-2 text-[11px] tracking-[0.14em] uppercase text-white/50 max-w-[220px] leading-relaxed">{s.label}</div>
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

      {/* ========== TRUSTED-BY MARQUEE ========== */}
      <section className="bg-background border-y border-neutral-200 overflow-hidden pb-16 md:pb-20">
        <div className="container-x pt-16 md:pt-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="eyebrow">Reliability Built on Trust</div>
            <h2 className="mt-3 font-display text-[30px] md:text-[42px] leading-[1.05] tracking-tight text-neutral-900 text-balance">
              Trusted by India's leading operators, EPCs and government bodies.
            </h2>
          </div>
        </div>
        {marqueeLogos.length > 0 && (
          <div className="mt-14 relative">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex w-max animate-marquee items-center">
              {marqueeLogos.map((src, i) => (
                <div key={`${src}-${i}`} className="flex items-center px-8 md:px-12 shrink-0">
                  <img
                    src={src}
                    alt=""
                    className="h-12 md:h-16 w-auto max-w-[160px] md:max-w-[200px] object-contain opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
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
        <div className="container-x pt-20 pb-4 md:pt-28 md:pb-4 text-center">
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
  "/HDD.jpg",
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
