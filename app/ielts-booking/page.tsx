import type { Metadata } from "next";
import { BookOpenCheck, ClipboardCheck, Dumbbell, CalendarCheck2, Trophy } from "lucide-react";
import { getCourseBySlug } from "@/data/courses";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Book IELTS",
  description:
    "Start your IELTS training and exam booking enquiry with Aussiz Education & Training, an Approved IELTS Test Centre.",
};

const steps = [
  { icon: BookOpenCheck, title: "Training", description: "Structured preparation across all four skills." },
  { icon: ClipboardCheck, title: "Assessment", description: "Identify your current level and target band." },
  { icon: Dumbbell, title: "Practice", description: "Timed practice tests and structured feedback." },
  { icon: CalendarCheck2, title: "Exam Booking Support", description: "Guidance on booking your official IELTS exam." },
  { icon: Trophy, title: "Exam", description: "Sit your test with confidence." },
];

const ielts = getCourseBySlug("ielts");

export default function IeltsBookingPage() {
  return (
    <>
      <section className="bg-white py-16 md:py-20">
        <div className="container-app text-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 px-4 py-1.5 text-xs font-semibold text-orange">
              {siteConfig.partnership.trustBadge}
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold text-navy sm:text-5xl">
              Book IELTS
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Start your IELTS training and exam booking enquiry with Aussiz — {siteConfig.partnership.statement.toLowerCase()}.
            </p>
            {ielts?.price && (
              <p className="mt-4 text-sm font-semibold text-navy">
                {ielts.price} · {ielts.duration}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-14 md:py-16">
        <div className="container-app">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
              How IELTS Booking Works at Aussiz
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 0.08}
                className="flex flex-col items-center text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 text-navy">
                  <step.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-app max-w-2xl">
          <Reveal className="mb-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
              Start Your Booking Enquiry
            </h2>
            <p className="mt-3 text-sm text-muted">
              Tell us a bit about your goals and our team will follow up with training
              and exam booking details.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm defaultCourse="IELTS" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
