import Link from "next/link";
import { company, LOGO_URL, WORDMARKS } from "@/data/site";

const serviceRegions = [
  { label: "Belagavi", href: "/clients" },
  { label: "Karnataka", href: "/projects" },
  { label: "Maharashtra", href: "/projects" },
  { label: "Uttara Kannada", href: "/projects" },
];
const corporateLinks = [
  { label: "About Us", href: "/about" },
  { label: "Credentials", href: "/credentials" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/85">
      <div className="container-x py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="ORTECH" className="h-11 w-11 object-contain" />
            <div className="flex flex-col items-start">
              <img
                src={WORDMARKS.ortech}
                alt="ORTECH"
                className="h-[18px] w-auto object-contain select-none"
                style={{ filter: "invert(1)", mixBlendMode: "screen" }}
                draggable="false"
              />
              <div className="mt-1 flex items-center gap-1.5">
                <img src={WORDMARKS.infra} alt="INFRA" className="h-[8px] w-auto object-contain opacity-90" style={{ filter: "invert(1)", mixBlendMode: "screen" }} draggable="false" />
                <img src={WORDMARKS.pvt} alt="PVT" className="h-[8px] w-auto object-contain opacity-90" style={{ filter: "invert(1)", mixBlendMode: "screen" }} draggable="false" />
                <img src={WORDMARKS.ltd} alt="LTD" className="h-[8px] w-auto object-contain opacity-90" style={{ filter: "invert(1)", mixBlendMode: "screen" }} draggable="false" />
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-md">
            India's specialist Telecom, HDD, CGD, Civil and Electrical infrastructure contractor.
            Delivering heavy underground infrastructure with engineering precision since 2000.
          </p>
          <div className="mt-8 space-y-2 text-[13px] text-white/70">
            <div>{company.address}</div>
            <div>{company.email}</div>
            <div>{company.phone}</div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">Service Regions</div>
          <ul className="mt-6 space-y-3">
            {serviceRegions.map((n) => (
              <li key={n.label}>
                <Link href={n.href} className="text-sm text-white/85 hover:text-accent transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">Corporate</div>
          <ul className="mt-6 space-y-3">
            {corporateLinks.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sm text-white/85 hover:text-accent transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">Services</div>
          <ul className="mt-6 space-y-3 text-sm text-white/85">
            <li><Link href="/services" className="hover:text-accent">Telecom / OFC</Link></li>
            <li><Link href="/services" className="hover:text-accent">HDD</Link></li>
            <li><Link href="/services" className="hover:text-accent">City Gas (CGD)</Link></li>
            <li><Link href="/services" className="hover:text-accent">Civil / Electrical</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-3">
        <div className="container-x py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-white/50">
          <div>© {new Date().getFullYear()} {company.name}. Proudly built in Belagavi.</div>
          <div className="flex items-center gap-6">
            <span>Terms of Service</span>
            <span>Privacy</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
