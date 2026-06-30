"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems, company } from "@/data/site";
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
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-background/40 backdrop-blur-sm"
      )}
    >
      <div className="container-x flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 rounded-sm bg-primary text-primary-foreground grid place-items-center font-serif text-lg font-semibold">
            O
            <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-accent rounded-sm"></span>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-[17px] font-semibold tracking-tight text-primary">ORTECH</div>
            <div className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground">Infra Pvt Ltd</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[13px] tracking-wide text-foreground/75 hover:text-primary link-underline transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 text-[12px] tracking-[0.18em] uppercase hover:bg-primary/90 transition-colors"
          >
            Request Proposal
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-6 flex flex-col gap-1">
            {navItems.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-border/60 text-sm flex items-center justify-between"
              >
                {n.label}
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-primary text-primary-foreground px-4 py-3 text-[12px] tracking-[0.18em] uppercase text-center"
            >
              Request Proposal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
