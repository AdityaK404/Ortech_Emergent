// ORTECH Infra Pvt Ltd — central content layer (CMS-ready).
// The client list and sector groupings are GENUINE. Items marked `// TODO`
// are unverified figures the owner should confirm/replace.

export const LOGO_URL = "/brand/logo.png";

// Brand logotype images (served locally from /public/brand).
export const WORDMARKS = {
  ortech: "/brand/wordmark-ortech.png",
  infra: "/brand/wordmark-infra.png",
  pvt: "/brand/wordmark-pvt.png",
  ltd: "/brand/wordmark-ltd.png",
};

export const company = {
  name: "ORTECH Infra Pvt Ltd",
  shortName: "ORTECH",
  tagline: "Engineered Infrastructure. Executed with Precision.",
  founded: 2000,
  hq: "Belagavi, Karnataka, India",
  email: "info@ortechinfra.com",
  phone: "+91 94482 89055",
  website: "www.ortechinfra.com",
  address: "Belagavi (Belgaum), Karnataka, India",
  social: { linkedin: "#", youtube: "#" }, // TODO: real social URLs
};

// Years in operation, computed so copy never goes stale.
export function getYearsInOperation() {
  return new Date().getFullYear() - company.founded;
}

// Centralised imagery. Swap these for real site photography later —
// every value here is a placeholder marked for replacement.
export const images = {
  homeHero: "/home-banner.jpg",
  aboutHero: "https://images.unsplash.com/photo-1608303588026-884930af2559", // TODO: real photo
  servicesHero: "https://images.pexels.com/photos/3818947/pexels-photo-3818947.jpeg", // TODO
  projectsHero: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e", // TODO
  clientsHero: "https://images.unsplash.com/photo-1533664488202-6af66d26c44a", // TODO
  contactHero: "https://images.unsplash.com/photo-1759579478942-a6992a87fb8f", // TODO
  quote: "https://images.unsplash.com/photo-1759579478942-a6992a87fb8f", // TODO
};

// Headline metrics. TODO: owner to confirm exact figures.
// NOTE: hero previously said "3000+ Kms OFC" while About said "1000+ km" —
// reconcile to one true number before publishing.
export const heroStats = [
  { value: "3000+", unit: "Kms", label: "Optical fibre laid" }, // TODO verify (3000 vs 1000)
  { value: "200+", unit: "", label: "BTS / RTTS tower stations constructed" }, // TODO verify
  { value: "7", unit: "States", label: "Private & government clients across India" }, // TODO verify
  { value: "20+", unit: "", label: "Civil projects delivered" }, // TODO verify
];

export const services = [
  {
    slug: "telecom-infrastructure",
    title: "Telecom Infrastructure",
    summary: "Turnkey optical fibre rollout — from route survey to OTDR-tested live link — for telecom operators and tower companies.",
    bullets: [
      "OFC trenching, HDD & duct laying",
      "Cable blowing, pulling & splicing",
      "OTDR testing & route survey",
      "ROW management & telecom tower works",
    ],
    image: "https://images.unsplash.com/photo-1533664488202-6af66d26c44a", // TODO: real photo
  },
  {
    slug: "horizontal-directional-drilling",
    title: "Horizontal Directional Drilling (HDD)",
    summary: "Trenchless utility crossings under city roads, highways, railways and rivers — with our owned HDD fleet.",
    bullets: [
      "Road, highway & railway crossings",
      "River crossings — long-bore capability",
      "HDPE, OFC duct & gas pipeline installation",
      "Owned HDD fleet — maintained in-house",
    ],
    image: "/HDD.jpg",
  },
  {
    slug: "city-gas-distribution",
    title: "City Gas Distribution (CGD)",
    summary: "End-to-end CGD pipeline execution — MDPE & steel — with HDD for arterial crossings and full testing & commissioning.",
    bullets: [
      "MDPE & steel pipeline installation",
      "HDD for gas network crossings",
      "Utility corridor development",
      "Hydro-testing & commissioning",
    ],
    image: "https://images.unsplash.com/photo-1559510981-10719ce4266a", // TODO: real photo
  },
  {
    slug: "civil-infrastructure",
    title: "Civil Infrastructure",
    summary: "Roads, buildings, industrial foundations, canal works and fuel station civils — delivered by an in-house civil team.",
    bullets: [
      "Roads & utility corridors",
      "Industrial foundations & buildings",
      "Canal works & check dams",
      "Fuel station civils & land development",
    ],
    image: "https://images.unsplash.com/photo-1509390144018-eeaf65052242", // TODO: real photo
  },
  {
    slug: "electrical-infrastructure",
    title: "Electrical Infrastructure",
    summary: "HT/LT power infrastructure including underground cabling, substations, earthing and yard electrification for industrial & telecom sites.",
    bullets: [
      "HT/LT line erection & underground cabling",
      "Substation works & DG installation",
      "Earthing systems & yard lighting",
      "Tower electrification",
    ],
    image: "https://images.unsplash.com/photo-1509390673020-a5b2450e33f1", // TODO: real photo
  },
  {
    slug: "utility-infrastructure",
    title: "Utility Infrastructure",
    summary: "Water, sewer and underground utility networks for municipal corporations, industrial estates and integrated townships.",
    bullets: [
      "Water supply pipelines",
      "Sewer networks & manholes",
      "Underground utility coordination",
      "Industrial utility networks",
    ],
    image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88", // TODO: real photo
  },
];

// The 4-step delivery narrative shown on the home page.
export const process = [
  { n: "01", title: "Survey & Planning", body: "Route survey, GPS mapping, ROW planning and utility locating — before a single trench is opened." },
  { n: "02", title: "HDD or Open-Cut", body: "Owned HDD fleet for trenchless crossings; open-cut trenching for greenfield corridors." },
  { n: "03", title: "Cable / Pipe Install", body: "OFC blowing, MDPE/steel pipe laying and HT/LT cable pulling — executed by our own field crews." },
  { n: "04", title: "Test & Handover", body: "OTDR, hydro-testing and commissioning. Audit-clean handover with as-built documentation." },
];
export const projects = [
  {
    slug: "airtel-nld-ofc",
    title: "Airtel NLD / Intracity OFC Rollout",
    client: "Bharti Airtel",
    category: "Telecom",
    state: "Karnataka",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1772600110243-f4e1349259b6", // TODO: real photo
    summary: "Turnkey optical fibre cable rollout including HDD, trenching, duct laying, cable blowing, splicing and termination across Karnataka.",
    proof: ["NLD + Intracity scope", "HDD + open-cut hybrid", "OTDR-tested links"],
  },
  {
    slug: "bsnl-4g-saturation",
    title: "BSNL 4G Saturation — Uttara Kannada",
    client: "BSNL",
    category: "Telecom",
    state: "Uttara Kannada",
    status: "Delivered",
    image: "https://images.unsplash.com/photo-1533664488202-6af66d26c44a", // TODO: real photo
    summary: "24F optical fibre cable connectivity executed via a hybrid of open-trenching and HDD across the Uttara Kannada region.",
    proof: ["24F OFC connectivity", "Open-trench + HDD hybrid", "Government 4G programme"],
  },
  {
    slug: "belagavi-cgd",
    title: "Belagavi City Gas Distribution",
    client: "MEIL",
    category: "CGD",
    state: "Belagavi, Karnataka",
    status: "Executed",
    image: "https://images.unsplash.com/photo-1559510981-10719ce4266a", // TODO: real photo
    summary: "Horizontal Directional Drilling for the city gas distribution network across Belagavi — enabling trenchless installation under city arterial roads.",
    proof: ["HDD for gas network", "City arterial crossings", "MEIL appointed contractor"],
  },
  {
    slug: "btda-ofc",
    title: "BTDA Optical Fibre Project",
    client: "BTDA",
    category: "Telecom",
    state: "Karnataka",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e", // TODO: real photo
    summary: "Supply and installation of optical fibre cable for the BTDA network rollout in Karnataka — including survey, trenching and splicing.",
    proof: ["Supply + installation", "End-to-end OFC scope", "Government client"],
  },
  {
    slug: "lt-bsnl-maharashtra",
    title: "L&T BSNL Maharashtra Packages",
    client: "Larsen & Toubro",
    category: "Telecom",
    state: "Maharashtra",
    status: "Executed",
    image: "https://images.unsplash.com/photo-1759579478942-a6992a87fb8f", // TODO: real photo
    summary: "Underground OFC infrastructure works delivered as preferred subcontractor to Larsen & Toubro under the BSNL Maharashtra programme.",
    proof: ["L&T EPC subcontractor", "Underground OFC scope", "Multi-package delivery"],
  },
  {
    slug: "electrical-utility-works",
    title: "Industrial Electrical & Utility Works",
    client: "Industrial estates",
    category: "Electrical",
    state: "Karnataka",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1509390144018-eeaf65052242", // TODO: real photo
    summary: "HT/LT power infrastructure, underground cabling and substation works for industrial estates and EPC clients across Karnataka.",
    proof: ["HT/LT cabling", "Substation works", "Class I Electrical Contractor"],
  },
];

// Categories are derived from the project set so no filter ever shows an empty list.
export const projectCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export const machinery = [
  { name: "HDD Rigs", count: "5", spec: "Trenchless drilling — road, rail & river crossings", image: "https://images.unsplash.com/photo-1759579478942-a6992a87fb8f" }, // TODO verify count / photo
  { name: "Excavators & Trenchers", count: "Fleet", spec: "OFC trenching & utility excavation", image: "https://images.unsplash.com/photo-1583024011792-b165975b52f5" },
  { name: "Cable Blowing Machines", count: "Multiple", spec: "OFC blowing through HDPE ducts", image: "https://images.unsplash.com/photo-1772600110243-f4e1349259b6" },
  { name: "Splicing & OTDR Kits", count: "Multiple", spec: "Fusion splicing & link-quality testing", image: "https://images.unsplash.com/photo-1533664488202-6af66d26c44a" },
  { name: "DG Sets & Welding Plants", count: "On-site", spec: "Site power & steel pipeline welding", image: "https://images.unsplash.com/photo-1509390673020-a5b2450e33f1" },
  { name: "Survey & Locating Equipment", count: "Multiple", spec: "Route survey, GPR & utility locating", image: "https://images.unsplash.com/photo-1608303588026-884930af2559" },
];

export const credentials = [
  { code: "Govt. Registered", title: "Government Registered Contractor", issuer: "State authorities", year: "Current" },
  { code: "Class I — Electrical", title: "Class I Electrical Contractor", issuer: "Karnataka Electrical Inspectorate", year: "Valid" },
  { code: "Class I — Civil", title: "Class I Civil Contractor", issuer: "State PWD", year: "Valid" },
  { code: "Labour License", title: "Labour License (Multi-state)", issuer: "Ministry of Labour", year: "Valid" },
  { code: "GST & PAN", title: "GST Registered · PAN issued", issuer: "Govt. of India", year: "Current" },
  { code: "EPC Vendor", title: "EPC Vendor Approvals", issuer: "L&T, MEIL, others", year: "Multiple" },
];

export const milestones = [
  { year: "2000", title: "Incorporation", body: "Founded in Belagavi, Karnataka, to deliver specialised telecom and utility infrastructure for emerging Indian operators." },
  { year: "2008", title: "HDD specialisation", body: "Commissioned dedicated Horizontal Directional Drilling fleet for utility crossings and trenchless installation." }, // TODO verify year
  { year: "2015", title: "Airtel NLD rollout", body: "Executed turnkey OFC backbone packages for Bharti Airtel across Karnataka — HDD, trenching, blowing, splicing." }, // TODO verify year
  { year: "2018", title: "CGD entry", body: "Entered City Gas Distribution — MDPE and steel pipeline installation for gas network operators." }, // TODO verify year
  { year: "2021", title: "L&T EPC empanelment", body: "Empanelled as preferred underground OFC subcontractor for Larsen & Toubro telecom packages." }, // TODO verify year
  { year: "2023", title: "BSNL 4G saturation", body: "Delivered 24F OFC connectivity across Uttara Kannada for the BSNL 4G saturation programme." }, // TODO verify year
];

export const leadership = [
  {
    name: "Ramesh S. Kalloli",
    title: "Managing Director",
    bio: "With more than two decades of experience in infrastructure execution, Ramesh S. Kalloli has led ORTECH in delivering telecom, civil, HDD, electrical and utility infrastructure projects for leading private enterprises and government organisations across India.",
  },
];

// GENUINE client list — do not mark as placeholder.
export const clientSectors = [
  { name: "Telecom operators", items: ["Bharti Airtel", "BSNL", "Reliance Infocom", "Tata Teleservices", "Vodafone", "Nokia"] },
  { name: "EPC majors", items: ["Larsen & Toubro", "MEIL", "ITI Limited"] },
  { name: "Government & utilities", items: ["BTDA", "CPWD", "Karnataka Neeravari Nigam Ltd", "Karnataka Electricity Board"] },
];

// Client logos live in /public/IMAGES. These are genuine logos; the loader in
// lib/clientLogos.js resolves the files. Names are matched by the owner over time.

// TODO: add real, attributable testimonials (with written permission) before enabling.
export const testimonials = [];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

