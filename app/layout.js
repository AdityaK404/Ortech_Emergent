import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingProfileCTA from "@/components/site/FloatingProfileCTA";
import { Toaster } from "@/components/ui/sonner";
import { LOGO_URL } from "@/data/site";

const inter = Inter({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-serif", display: "swap" });

export const metadata = {
  title: "ORTECH Infra Pvt Ltd — Telecom, HDD, CGD, Civil & Electrical Infrastructure",
  description:
    "ORTECH Infra is an infrastructure engineering and execution company established in 2000, specialising in Telecom Infrastructure, Horizontal Directional Drilling (HDD), City Gas Distribution (CGD), Civil and Electrical Infrastructure across India.",
  keywords: [
    "ORTECH Infra", "Telecom OFC contractor", "HDD India", "Horizontal Directional Drilling",
    "City Gas Distribution contractor", "Optical fibre cable rollout", "Belagavi infrastructure",
  ],
  icons: { icon: LOGO_URL, shortcut: LOGO_URL, apple: LOGO_URL },
  openGraph: { title: "ORTECH Infra Pvt Ltd", description: "Engineered infrastructure. Executed with precision.", type: "website" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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
