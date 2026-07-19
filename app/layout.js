import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { LOGO_URL, company } from "@/data/site";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter", display: "swap" });
const display = Archivo({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });

const TITLE = "ORTECH Infra Pvt Ltd — Telecom, HDD, CGD, Civil & Electrical Infrastructure";
const DESCRIPTION =
  "ORTECH Infra is an infrastructure engineering and execution company established in 2000, specialising in Telecom Infrastructure, Horizontal Directional Drilling (HDD), City Gas Distribution (CGD), Civil and Electrical Infrastructure across India.";

export const metadata = {
  metadataBase: new URL("https://www.ortechinfra.com"),
  title: { default: TITLE, template: "%s — ORTECH Infra Pvt Ltd" },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.ortechinfra.com",
    title: TITLE,
    description: DESCRIPTION,
    siteName: company.name,
    images: [{ url: LOGO_URL, width: 512, height: 512, alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [LOGO_URL],
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: "https://www.ortechinfra.com",
    logo: `https://www.ortechinfra.com${LOGO_URL}`,
    email: company.email,
    telephone: company.phone,
    foundingDate: String(company.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "Belagavi",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: [company.social.linkedin, company.social.youtube].filter((value) => value && value !== "#"),
  };

  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
