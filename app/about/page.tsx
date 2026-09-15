import type { Metadata } from "next";
import { Award, ShieldCheck, GraduationCap, Users2, Accessibility, TrendingUp } from "lucide-react";
import { facilitators } from "@/data/facilitators";
import { FacilitatorCard } from "@/components/about/FacilitatorCard";
import { WhyAussiz } from "@/components/home/WhyAussiz";
import { LearningJourney } from "@/components/home/LearningJourney";
import { Testimonials } from "@/components/home/Testimonials";
import { Partnership } from "@/components/home/Partnership";
import { CTASection } from "@/components/home/CTASection";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Aussiz Education & Training — our mission, vision, values and the facilitators who support learners on their academic and professional journeys.",
};

const values = [
  { icon: Award, title: "Excellence", description: "Committed to high-quality training and consistent standards." },
  { icon: ShieldCheck, title: "Integrity", description: "Honest, transparent guidance for every learner." },
  { icon: GraduationCap, title: "Student Success", description: "Learner outcomes are at the centre of everything we do." },
  { icon: Users2, title: "Professionalism", description: "A respectful, structured and supportive learning environment." },
  { icon: Accessibility, title: "Accessibility", description: "Training designed to be practical and accessible for diverse learners." },
  { icon: TrendingUp, title: "Continuous Growth", description: "Encouraging ongoing development for students and facilitators alike." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-16 md:py-20">
        <div className="container-app grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 px-4 py-1.5 text-xs font-semibold text-orange">
              {siteConfig.partnership.trustBadge}
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold text-navy sm:text-5xl">
              About Aussiz Education &amp; Training
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              We help learners achieve their academic, professional and personal goals
              through practical, accessible and goal-oriented education.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              role="img"
              aria-label="A workstation in the Aussiz computer training lab"
              className="aspect-[7/4] w-full rounded-xl bg-cover bg-center bg-no-repeat shadow-lg"
              style={{ backgroundImage: "url(/images/hero/computer-lab-close.jpg)" }}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container-app grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal className="rounded-lg border border-border bg-white p-8">
            <h2 className="font-heading text-xl font-bold text-navy">Who We Are</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Aussiz Education &amp; Training is a modern training organization focused on
              relevant knowledge, practical skills and learner success. We support learners
              across English language testing preparation, international language training,
              computer and ICT skills, and healthcare-related training, helping each student
              move confidently toward their next step.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal delay={0.1} className="rounded-lg border border-border bg-white p-8">
              <h3 className="font-heading text-lg font-bold text-navy">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                To empower learners with relevant knowledge, practical skills and confidence
                to achieve their academic, professional and personal goals.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="rounded-lg border border-border bg-white p-8">
              <h3 className="font-heading text-lg font-bold text-navy">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                To become a trusted education and training partner for individuals pursuing
                quality learning, professional development and international opportunities.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-app">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Our Values
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={(index % 3) * 0.08}
                className="rounded-lg border border-border p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <value.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyAussiz />

      <LearningJourney />

      <section className="bg-background py-16 md:py-20">
        <div className="container-app">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Meet Our Facilitators
            </h2>
            <p className="mt-3 text-sm text-muted">
              Placeholder profiles — replace with verified facilitator information.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {facilitators.map((facilitator, index) => (
              <Reveal key={facilitator.id} delay={(index % 4) * 0.08}>
                <FacilitatorCard facilitator={facilitator} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <Partnership />

      <CTASection />
    </>
  );
}
