import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, Award, Truck, HardHat, CheckCircle2, Quote } from "lucide-react";
import SectionHeader from "@/components/site/SectionHeader";
import { heroStats, trustedClients, services, projects, machinery, milestones, credentials, leadership } from "@/data/site";

const HERO_IMG = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e";
const ABOUT_IMG = "https://images.unsplash.com/photo-1608303588026-884930af2559";
const SAFETY_IMG = "https://images.unsplash.com/photo-1579847188804-ecba0e2ea330";
const SAFETY_IMG_2 = "https://images.unsplash.com/photo-1772600110243-f4e1349259b6";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="ORTECH infrastructure at dusk" className="h-full w-full object-cover opacity-55 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/82 to-primary/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
        </div>
        <div className="relative container-x pt-28 pb-32 md:pt-40 md:pb-48 text-primary-foreground">
          <div className="fade-up max-w-3xl">
            <div className="eyebrow text-accent"><span className="accent-rule bg-accent"></span>Est. 2000 · Belagavi, Karnataka</div>
            <h1 className="mt-6 font-serif text-[44px] md:text-[72px] leading-[0.98] tracking-tight text-balance">
              Engineered infrastructure. <span className="italic text-accent">Executed</span> with precision.
            </h1>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-primary-foreground/80 max-w-2xl text-pretty">
              ORTECH Infra delivers turnkey Telecom, HDD, City Gas Distribution, Civil and
              Electrical infrastructure for India's leading telecom operators, EPC majors and
              government bodies — backed by 23+ years of execution, an owned 5-rig HDD fleet, and
              a 200-strong field workforce.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/projects" className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 text-[12px] tracking-[0.2em] uppercase hover:bg-accent/90">
                Explore Projects <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3.5 text-[12px] tracking-[0.2em] uppercase hover:bg-primary-foreground/10">
                Request Company Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="relative border-t border-primary-foreground/15">
          <div className="container-x grid grid-cols-2 md:grid-cols-4">
            {heroStats.map((s, i) => (
              <div key={s.label} className={`py-8 md:py-10 ${i !== 0 ? "md:border-l border-primary-foreground/15" : ""} ${i % 2 !== 0 ? "border-l border-primary-foreground/15 md:border-l" : ""}`}>
                <div className="font-serif text-3xl md:text-4xl text-primary-foreground">{s.value}</div>
                <div className="mt-2 text-[11px] tracking-[0.18em] uppercase text-primary-foreground/60 max-w-[220px] leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container-x py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              <span className="accent-rule"></span>Delivering for India's leading operators & EPCs
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-8 items-center">
              {trustedClients.map((c) => (
                <div key={c} className="text-[12px] md:text-[13px] font-medium tracking-wide text-primary/75 hover:text-primary text-center">{c}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / TIMELINE */}
      <section className="container-x py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={ABOUT_IMG} alt="Engineers planning at ORTECH" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-10 bg-card border border-border px-6 py-5 max-w-[260px] shadow-sm">
            <div className="eyebrow text-accent"><span className="accent-rule bg-accent"></span>Since 2000</div>
            <div className="mt-2 font-serif text-2xl text-primary leading-tight">Two decades of disciplined execution.</div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="About ORTECH"
            title="An infrastructure engineering and execution company — built around plant, people and precision."
            kicker="Founded in 2000 in Belagavi, Karnataka, ORTECH Infra combines experienced engineering teams with in-house machinery and execution capabilities to deliver turnkey telecom, HDD, gas, civil and electrical infrastructure — safely, efficiently and on schedule."
          />
          <div className="mt-12 space-y-6">
            {milestones.map((m) => (
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

      {/* SERVICES */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <SectionHeader
              eyebrow="What we deliver"
              title="Six discipline lines. One integrated execution team."
              kicker="Owned plant, experienced field crews and in-house engineering — enabling direct accountability for safety, schedule and quality on every package we sign."
            />
            <Link href="/services" className="shrink-0 inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-primary hover:text-accent">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s, i) => (
              <Link key={s.slug} href="/services" className="group relative bg-background p-8 md:p-10 hover:bg-card transition-colors">
                <div className="flex items-start justify-between">
                  <div className="font-serif text-5xl text-accent/30 group-hover:text-accent transition-colors">{String(i + 1).padStart(2, "0")}</div>
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

      {/* WHY ORTECH */}
      <section className="container-x py-24 md:py-32">
        <SectionHeader eyebrow="Why ORTECH" title="Four operating principles that compound into delivery certainty." align="center" />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {[
            { icon: Truck, title: "Owned HDD & cable plant", body: "5 owned HDD rigs plus blowing, splicing and survey equipment — schedule risk does not depend on rented kit." },
            { icon: HardHat, title: "In-house execution", body: "23+ years of field execution. 200+ skilled workforce on rolls — not subcontracted on each project." },
            { icon: ShieldCheck, title: "Multi-discipline depth", body: "Single accountable team for telecom, HDD, gas, civil and electrical scope on integrated packages." },
            { icon: Award, title: "Repeat-client mandate", body: "Long-running relationships with Airtel, BSNL, L&T, MEIL, Reliance, Tata Tele — most projects are repeat appointments." },
          ].map((p) => (
            <div key={p.title} className="bg-background p-8 md:p-10">
              <div className="h-12 w-12 grid place-items-center bg-secondary text-primary"><p.icon className="h-5 w-5" /></div>
              <h3 className="mt-6 font-serif text-xl text-primary leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="eyebrow text-accent"><span className="accent-rule bg-accent"></span>Selected projects</div>
              <h2 className="mt-4 font-serif text-[34px] md:text-[44px] leading-[1.05] tracking-tight text-balance">
                Airtel. BSNL. L&T. MEIL. <span className="italic text-accent">Delivered, referenceable.</span>
              </h2>
            </div>
            <Link href="/projects" className="shrink-0 inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-accent hover:text-primary-foreground">
              View all 100+ projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.slice(0, 4).map((p) => (
              <Link href="/projects" key={p.slug} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-background/95 text-primary px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase">{p.category}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="text-[11px] tracking-[0.22em] uppercase text-accent">{p.client} · {p.state}</div>
                    <h3 className="mt-2 font-serif text-2xl md:text-[28px] leading-tight text-primary-foreground">{p.title}</h3>
                    <div className="mt-4 flex items-center gap-4 text-[12px] text-primary-foreground/80">
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

      {/* FLEET */}
      <section className="container-x py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Owned plant"
              title="5 HDD rigs + a complete OFC, cable and survey toolkit — on our books."
              kicker="Plant ownership removes our single biggest schedule risk. We mobilise on our own timeline, maintain in-house, and never rely on a rental market on critical-path activities."
            />
            <Link href="/machinery" className="mt-8 inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-primary hover:text-accent">
              Full machinery schedule <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-px bg-border">
            {machinery.slice(0, 4).map((m) => (
              <div key={m.name} className="bg-background p-6">
                <div className="aspect-[4/3] overflow-hidden mb-5"><img src={m.image} alt={m.name} className="h-full w-full object-cover" /></div>
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

      {/* CREDENTIALS */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <SectionHeader
              eyebrow="Credentials"
              title="Registered. Certified. Empanelled."
              kicker="Class I Electrical & Civil Contractor. Government-registered. Empanelled with multiple EPC majors including L&T and MEIL. Multiple work-completion and experience certificates on file."
            />
            <Link href="/credentials" className="shrink-0 inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-primary hover:text-accent">
              View all certificates <ArrowRight className="h-4 w-4" />
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

      {/* SAFETY / FIELD */}
      <section className="relative overflow-hidden">
        <div className="container-x py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden"><img src={SAFETY_IMG} alt="ORTECH field crew" className="h-full w-full object-cover" /></div>
            <div className="aspect-[3/4] overflow-hidden mt-10"><img src={SAFETY_IMG_2} alt="OFC trenching crew" className="h-full w-full object-cover" /></div>
          </div>
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Safety · HSE"
              title="Safe execution is the precondition for everything else we do."
              kicker="Every site runs under documented method statements, PPE compliance and daily toolbox talks. Our crews are trained for live-utility working, road and rail crossings, and confined-space activities."
            />
            <div className="mt-10 grid grid-cols-3 gap-px bg-border">
              {[
                { v: "200+", l: "Trained crew" },
                { v: "Daily", l: "Toolbox talks" },
                { v: "100%", l: "PPE compliance" },
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

      {/* LEADERSHIP */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow="Leadership" title="Led by a career operator." kicker="More than two decades on the field — not in boardroom abstractions." />
            </div>
            <div className="lg:col-span-7">
              {leadership.map((l) => (
                <div key={l.name} className="bg-background p-10 border border-border">
                  <div className="h-16 w-16 rounded-full bg-accent text-accent-foreground grid place-items-center font-serif text-2xl">
                    {l.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div className="mt-6 font-serif text-3xl text-primary">{l.name}</div>
                  <div className="mt-1 text-[11px] tracking-[0.2em] uppercase text-accent">{l.title}</div>
                  <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed max-w-xl">{l.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="container-x py-24 md:py-32">
        <div className="relative bg-primary text-primary-foreground p-10 md:p-20 overflow-hidden">
          <div className="absolute inset-0 grain opacity-40" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="eyebrow text-accent"><span className="accent-rule bg-accent"></span>Tender, RFQ or rollout package?</div>
              <h2 className="mt-6 font-serif text-[36px] md:text-[52px] leading-[1.02] tracking-tight text-balance">
                Share your scope. We respond within 24 hours with a structured capability fit.
              </h2>
              <p className="mt-6 text-primary-foreground/70 max-w-2xl">
                Operators, EPC majors and government bodies engage ORTECH for OFC, HDD, CGD, civil and electrical packages every quarter. Tell us about yours.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link href="/contact" className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-primary-foreground hover:text-primary">
                Start an inquiry <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
