import Link from "next/link";
import {
  BookOpenCheck,
  MonitorCheck,
  Laptop,
  Languages,
  HeartPulse,
  HandHeart,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { Course } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, LucideIcon> = {
  BookOpenCheck,
  MonitorCheck,
  Laptop,
  Languages,
  HeartPulse,
  HandHeart,
};

export function CourseCard({ course }: { course: Course }) {
  const Icon = iconMap[course.icon] ?? BookOpenCheck;

  return (
    <Card className="group flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-lg">
      <CardContent className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange/10 text-orange transition-colors duration-300 group-hover:bg-orange group-hover:text-white">
            <Icon className="h-6 w-6" />
          </span>
          <Badge variant="navy">{course.category}</Badge>
        </div>
        {course.intakeStatus && (
          <span className="mb-2 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            {course.intakeStatus}
          </span>
        )}
        <h3 className="font-heading text-lg font-bold text-navy">{course.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {course.shortDescription}
        </p>
        {course.price && (
          <p className="mt-3 text-sm font-semibold text-navy">{course.price}</p>
        )}
        <ul className="mt-4 space-y-1.5">
          {course.benefits.slice(0, 2).map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-xs text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
              {benefit}
            </li>
          ))}
        </ul>
        <Link
          href={`/courses/${course.slug}`}
          className="focus-ring mt-5 inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-orange transition-transform duration-300 hover:text-orange-light group-hover:translate-x-0.5"
        >
          {course.ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
