"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navItems, LOGO_URL, WORDMARKS } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300 bg-ink",
      scrolled ? "shadow-lg shadow-black/20" : ""
    )}>
      <div className="container-x flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3 group">
          <img src={LOGO_URL} alt="ORTECH" className="h-10 w-10 object-contain" />
          <div className="leading-tight flex flex-col items-start">
            <img
              src={WORDMARKS.ortech}
              alt="ORTECH"
              className="h-[16px] w-auto object-contain select-none"
              style={{ filter: "invert(1)", mixBlendMode: "screen" }}
              draggable="false"
            />
            <div className="mt-1 flex items-center gap-1.5">
              <img src={WORDMARKS.infra} alt="INFRA" className="h-[7px] w-auto object-contain opacity-90" style={{ filter: "invert(1)", mixBlendMode: "screen" }} draggable="false" />
              <img src={WORDMARKS.pvt} alt="PVT" className="h-[7px] w-auto object-contain opacity-90" style={{ filter: "invert(1)", mixBlendMode: "screen" }} draggable="false" />
              <img src={WORDMARKS.ltd} alt="LTD" className="h-[7px] w-auto object-contain opacity-90" style={{ filter: "invert(1)", mixBlendMode: "screen" }} draggable="false" />
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((n) => (
            <Link key={n.href} href={n.href} className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/70 hover:text-white px-3 py-2 transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="btn-primary">
            Request a Project
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button className="lg:hidden p-2 -mr-2 text-white" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-3 bg-ink">
          <div className="container-x py-4 flex flex-col">
            {navItems.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 border-b border-ink-3 text-[13px] uppercase tracking-[0.12em] text-white/80 font-semibold flex items-center justify-between">
                {n.label}<ArrowRight className="h-4 w-4 text-accent" />
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-4 btn-primary">
              Request a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
