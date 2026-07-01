import { Inter, Space_Grotesk, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingProfileCTA from "@/components/site/FloatingProfileCTA";
import { Toaster } from "@/components/ui/sonner";
import { LOGO_URL } from "@/data/site";

const inter = Inter({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], weight: ["500","600","700"], variable: "--font-display", display: "swap" });
const hero = Merriweather({ subsets: ["latin"], weight: ["400","700","900"], style: ["normal","italic"], variable: "--font-hero", display: "swap" });

export const metadata = {
  title: "ORTECH Infra Pvt Ltd — Telecom, HDD, CGD, Civil & Electrical Infrastructure",
  description:
    "ORTECH Infra is an infrastructure engineering and execution company established in 2000, specialising in Telecom Infrastructure, Horizontal Directional Drilling (HDD), City Gas Distribution (CGD), Civil and Electrical Infrastructure across India.",
  icons: { icon: LOGO_URL, shortcut: LOGO_URL, apple: LOGO_URL },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${hero.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <FloatingProfileCTA />
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
