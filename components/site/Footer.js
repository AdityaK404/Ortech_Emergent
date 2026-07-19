import Link from "next/link";
import { company, LOGO_URL, WORDMARKS, getYearsInOperation } from "@/data/site";

const serviceLinks = [
  { label: "Telecom / OFC", href: "/services#telecom-infrastructure" },
  { label: "HDD (Trenchless)", href: "/services#horizontal-directional-drilling" },
  { label: "City Gas (CGD)", href: "/services#city-gas-distribution" },
  { label: "Civil & Electrical", href: "/services#civil-infrastructure" },
];

const corporateLinks = [
  { label: "About Us", href: "/about" },
  { label: "Credentials", href: "/about#credentials" },
  { label: "Machinery", href: "/about#machinery" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="container-x pt-16 pb-14 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt={company.name} className="h-11 w-11 object-contain" />
            <span className="leading-none flex flex-col items-start">
              <img
                src={WORDMARKS.ortech}
                alt="ORTECH"
                className="h-[18px] w-auto object-contain select-none"
                style={{ filter: "invert(1)", mixBlendMode: "screen" }}
                draggable="false"
              />
              <span className="mt-1 flex items-center gap-1.5">
                <img src={WORDMARKS.infra} alt="INFRA" className="h-[8px] w-auto object-contain opacity-90" style={{ filter: "invert(1)", mixBlendMode: "screen" }} draggable="false" />
                <img src={WORDMARKS.pvt} alt="PVT" className="h-[8px] w-auto object-contain opacity-90" style={{ filter: "invert(1)", mixBlendMode: "screen" }} draggable="false" />
                <img src={WORDMARKS.ltd} alt="LTD" className="h-[8px] w-auto object-contain opacity-90" style={{ filter: "invert(1)", mixBlendMode: "screen" }} draggable="false" />
              </span>
            </span>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/55 max-w-md">
            India&apos;s specialist Telecom, HDD, CGD, Civil and Electrical infrastructure
            contractor — delivering heavy underground infrastructure with engineering
            precision since {company.founded}.
          </p>
          <div className="mt-8 space-y-2 text-[13px] text-white/65">
            <div>{company.address}</div>
            <div><a href={`mailto:${company.email}`} className="hover:text-accent transition-colors">{company.email}</a></div>
            <div><a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">{company.phone}</a></div>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">Services</div>
          <ul className="mt-6 space-y-3">
            {serviceLinks.map((n) => (
              <li key={n.label}>
                <Link href={n.href} className="text-sm text-white/80 hover:text-accent transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">Company</div>
          <ul className="mt-6 space-y-3">
            {corporateLinks.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sm text-white/80 hover:text-accent transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-line">
        <div className="container-x py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-white/45">
          <div>© {new Date().getFullYear()} {company.name}. {getYearsInOperation()} years of infrastructure delivery.</div>
          <div>Belagavi, Karnataka · India</div>
        </div>
      </div>
    </footer>
  );
}
