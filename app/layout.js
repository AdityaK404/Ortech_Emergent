import { Inter, Space_Grotesk, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingProfileCTA from "@/components/site/FloatingProfileCTA";
import { Toaster } from "@/components/ui/sonner";
import { LOGO_URL, company } from "@/data/site";

const inter = Inter({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], weight: ["500","600","700"], variable: "--font-display", display: "swap" });
const hero = Merriweather({ subsets: ["latin"], weight: ["400","700","900"], style: ["normal","italic"], variable: "--font-hero", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://www.ortechinfra.com"),
  title: "ORTECH Infra Pvt Ltd — Telecom, HDD, CGD, Civil & Electrical Infrastructure",
  description:
    "ORTECH Infra is an infrastructure engineering and execution company established in 2000, specialising in Telecom Infrastructure, Horizontal Directional Drilling (HDD), City Gas Distribution (CGD), Civil and Electrical Infrastructure across India.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.ortechinfra.com",
    title: "ORTECH Infra Pvt Ltd — Telecom, HDD, CGD, Civil & Electrical Infrastructure",
    description:
      "ORTECH Infra is an infrastructure engineering and execution company established in 2000, specialising in Telecom Infrastructure, Horizontal Directional Drilling (HDD), City Gas Distribution (CGD), Civil and Electrical Infrastructure across India.",
    siteName: company.name,
    images: [
      {
        url: LOGO_URL,
        width: 512,
        height: 512,
        alt: company.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ORTECH Infra Pvt Ltd — Telecom, HDD, CGD, Civil & Electrical Infrastructure",
    description:
      "ORTECH Infra is an infrastructure engineering and execution company established in 2000, specialising in Telecom Infrastructure, Horizontal Directional Drilling (HDD), City Gas Distribution (CGD), Civil and Electrical Infrastructure across India.",
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
    logo: LOGO_URL,
    email: company.email,
    telephone: company.phone,
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
    <html lang="en" className={`${inter.variable} ${display.variable} ${hero.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <FloatingProfileCTA />
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
