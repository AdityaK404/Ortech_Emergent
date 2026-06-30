"use client";
import Link from "next/link";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingProfileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Link
        href="/contact"
        className="group flex items-center gap-3 bg-primary text-primary-foreground pl-4 pr-5 py-3.5 shadow-xl shadow-primary/20 hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        <span className="h-8 w-8 rounded-sm bg-accent text-accent-foreground grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Download className="h-4 w-4" />
        </span>
        <span className="leading-tight">
          <span className="block text-[10px] tracking-[0.22em] uppercase opacity-80">Capability</span>
          <span className="block text-[13px] font-medium">Download Company Profile</span>
        </span>
      </Link>
    </div>
  );
}
