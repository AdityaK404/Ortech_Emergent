"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { navItems, moreNavItems, LOGO_URL, WORDMARKS } from "@/data/site";
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
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 bg-background",
        scrolled ? "border-b border-neutral-200 shadow-sm" : "border-b border-transparent"
      )}
    >
      <div className="flex items-center justify-between h-[92px] w-full">
        <Link href="/" className="flex items-center gap-4 group pl-4 md:pl-6 shrink-0">
          <img src={LOGO_URL} alt="ORTECH" className="h-16 w-16 object-contain" />
          <div className="leading-tight flex flex-col items-start">
            <img
              src={WORDMARKS.ortech}
              alt="ORTECH"
              className="h-[26px] w-auto object-contain select-none"
              style={{ mixBlendMode: "multiply" }}
              draggable="false"
            />
            <div className="mt-1.5 flex items-center gap-2">
              <img src={WORDMARKS.infra} alt="INFRA" className="h-[10px] w-auto object-contain" style={{ mixBlendMode: "multiply" }} draggable="false" />
              <img src={WORDMARKS.pvt} alt="PVT" className="h-[10px] w-auto object-contain" style={{ mixBlendMode: "multiply" }} draggable="false" />
              <img src={WORDMARKS.ltd} alt="LTD" className="h-[10px] w-auto object-contain" style={{ mixBlendMode: "multiply" }} draggable="false" />
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
          {navItems.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[12px] font-semibold uppercase tracking-[0.12em] text-neutral-700 hover:text-neutral-900 px-3 py-2 transition-colors"
            >
              {n.label}
            </Link>
          ))}

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-neutral-700 hover:text-neutral-900 px-3 py-2 transition-colors"
            >
              More
              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-48 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden border border-neutral-200 bg-white shadow-lg">
                {moreNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-3 pr-4 md:pr-6 shrink-0">
          <Link href="/contact" className="btn-primary whitespace-nowrap">
            Request a Project
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button className="lg:hidden p-2 pr-4 md:pr-6 text-neutral-900" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-neutral-200 bg-background">
          <div className="container-x py-4 flex flex-col">
            {navItems.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-neutral-200 text-[13px] uppercase tracking-[0.12em] text-neutral-800 font-semibold flex items-center justify-between"
              >
                {n.label}
                <ArrowRight className="h-4 w-4 text-accent" />
              </Link>
            ))}
            <div className="py-3 border-b border-neutral-200">
              <div className="text-[13px] uppercase tracking-[0.12em] text-neutral-500 font-semibold">More</div>
              <div className="mt-3 flex flex-col gap-2">
                {moreNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-md border border-neutral-200 px-4 py-3 text-[13px] uppercase tracking-[0.12em] text-neutral-800 font-semibold"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 text-accent" />
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-4 btn-primary">
              Request a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
