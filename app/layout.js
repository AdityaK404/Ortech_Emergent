import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingProfileCTA from "@/components/site/FloatingProfileCTA";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "ORTECH Infra Pvt Ltd — Building India's Foundational Infrastructure",
  description:
    "ORTECH Infra is a multi-discipline infrastructure contractor delivering highways, bridges, industrial sites, and urban infrastructure across India with an owned fleet, ISO-certified processes, and a zero-harm safety culture.",
  keywords: [
    "ORTECH Infra",
    "Infrastructure contractor India",
    "Earthwork",
    "Highway construction",
    "Industrial site development",
    "Heavy civil contractor",
  ],
  openGraph: {
    title: "ORTECH Infra Pvt Ltd",
    description: "Evidence-led infrastructure delivery at national scale.",
    type: "website",
  },
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
