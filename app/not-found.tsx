import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-background py-20">
      <div className="container-app flex flex-col items-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/5 text-navy">
          <Compass className="h-7 w-7" />
        </span>
        <h1 className="mt-6 font-heading text-3xl font-bold text-navy sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
          <Link href="/courses">
            <Button variant="outline">Explore Courses</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
