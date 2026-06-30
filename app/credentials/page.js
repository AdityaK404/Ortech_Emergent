import Link from "next/link";
import { ArrowUpRight, Award, FileText, Download } from "lucide-react";
import { credentials } from "@/data/site";
import { PageHero, CTAStrip } from "../about/page";

export const metadata = { title: "Credentials — ORTECH Infra Pvt Ltd" };

const documents = [
  { name: "ISO 9001:2015 Certificate", size: "284 KB", type: "PDF" },
  { name: "ISO 14001:2015 Certificate", size: "291 KB", type: "PDF" },
  { name: "ISO 45001:2018 Certificate", size: "288 KB", type: "PDF" },
  { name: "NHAI Prequalification Letter", size: "412 KB", type: "PDF" },
  { name: "CIDC Gradation Certificate", size: "196 KB", type: "PDF" },
  { name: "GST & PAN — Composite", size: "148 KB", type: "PDF" },
  { name: "Company Profile FY25", size: "6.4 MB", type: "PDF" },
  { name: "Machinery Schedule FY25", size: "1.2 MB", type: "PDF" },
];

export default function CredentialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Credentials"
        title="Audited. Certified. Surveilled continuously."
        kicker="Every certificate is current and externally verifiable. Click any item below to request the latest copy."
        image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f"
      />
      <section className="container-x py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {credentials.map((c) => (
            <div key={c.code} className="bg-background p-7">
              <Award className="h-6 w-6 text-accent" />
              <div className="mt-5 font-serif text-base text-primary">{c.code}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.title}</div>
              <div className="mt-5 text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{c.issuer} · {c.year}</div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="eyebrow"><span className="accent-rule"></span>Downloadable documents</div>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">Document library</h2>
            </div>
            <Link href="/contact" className="text-[12px] tracking-[0.18em] uppercase text-primary hover:text-accent">Request all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {documents.map((d) => (
              <Link href="/contact" key={d.name} className="bg-background p-6 flex items-center justify-between gap-4 group hover:bg-secondary/40">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-secondary text-primary grid place-items-center">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary">{d.name}</div>
                    <div className="text-xs text-muted-foreground">{d.type} · {d.size}</div>
                  </div>
                </div>
                <Download className="h-4 w-4 text-muted-foreground group-hover:text-accent" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
