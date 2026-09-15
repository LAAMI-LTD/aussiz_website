import { Hero } from "@/components/home/Hero";
import { SuccessMetrics } from "@/components/home/SuccessMetrics";
import { CourseHighlights } from "@/components/home/CourseHighlights";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { siteMetrics } from "@/data/site";

// Homepage order per the site1-inspired redesign brief:
// Hero -> Success Metrics -> Our Programs -> Testimonials -> CTA -> Footer.
// Why Choose Aussiz, The Aussiz Approach, and facilitator profiles now live on
// /about, where they fit the editorial structure better than on the homepage.
export default function Home() {
  return (
    <>
      <Hero />
      <SuccessMetrics metrics={siteMetrics} />
      <CourseHighlights />
      <Testimonials />
      <CTASection />
    </>
  );
}
