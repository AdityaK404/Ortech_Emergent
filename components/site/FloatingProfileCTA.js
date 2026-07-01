"use client";
import Link from "next/link";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingProfileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
      <Link href="/contact" className="group flex items-center gap-3 bg-accent text-accent-foreground pl-4 pr-5 py-3 shadow-2xl hover:bg-accent/90 transition-colors">
        <Download className="h-4 w-4" />
        <span className="leading-tight">
          <span className="block text-[9px] tracking-[0.2em] uppercase opacity-90">Company</span>
          <span className="block text-[13px] font-semibold">Request Profile</span>
        </span>
      </Link>
    </div>
  );
}
