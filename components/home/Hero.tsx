"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {/* Layer 1 — the real Aussiz computer lab */}
      <div className="absolute inset-0">
        <motion.div
          initial={prefersReducedMotion ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Image
            src="/images/hero/computer-lab.jpg"
            alt="Students' workstations in the Aussiz computer training lab"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_32%]"
          />
        </motion.div>
      </div>

      {/* Layer 2 — brand-colored gradient treatment, not a flat black scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(115deg,rgba(30,34,72,0.96)_18%,rgba(30,34,72,0.82)_42%,rgba(30,34,72,0.45)_68%,rgba(233,116,3,0.18)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_15%,rgba(233,116,3,0.16),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent"
      />

      {/* Layer 3 — content */}
      <div className="container-app relative py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <motion.div
            {...fadeUp(0.05)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-sm"
          >
            <ShieldCheck className="h-4 w-4 text-orange" />
            <span className="text-xs font-semibold tracking-wide text-white">
              {siteConfig.partnership.trustBadge}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="text-xs font-medium text-white/70">
              {siteConfig.partnership.statement}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.18)}
            className="mt-6 font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Your Goals Are <span className="text-orange">Our Goals.</span>
            <br />
            Your Success Is <span className="text-orange">Our Success.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.32)}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Build the skills, confidence and knowledge you need to take your next
            step — from English language testing and ICT skills to German language
            and professional training.
          </motion.p>

          <motion.div
            {...fadeUp(0.46)}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="/ielts-booking">
              <Button size="lg" className="w-full sm:w-auto">
                Book IELTS
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outlineOnDark" size="lg" className="w-full sm:w-auto">
                <MessageCircle className="h-4 w-4" />
                Explore Courses
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
