"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Course } from "@/types";
import { CourseGrid } from "@/components/courses/CourseGrid";

const filters: { key: "all" | Course["categoryFilter"]; label: string }[] = [
  { key: "all", label: "All" },
  { key: "language", label: "Language" },
  { key: "ict", label: "ICT" },
  { key: "healthcare", label: "Healthcare" },
];

export function CourseFilter({ courses }: { courses: Course[] }) {
  const [active, setActive] = React.useState<(typeof filters)[number]["key"]>("all");

  const visibleCourses =
    active === "all" ? courses : courses.filter((c) => c.categoryFilter === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter courses by category"
        className="flex flex-wrap justify-center gap-2"
      >
        {filters.map((filter) => {
          const isActive = active === filter.key;
          return (
            <button
              key={filter.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(filter.key)}
              className={cn(
                "focus-ring relative rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "border-orange text-white"
                  : "border-border bg-white text-navy hover:border-orange hover:text-orange"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="course-filter-active"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 -z-10 rounded-full bg-orange"
                />
              )}
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10">
        {visibleCourses.length > 0 ? (
          <CourseGrid courses={visibleCourses} />
        ) : (
          <p className="py-12 text-center text-sm text-muted">
            No courses in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
