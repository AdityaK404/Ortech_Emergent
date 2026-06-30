import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, Award, Truck, HardHat, Building2, Compass, CheckCircle2, Quote } from "lucide-react";
import SectionHeader from "@/components/site/SectionHeader";
import { heroStats, trustedClients, services, projects, machinery, milestones, credentials, leadership, company } from "@/data/site";

const HERO_IMG = "https://images.pexels.com/photos/16982346/pexels-photo-16982346.jpeg";
const ABOUT_IMG = "https://images.pexels.com/photos/13083354/pexels-photo-13083354.jpeg";
const BLUEPRINT_IMG = "https://images.pexels.com/photos/4458205/pexels-photo-4458205.jpeg";
const SAFETY_IMG = "https://images.unsplash.com/photo-1593313637552-29c2c0dacd35";
const SAFETY_IMG_2 = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f";
const LEADERSHIP_IMG = "https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="ORTECH highway under construction"
            className="h-full w-full object-cover opacity-50 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
        </div>

        <div className="relative container-x pt-28 pb-32 md:pt-40 md:pb-48 text-primary-foreground">
          <div className="fade-up max-w-3xl">
            <div className="eyebrow text-accent">
              <span className="accent-rule bg-accent"></span>Est. 2008 · Hyderabad, India
            </div>
            <h1 className="mt-6 font-serif text-[44px] md:text-[72px] leading-[0.98] tracking-tight text-balance">
              Building the foundations of an{" "}
              <span className="italic text-accent/95">accelerating</span> India.
            </h1>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-primary-foreground/80 max-w-2xl text-pretty">
              ORTECH Infra is a multi-discipline heavy civil contractor delivering
              highways, bridges, industrial sites and urban infrastructure across
              14 states — with an owned fleet of 650+ assets, ISO-triad certification
              and a zero-harm operating culture.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/projects" className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 text-[12px] tracking-[0.2em] uppercase hover:bg-accent/90">
                Explore Projects
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3.5 text-[12px] tracking-[0.2em] uppercase hover:bg-primary-foreground/10">
                Download Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-primary-foreground/15">
          <div className="container-x grid grid-cols-2 md:grid-cols-4">
            {heroStats.map((s, i) => (
              <div key={s.label} className={`py-8 md:py-10 ${i !== 0 ? "md:border-l border-primary-foreground/15" : ""} ${i % 2 !== 0 ? "border-l border-primary-foreground/15 md:border-l" : ""}`}>
                <div className="font-serif text-3xl md:text-4xl text-primary-foreground">{s.value}</div>
                <div className="mt-2 text-[11px] tracking-[0.18em] uppercase text-primary-foreground/60 max-w-[220px] leading-relaxed">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRUSTED BY ============ */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container-x py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              <span className="accent-rule"></span>Trusted by India's most demanding clients
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-8 items-center">
              {trustedClients.map((c) => (
                <div key={c} className="text-[12px] md:text-[13px] font-medium tracking-wide text-primary/70 hover:text-primary text-center">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT / TIMELINE ============ */}
      <section className="container-x py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={ABOUT_IMG} alt="Engineers reviewing blueprint" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-10 bg-card border border-border px-6 py-5 max-w-[260px] shadow-sm">
            <div className="eyebrow text-accent"><span className="accent-rule bg-accent"></span>Since 2008</div>
            <div className="mt-2 font-serif text-2xl text-primary leading-tight">17 years of evidence-led delivery.</div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="About ORTECH"
            title="A heavy-civil contractor built around proof, plant ownership and people."
            kicker="From a specialist earthwork firm in 2008 to a national multi-discipline contractor today — our trajectory has been defined by repeat work from anchor clients, an owned fleet that de-risks schedule, and an engineering team that values evidence over rhetoric."
          />
          <div className="mt-12 space-y-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="grid grid-cols-12 gap-6 pb-6 border-b border-border last:border-0">
                <div className="col-span-3 md:col-span-2 font-serif text-2xl text-accent">{m.year}</div>
                <div className="col-span-9 md:col-span-10">
                  <div className="text-[15px] font-medium text-primary">{m.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <SectionHeader
              eyebrow="What we build"
              title="Six disciplines. One integrated delivery model."
              kicker="Owned plant, in-house engineering, and a single P&L for every package — enabling us to take direct accountability for cost, schedule and safety outcomes."
            />
            <Link href="/services" className="shrink-0 inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-primary hover:text-accent">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href="/services"
                className="group relative bg-background p-8 md:p-10 hover:bg-card transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="font-serif text-5xl text-accent/30 group-hover:text-accent transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-primary leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.summary}</p>
                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[13px] text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY ORTECH ============ */}
      <section className="container-x py-24 md:py-32">
        <SectionHeader
          eyebrow="Why ORTECH"
          title="Four operating principles that compound into delivery certainty."
          align="center"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {[
            { icon: Truck, title: "Owned plant, not rented", body: "650+ heavy assets on our books. Schedule risk does not depend on the open market." },
            { icon: HardHat, title: "Zero-harm safety", body: "ISO 45001 certified. 4.8M consecutive man-hours without an LTI on flagship packages." },
            { icon: ShieldCheck, title: "In-house engineering", body: "Structural, geotech and value-engineering teams — we own the design interface." },
            { icon: Award, title: "Repeat-client mandate", body: "68% of FY24 revenue from clients who have worked with us on three or more packages." },
          ].map((p) => (
            <div key={p.title} className="bg-background p-8 md:p-10">
              <div className="h-12 w-12 grid place-items-center bg-secondary text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-primary leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="eyebrow text-accent"><span className="accent-rule bg-accent"></span>Selected projects</div>
              <h2 className="mt-4 font-serif text-[34px] md:text-[44px] leading-[1.05] tracking-tight text-balance">
                Six packages. ₹1,800 Cr. <span className="italic text-accent">Delivered, audited, referenceable.</span>
              </h2>
            </div>
            <Link href="/projects" className="shrink-0 inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-accent hover:text-primary-foreground">
              View all 180+ projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.slice(0, 4).map((p) => (
              <Link href="/projects" key={p.slug} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-background/95 text-primary px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase">
                    {p.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="text-[11px] tracking-[0.22em] uppercase text-accent">{p.client} · {p.state}</div>
                    <h3 className="mt-2 font-serif text-2xl md:text-[28px] leading-tight text-primary-foreground">{p.title}</h3>
                    <div className="mt-4 flex items-center gap-6 text-[12px] text-primary-foreground/80">
                      <span>{p.value}</span>
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      <span>{p.duration}</span>
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      <span>{p.status}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FLEET PREVIEW ============ */}
      <section className="container-x py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Owned fleet"
              title="650+ assets on our books. Maintained by us. Deployed by us."
              kicker="Plant ownership is a deliberate strategic choice. It removes our largest schedule risk and lets us guarantee mobilization timelines that contractors reliant on rented fleet simply cannot."
            />
            <Link href="/machinery" className="mt-8 inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-primary hover:text-accent">
              Full machinery schedule <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-px bg-border">
            {machinery.slice(0, 4).map((m) => (
              <div key={m.name} className="bg-background p-6">
                <div className="aspect-[4/3] overflow-hidden mb-5">
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex items-baseline justify-between">
                  <div className="font-serif text-3xl text-primary">{m.count}</div>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Owned</div>
                </div>
                <div className="mt-1 text-sm font-medium text-primary">{m.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CREDENTIALS ============ */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <SectionHeader
              eyebrow="Credentials"
              title="Audited. Certified. Continuously surveilled."
              kicker="Every certificate is current and verifiable. Our QHSE management system is externally audited annually by TÜV SÜD and surveyed quarterly by anchor clients."
            />
            <Link href="/credentials" className="shrink-0 inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-primary hover:text-accent">
              Download all certificates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
            {credentials.map((c) => (
              <div key={c.code} className="bg-background p-6">
                <Award className="h-5 w-5 text-accent" />
                <div className="mt-4 font-serif text-[15px] text-primary leading-tight">{c.code}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.title}</div>
                <div className="mt-4 text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{c.issuer} · {c.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SAFETY ============ */}
      <section className="relative overflow-hidden">
        <div className="container-x py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={SAFETY_IMG} alt="On-site safety culture" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-10">
              <img src={SAFETY_IMG_2} alt="Workers with safety gear" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Safety · HSE"
              title="Zero-harm isn't a slogan. It is a measurable operating standard."
              kicker="We track LTIFR, near-miss closure, behavioural observations and contractor training compliance every fortnight at the board level. Our flagship NH-44 package recorded 4.8 million consecutive man-hours without a lost-time injury."
            />
            <div className="mt-10 grid grid-cols-3 gap-px bg-border">
              {[
                { v: "0.12", l: "LTIFR · FY24" },
                { v: "98%", l: "Near-miss closure" },
                { v: "22k", l: "Safety hours / yr" },
              ].map((s) => (
                <div key={s.l} className="bg-background p-6">
                  <div className="font-serif text-3xl text-accent">{s.v}</div>
                  <div className="mt-2 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ LEADERSHIP ============ */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <SectionHeader eyebrow="Leadership" title="Operators, not promoters." kicker="Our leadership has spent careers on jobsites and in EPC delivery rooms — not in boardroom abstractions." />
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {leadership.map((l) => (
                <div key={l.name} className="bg-background p-8">
                  <div className="h-14 w-14 rounded-full bg-secondary grid place-items-center text-primary font-serif text-lg">
                    {l.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div className="mt-5 font-serif text-xl text-primary">{l.name}</div>
                  <div className="mt-1 text-[11px] tracking-[0.2em] uppercase text-accent">{l.title}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{l.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section className="container-x py-24 md:py-32">
        <div className="relative bg-primary text-primary-foreground p-10 md:p-20 overflow-hidden">
          <div className="absolute inset-0 grain opacity-40" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="eyebrow text-accent"><span className="accent-rule bg-accent"></span>Tender or RFQ in progress?</div>
              <h2 className="mt-6 font-serif text-[36px] md:text-[52px] leading-[1.02] tracking-tight text-balance">
                Send us your scope. We'll respond within 24 hours with a structured capability fit.
              </h2>
              <p className="mt-6 text-primary-foreground/70 max-w-2xl text-pretty">
                Share package details, IFC drawings, BOQ, or RFP. Our pre-construction team will assess fit, flag risks, and respond with relevant referenceable projects.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link href="/contact" className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-primary-foreground hover:text-primary">
                Start an inquiry <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
