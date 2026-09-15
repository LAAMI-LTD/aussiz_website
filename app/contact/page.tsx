import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aussiz Education & Training about our courses, training schedules or exam booking.",
};

const contactDetails = [
  { icon: Phone, label: "Phone", value: siteConfig.contact.phone },
  { icon: Mail, label: "Email", value: siteConfig.contact.email },
  { icon: MapPin, label: "Location", value: siteConfig.contact.location },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.contact.whatsappNumber || "[To be confirmed]",
  },
];

export default function ContactPage() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container-app">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-4xl font-bold text-navy sm:text-5xl">
            Let&apos;s Talk About Your Goals
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Have questions about our courses, training schedules or exam booking?
            Our team is ready to help.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-5">
              {contactDetails.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={index * 0.08}
                  className="flex items-start gap-4 rounded-lg border border-border bg-white p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-navy">{item.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
