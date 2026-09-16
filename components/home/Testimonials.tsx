"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quote, User } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const AUTO_ROTATE_MS = 5000;

function StudentAvatar({
  testimonial,
  className,
}: {
  testimonial: (typeof testimonials)[number];
  className?: string;
}) {
  if (testimonial.image) {
    return (
      <div className={cn("relative overflow-hidden rounded-full bg-navy/10", className)}>
        <Image src={testimonial.image} alt="" fill sizes="64px" className="object-cover" />
      </div>
    );
  }
  return (
    <div className={cn("flex items-center justify-center rounded-full bg-navy/10 text-navy", className)}>
      <User className="h-1/2 w-1/2" />
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();

  const active = testimonials[activeIndex];

  React.useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused]);

  if (testimonials.length === 0) return null;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            What Our Students Say
          </h2>
        </div>

        <div
          className="mx-auto mt-12 max-w-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[220px] overflow-hidden rounded-xl border border-border bg-background p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Quote className="h-7 w-7 text-orange" />
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  {active.quote}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <StudentAvatar testimonial={active} className="h-11 w-11 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-navy">{active.name}</p>
                    <p className="text-xs text-muted">{active.course}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {testimonials.length > 1 && (
            <div
              role="tablist"
              aria-label="Choose a student testimonial to view"
              className="mt-6 flex flex-wrap items-center justify-center gap-2"
            >
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={testimonial.id}
                    type="button"
                    role="tab"
                    aria-current={isActive}
                    aria-selected={isActive}
                    aria-label={`View testimonial from ${testimonial.name}`}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "focus-ring flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                      isActive
                        ? "border-orange bg-orange/10 text-orange"
                        : "border-border text-muted hover:border-orange/40 hover:text-navy"
                    )}
                  >
                    <StudentAvatar testimonial={testimonial} className="h-6 w-6 shrink-0" />
                    {testimonial.name}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
