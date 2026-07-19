import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/site";

// Shared closing call-to-action band. Navy, one accent button, phone shown as text.
export default function CTAStrip({
  title = "Ready to discuss your rollout?",
  body = "Share your scope and our pre-construction team responds within one business day.",
}) {
  return (
    <section className="bg-navy-950 text-white">
      <div className="container-x section-pad text-center">
        <h2 className="font-display text-[clamp(1.9rem,3.5vw,2.9rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance max-w-3xl mx-auto">
          {title}
        </h2>
        <p className="mt-5 text-white/60 max-w-xl mx-auto leading-relaxed">{body}</p>
        <div className="mt-9 flex flex-wrap justify-center items-center gap-4">
          <Link href="/contact" className="btn-accent">
            Request a quote <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="btn-on-dark">
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
