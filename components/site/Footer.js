import Link from "next/link";
import { company, navItems } from "@/data/site";
import { Mail, Phone, MapPin, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-x py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-sm bg-accent text-accent-foreground grid place-items-center font-serif font-semibold">O</div>
            <div>
              <div className="font-serif text-xl">ORTECH</div>
              <div className="text-[10px] tracking-[0.24em] uppercase opacity-70">Infra Pvt Ltd</div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-primary-foreground/70 max-w-md">
            A multi-discipline infrastructure contractor delivering highways, bridges,
            industrial sites and urban infrastructure across India — with an owned fleet,
            ISO-certified processes, and a zero-harm safety culture.
          </p>
          <div className="mt-8 space-y-3 text-sm text-primary-foreground/80">
            <div className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-accent" />{company.address}</div>
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" />{company.email}</div>
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" />{company.phone}</div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] tracking-[0.22em] uppercase text-accent">Navigate</div>
          <ul className="mt-6 space-y-3">
            {navItems.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[11px] tracking-[0.22em] uppercase text-accent">Company Profile</div>
          <p className="mt-6 text-sm text-primary-foreground/70">
            Download the latest ORTECH Infra company profile (PDF, 6.4 MB). Includes
            credentials, project sheet, and machinery schedule.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 border border-accent text-accent px-4 py-2.5 text-[12px] tracking-[0.18em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Download Profile <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <div className="mt-8 flex items-center gap-4">
            <a href={company.social.linkedin} aria-label="LinkedIn" className="opacity-70 hover:opacity-100 hover:text-accent"><Linkedin className="h-4 w-4" /></a>
            <a href={company.social.youtube} aria-label="YouTube" className="opacity-70 hover:opacity-100 hover:text-accent"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-x py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-primary-foreground/60">
          <div>© {new Date().getFullYear()} {company.name}. CIN: {company.cin}</div>
          <div className="flex items-center gap-6">
            <span>Privacy</span>
            <span>Code of Conduct</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
