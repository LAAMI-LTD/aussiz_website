import Image from "next/image";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: { ring: "h-12 w-12", logo: 24, border: "border-2" },
  md: { ring: "h-20 w-20", logo: 40, border: "border-[3px]" },
  lg: { ring: "h-28 w-28", logo: 56, border: "border-4" },
} as const;

export function Loader({
  size = "md",
  className,
}: {
  size?: keyof typeof sizeMap;
  className?: string;
}) {
  const { ring, logo, border } = sizeMap[size];

  return (
    <div className={cn("relative flex items-center justify-center", ring, className)}>
      <div className={cn("absolute inset-0 rounded-full border-border", border)} />
      <div
        className={cn(
          "loader-ring absolute inset-0 rounded-full border-transparent border-t-orange border-r-orange",
          border
        )}
      />
      <div className="loader-mark relative" style={{ width: logo, height: logo * 0.75 }}>
        <Image
          src="/logo/aussiz-logo.png"
          alt=""
          fill
          priority
          sizes={`${logo}px`}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function FullScreenLoader({ label = "Loading" }: { label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-background"
    >
      <Loader size="lg" />
      <div className="loader-copy flex flex-col items-center gap-1 text-center">
        <span className="font-heading text-sm font-bold tracking-wide text-navy">
          Aussiz Education &amp; Training
        </span>
        <span className="text-xs text-muted">{label}…</span>
      </div>
    </div>
  );
}
