import type { Course } from "@/types";
import { CourseCard } from "@/components/courses/CourseCard";
import { Reveal } from "@/components/ui/reveal";

export function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, index) => (
        <Reveal key={course.slug} delay={(index % 3) * 0.08}>
          <CourseCard course={course} />
        </Reveal>
      ))}
    </div>
  );
}
