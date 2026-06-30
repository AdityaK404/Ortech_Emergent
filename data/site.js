// Structured content layer — CMS-ready data for ORTECH Infra Pvt Ltd
// Treat all copy/imagery here as placeholder until real assets are supplied.

export const company = {
  name: "ORTECH Infra Pvt Ltd",
  shortName: "ORTECH",
  tagline: "Engineering India's foundational infrastructure.",
  founded: 2008,
  hq: "Hyderabad, Telangana, India",
  cin: "U45200TG2008PTC000000",
  email: "contact@ortechinfra.in",
  phone: "+91 40 0000 0000",
  address: "3rd Floor, Cyber Towers, HITEC City, Hyderabad — 500081",
  social: {
    linkedin: "#",
    youtube: "#",
  },
};

export const heroStats = [
  { value: "₹2,400 Cr+", label: "Cumulative project value delivered" },
  { value: "180+", label: "Projects executed across 14 states" },
  { value: "650+", label: "Owned heavy-fleet assets" },
  { value: "17 yrs", label: "Of continuous operations" },
];

export const trustedClients = [
  "NHAI",
  "Indian Railways",
  "L&T Construction",
  "Tata Projects",
  "Adani Infra",
  "GMR Group",
  "NTPC",
  "Reliance Industries",
];

export const milestones = [
  { year: "2008", title: "Incorporation", body: "Founded in Hyderabad as a specialist earthwork contractor for state road authorities." },
  { year: "2012", title: "NHAI prequalification", body: "Achieved Class-I prequalification for highway packages up to ₹250 Cr." },
  { year: "2016", title: "Fleet expansion", body: "Crossed 250 owned plant assets and commissioned in-house equipment maintenance facility." },
  { year: "2019", title: "Industrial diversification", body: "Entered industrial site development for greenfield manufacturing and logistics parks." },
  { year: "2022", title: "ISO triad certified", body: "Awarded ISO 9001, 14001, and 45001 across all operational verticals." },
  { year: "2024", title: "Pan-India footprint", body: "Active projects in 14 states; cumulative value crosses ₹2,400 Cr." },
];

export const services = [
  {
    slug: "earthwork",
    title: "Earthwork & Mass Excavation",
    summary: "Bulk excavation, formation, and compacted fills for highway, rail, and industrial corridors.",
    bullets: [
      "Up to 18M m³ annual handling capacity",
      "Owned 80T excavator and tipper fleet",
      "GPS-guided survey and machine control",
    ],
  },
  {
    slug: "highways-roads",
    title: "Highways & Road Infrastructure",
    summary: "Greenfield and brownfield highway packages — pavement, structures, and ancillary works.",
    bullets: [
      "NHAI Class-I prequalified",
      "WMM/DBM/BC plants — owned and operated",
      "EPC and HAM execution experience",
    ],
  },
  {
    slug: "bridges-structures",
    title: "Bridges & Structures",
    summary: "RCC, PSC, and steel composite bridges; minor and major spans with precast yards.",
    bullets: [
      "In-house precast capability",
      "Span lengths up to 60m",
      "Heavy-lift cranes — 250T owned",
    ],
  },
  {
    slug: "industrial-sites",
    title: "Industrial Site Development",
    summary: "Greenfield grading, utilities, and pavements for manufacturing, logistics, and data centres.",
    bullets: [
      "Turnkey civil for plants up to 800 acres",
      "Heavy concrete pavements & PEB foundations",
      "Integrated wet & dry utilities",
    ],
  },
  {
    slug: "urban-infra",
    title: "Urban & Utility Infrastructure",
    summary: "Water, sewerage, stormwater, and city road corridors for municipal and smart-city programs.",
    bullets: [
      "Trenchless / open-cut utilities",
      "AMRUT & Smart Cities experience",
      "Reinstatement to municipal codes",
    ],
  },
  {
    slug: "mining-quarry",
    title: "Mining Support & Quarry Operations",
    summary: "Overburden removal, haul road construction, and quarry development for cement & minerals.",
    bullets: [
      "DGMS-compliant operations",
      "Owned drilling & blasting capability",
      "24x7 mine-side execution",
    ],
  },
];

export const projects = [
  {
    slug: "nh44-package-9",
    title: "NH-44 Six-laning, Package 9",
    client: "NHAI",
    category: "Highways",
    state: "Telangana",
    value: "₹412 Cr",
    duration: "30 months",
    status: "Completed 2023",
    image: "https://images.pexels.com/photos/16982346/pexels-photo-16982346.jpeg",
    summary: "Six-laning of 42.6 km of NH-44 with 14 major and minor structures, delivered four months ahead of schedule.",
    proof: ["Zero LTI across 4.8M man-hours", "Concrete pavement: 1.1M m²", "Earthwork: 6.8M m³"],
  },
  {
    slug: "krishna-rail-bridge",
    title: "Krishna River Rail-Cum-Road Bridge",
    client: "Indian Railways (SCR)",
    category: "Bridges",
    state: "Andhra Pradesh",
    value: "₹318 Cr",
    duration: "36 months",
    status: "Operational 2024",
    image: "https://images.unsplash.com/photo-1515674744565-0d7112cd179a",
    summary: "Composite rail-cum-road bridge with 11 PSC spans of 60m each, executed over live river channel.",
    proof: ["Deepest pile: 78m", "Heaviest segment lifted: 380T", "Monsoon-resilient cofferdam design"],
  },
  {
    slug: "adani-logistics-park",
    title: "Adani Mundra Logistics Park — Phase II",
    client: "Adani Logistics",
    category: "Industrial",
    state: "Gujarat",
    value: "₹276 Cr",
    duration: "22 months",
    status: "Completed 2024",
    image: "https://images.pexels.com/photos/10666081/pexels-photo-10666081.jpeg",
    summary: "Greenfield development of 640 acres including grading, RCC pavements, and integrated utilities.",
    proof: ["RCC pavement: 820,000 m²", "Stormwater network: 38 km", "Delivered 5 weeks ahead"],
  },
  {
    slug: "ntpc-haul-road",
    title: "NTPC Talcher — Mine Haul Road Corridor",
    client: "NTPC Mining Ltd",
    category: "Mining",
    state: "Odisha",
    value: "₹184 Cr",
    duration: "18 months",
    status: "In execution",
    image: "https://images.unsplash.com/photo-1529926691761-20fb82067c71",
    summary: "Dedicated 28 km coal haul corridor with heavy-duty pavement designed for 240T dumpers.",
    proof: ["Designed for 240T axle", "DGMS audit cleared 2024", "24x7 operations"],
  },
  {
    slug: "smart-city-warangal",
    title: "Warangal Smart City — Core Utility Package",
    client: "Warangal Smart City Ltd",
    category: "Urban",
    state: "Telangana",
    value: "₹146 Cr",
    duration: "24 months",
    status: "Completed 2023",
    image: "https://images.pexels.com/photos/3818947/pexels-photo-3818947.jpeg",
    summary: "Integrated water supply, sewerage, and stormwater across 11 core city wards with reinstatement.",
    proof: ["Network laid: 142 km", "Trenchless crossings: 38", "AMRUT compliant"],
  },
  {
    slug: "reliance-jamnagar",
    title: "Reliance Jamnagar — Process Area Civil",
    client: "Reliance Industries",
    category: "Industrial",
    state: "Gujarat",
    value: "₹492 Cr",
    duration: "28 months",
    status: "In execution",
    image: "https://images.pexels.com/photos/5125783/pexels-photo-5125783.jpeg",
    summary: "Heavy process-area civil works including foundations, pipe-racks, and underground utilities.",
    proof: ["Heavy foundations: 1,240 nos", "Concrete poured: 86,000 m³", "OISD-compliant safety"],
  },
];

export const projectCategories = ["All", "Highways", "Bridges", "Industrial", "Urban", "Mining"];

export const machinery = [
  { name: "Hydraulic Excavators", count: "180+", spec: "Komatsu PC210 – PC850 / CAT 374", image: "https://images.pexels.com/photos/5125783/pexels-photo-5125783.jpeg" },
  { name: "Tippers & Dumpers", count: "320+", spec: "Tata, BharatBenz, Volvo A45 ADTs", image: "https://images.pexels.com/photos/30751525/pexels-photo-30751525.jpeg" },
  { name: "Motor Graders & Dozers", count: "60+", spec: "CAT 14M / D6 / D8", image: "https://images.pexels.com/photos/3818947/pexels-photo-3818947.jpeg" },
  { name: "Heavy Lift Cranes", count: "24", spec: "Crawler & Hydraulic up to 250T", image: "https://images.unsplash.com/photo-1515674744565-0d7112cd179a" },
  { name: "Hot-Mix & WMM Plants", count: "12", spec: "160–240 TPH, owned & maintained", image: "https://images.pexels.com/photos/10666081/pexels-photo-10666081.jpeg" },
  { name: "Concrete Batching Plants", count: "18", spec: "60 – 120 m³/hr, mobile & stationary", image: "https://images.unsplash.com/photo-1529926691761-20fb82067c71" },
];

export const credentials = [
  { code: "ISO 9001:2015", title: "Quality Management", issuer: "TÜV SÜD", year: "2022" },
  { code: "ISO 14001:2015", title: "Environmental Management", issuer: "TÜV SÜD", year: "2022" },
  { code: "ISO 45001:2018", title: "Occupational Health & Safety", issuer: "TÜV SÜD", year: "2022" },
  { code: "NHAI Class-I", title: "Highway Prequalification", issuer: "NHAI", year: "2019" },
  { code: "CIDC Gradation", title: "CR-1 — Top contractor grade", issuer: "CIDC India", year: "2023" },
  { code: "OHSAS Compliance", title: "OISD-compliant for hydrocarbon sites", issuer: "Reliance / IOCL audited", year: "2024" },
];

export const leadership = [
  { name: "R. Venkateswara Rao", title: "Founder & Managing Director", bio: "38 years in heavy civil construction. Former GM (Projects), L&T Construction." },
  { name: "Anitha Sridhar", title: "Director — Operations", bio: "Led delivery of 14 highway packages aggregating ₹1,800 Cr. IIM-A alumna." },
  { name: "Dr. Karthik Menon", title: "Director — Engineering", bio: "PhD, IIT-Madras. Heads structural design, value engineering and precast." },
  { name: "Salim Qureshi", title: "Head — HSE & Quality", bio: "NEBOSH IGC and ISO Lead Auditor. Custodian of zero-harm culture." },
];

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Machinery", href: "/machinery" },
  { label: "Clients", href: "/clients" },
  { label: "Credentials", href: "/credentials" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
