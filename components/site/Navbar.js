"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { navItems, LOGO_URL, WORDMARKS, company } from "@/data/site";
import { cn } from "@/lib/utils";

function Wordmark({ dark = false }) {
  const invert = dark ? { filter: "invert(1)", mixBlendMode: "screen" } : { mixBlendMode: "multiply" };
  return (
    <Link href="/" className="flex items-center gap-3.5 group shrink-0">
      <img src={LOGO_URL} alt={company.name} className="h-12 w-12 object-contain" />
      <span className="leading-none flex flex-col items-start">
        <img
          src={WORDMARKS.ortech}
          alt="ORTECH"
          className="h-[22px] w-auto object-contain select-none"
          style={invert}
          draggable="false"
        />
        <span className="mt-1.5 flex items-center gap-2">
          <img src={WORDMARKS.infra} alt="INFRA" className="h-[9px] w-auto object-contain" style={invert} draggable="false" />
          <img src={WORDMARKS.pvt} alt="PVT" className="h-[9px] w-auto object-contain" style={invert} draggable="false" />
          <img src={WORDMARKS.ltd} alt="LTD" className="h-[9px] w-auto object-contain" style={invert} draggable="false" />
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 bg-white",
        scrolled ? "border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "border-b border-transparent"
      )}
    >
      <div className="container-x flex items-center justify-between h-[76px]">
        <Wordmark />

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "relative text-[12px] font-semibold uppercase tracking-[0.1em] px-3.5 py-2 transition-colors",
                  active ? "text-navy-900" : "text-steel hover:text-navy-900"
                )}
              >
                {n.label}
                {active && <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] bg-accent" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link href="/contact" className="btn-primary whitespace-nowrap">
            Request a project <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button className="lg:hidden p-2 text-navy-900" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white max-h-[calc(100dvh-76px)] overflow-y-auto">
          <div className="container-x py-4 flex flex-col">
            {navItems.map((n) => {
              const active = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={cn(
                    "py-4 border-b border-border text-[13px] uppercase tracking-[0.1em] font-semibold flex items-center justify-between",
                    active ? "text-accent" : "text-navy-900"
                  )}
                >
                  {n.label}
                  <ArrowRight className={cn("h-4 w-4", active ? "text-accent" : "text-steel")} />
                </Link>
              );
            })}
            <div className="mt-5 mb-2 grid grid-cols-1 gap-3">
              <Link href="/contact" className="btn-primary w-full">
                Request a project <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="btn-outline w-full">
                <Phone className="h-3.5 w-3.5" /> Call {company.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
