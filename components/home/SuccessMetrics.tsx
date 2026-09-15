import { Reveal } from "@/components/ui/reveal";
import type { Metric } from "@/types";

export function SuccessMetrics({ metrics }: { metrics: readonly Metric[] }) {
  return (
    <section className="bg-navy py-14 md:py-16">
      <div className="container-app grid grid-cols-2 gap-8 md:grid-cols-4">
        {metrics.map((metric, index) => (
          <Reveal
            key={metric.label}
            delay={index * 0.08}
            className="flex flex-col items-center text-center"
          >
            <span className="font-heading text-3xl font-bold text-orange sm:text-4xl">
              {metric.value}
            </span>
            <span className="mt-1.5 text-xs font-medium uppercase tracking-wide text-white/75 sm:text-sm">
              {metric.label}
            </span>
            {metric.description && (
              <span className="mt-1 text-xs text-white/50">{metric.description}</span>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
