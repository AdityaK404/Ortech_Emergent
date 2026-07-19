import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import ContactForm from "@/components/site/ContactForm";
import { company } from "@/data/site";

export const metadata = { title: "Contact" };

const DETAILS = [
  { icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: "Head office", value: company.address },
  { icon: Clock, label: "Response time", value: "Within one business day" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your rollout."
        kicker="Share your scope, location and timeline. Our pre-construction team will respond within one business day."
      />

      <section className="container-x section-pad grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Details */}
        <div className="lg:col-span-4">
          <div className="eyebrow">Reach us</div>
          <h2 className="mt-4 font-display font-semibold text-2xl text-navy-900 tracking-[-0.02em]">Direct lines</h2>
          <div className="mt-8 space-y-6">
            {DETAILS.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="h-11 w-11 bg-secondary text-navy-900 grid place-items-center shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.12em] text-steel">{label}</div>
                  {href ? (
                    <a href={href} className="mt-1 block text-navy-900 font-medium hover:text-accent transition-colors">{value}</a>
                  ) : (
                    <div className="mt-1 text-navy-900 font-medium">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <div className="text-[11px] uppercase tracking-[0.12em] text-steel">Careers</div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Looking to join our field or engineering teams? Select <span className="text-navy-900 font-medium">“Careers”</span> in the form and attach your details — we&apos;ll be in touch when roles match.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-8">
          <div className="bg-secondary border border-border p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
