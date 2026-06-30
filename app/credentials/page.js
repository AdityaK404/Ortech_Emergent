import Link from "next/link";
import { ArrowUpRight, Award, FileText, Download } from "lucide-react";
import { credentials } from "@/data/site";
import { PageHero, CTAStrip } from "../about/page";

export const metadata = { title: "Credentials — ORTECH Infra Pvt Ltd" };

const documents = [
  { name: "ORTECH Company Profile (FY25)", size: "On request", type: "PDF" },
  { name: "Class I Electrical Contractor License", size: "On request", type: "PDF" },
  { name: "Class I Civil Contractor License", size: "On request", type: "PDF" },
  { name: "Labour License (Multi-state)", size: "On request", type: "PDF" },
  { name: "GST Registration Certificate", size: "On request", type: "PDF" },
  { name: "PAN — Composite", size: "On request", type: "PDF" },
  { name: "Work Completion Certificates (Bharti Airtel)", size: "On request", type: "PDF Bundle" },
  { name: "Work Completion Certificates (BSNL)", size: "On request", type: "PDF Bundle" },
  { name: "Work Completion Certificates (L&T)", size: "On request", type: "PDF Bundle" },
  { name: "Experience Certificates — Aggregated", size: "On request", type: "PDF" },
  { name: "Government Letters of Intent", size: "On request", type: "PDF" },
  { name: "EPC Vendor Approval Letters", size: "On request", type: "PDF" },
];

export default function CredentialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Credentials"
        title="Government registered. Class-I certified. Empanelled with EPC majors."
        kicker="Every certificate, work-completion letter and vendor approval is on file. Request the complete bundle and our team will share within 24 hours."
        image="https://images.unsplash.com/photo-1509390673020-a5b2450e33f1"
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
              <div className="eyebrow"><span className="accent-rule"></span>Document library</div>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">Available on request</h2>
            </div>
            <Link href="/contact" className="text-[12px] tracking-[0.18em] uppercase text-primary hover:text-accent">Request all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {documents.map((d) => (
              <Link href="/contact" key={d.name} className="bg-background p-6 flex items-center justify-between gap-4 group hover:bg-secondary/40">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-secondary text-primary grid place-items-center"><FileText className="h-4 w-4" /></div>
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
