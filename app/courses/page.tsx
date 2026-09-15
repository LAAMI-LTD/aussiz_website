import type { Metadata } from "next";
import { courses } from "@/data/courses";
import { CourseFilter } from "@/components/courses/CourseFilter";
import { CTASection } from "@/components/home/CTASection";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Courses & Training",
  description:
    "Explore Aussiz Education & Training's programmes: IELTS, PTE, Computer & ICT, German language, Nurse Aide, and Caregiving & Disability training.",
};

export default function CoursesPage() {
  return (
    <>
      <section className="bg-white py-16 md:py-20">
        <div className="container-app text-center">
          <Reveal>
            <h1 className="font-heading text-4xl font-bold text-navy sm:text-5xl">
              Courses &amp; Training
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Explore learning opportunities designed to help you build practical skills,
              prepare for examinations and move toward your next goal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container-app">
          <CourseFilter courses={courses} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
