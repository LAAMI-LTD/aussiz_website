"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { MessageCircle, X, Phone as PhoneIcon } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/data/site";
import { socialIconPaths, socialHoverClass } from "@/components/icons/social-icons";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

function fanVariants(distance: number, delay: number): Variants {
  return {
    hidden: { opacity: 0, y: distance, scale: 0.7 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.28, delay, ease: EASE },
    },
    exit: {
      opacity: 0,
      y: distance,
      scale: 0.7,
      transition: { duration: 0.18, ease: EASE },
    },
  };
}

function ActionButton({
  href,
  disabled,
  label,
  size,
  className,
  children,
}: {
  href: string | null;
  disabled?: boolean;
  label: string;
  size: "lg" | "sm";
  className?: string;
  children: React.ReactNode;
}) {
  const dimension = size === "lg" ? "h-14 w-14" : "h-11 w-11";
  const iconSize = size === "lg" ? "h-6 w-6" : "h-[18px] w-[18px]";

  const base = cn(
    "focus-ring flex items-center justify-center rounded-full shadow-md transition-colors duration-200",
    dimension,
    className
  );

  if (disabled || !href) {
    return (
      <span
        aria-label={`${label} — not yet available`}
        title={`${label} — not yet available`}
        className={cn(base, "cursor-not-allowed bg-white text-muted opacity-50")}
      >
        <span className={iconSize}>{children}</span>
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={base}>
      <span className={iconSize}>{children}</span>
    </a>
  );
}

export function FloatingContactWidget() {
  const [isOpen, setIsOpen] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement>(null);

  const whatsappLink = getWhatsAppLink("Hi Aussiz, I'd like to know more about your courses.");
  const phoneLink = siteConfig.contact.phone ? `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}` : null;

  React.useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isOpen]);

  const dist = prefersReducedMotion ? 0 : 16;

  return (
    <div
      ref={containerRef}
      className="fixed z-50 flex flex-col items-center gap-3"
      style={{
        bottom: "max(1.5rem, env(safe-area-inset-bottom))",
        right: "max(1.5rem, env(safe-area-inset-right))",
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Apex — TikTok */}
            <motion.div
              key="tiktok"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fanVariants(dist, prefersReducedMotion ? 0 : 0.2)}
            >
              <ActionButton
                href={siteConfig.social.tiktok || null}
                label="TikTok"
                size="sm"
                className={cn("border border-navy/15 bg-white text-navy", socialHoverClass.tiktok)}
              >
                <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                  <path d={socialIconPaths.tiktok} />
                </svg>
              </ActionButton>
            </motion.div>

            {/* Row — Instagram, Facebook */}
            <motion.div
              key="social-row"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fanVariants(dist, prefersReducedMotion ? 0 : 0.12)}
              className="flex items-center gap-3"
            >
              <ActionButton
                href={siteConfig.social.instagram || null}
                label="Instagram"
                size="sm"
                className={cn("border border-navy/15 bg-white text-navy", socialHoverClass.instagram)}
              >
                <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                  <path d={socialIconPaths.instagram} />
                </svg>
              </ActionButton>
              <ActionButton
                href={siteConfig.social.facebook || null}
                label="Facebook"
                size="sm"
                className={cn("border border-navy/15 bg-white text-navy", socialHoverClass.facebook)}
              >
                <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                  <path d={socialIconPaths.facebook} />
                </svg>
              </ActionButton>
            </motion.div>

            {/* Row — Phone, WhatsApp (primary actions) */}
            <motion.div
              key="primary-row"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fanVariants(dist, prefersReducedMotion ? 0 : 0.04)}
              className="flex items-center gap-3"
            >
              <ActionButton href={phoneLink} label="Call Aussiz" size="lg" className="bg-navy text-white hover:bg-navy-light">
                <PhoneIcon className="h-full w-full" />
              </ActionButton>
              <ActionButton
                href={whatsappLink}
                label="Chat on WhatsApp"
                size="lg"
                className="bg-[#25D366] text-white hover:brightness-95"
              >
                <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                  <path d={socialIconPaths.whatsapp} />
                </svg>
              </ActionButton>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white shadow-lg transition-transform hover:scale-105"
      >
        <motion.span
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </motion.span>
      </button>
    </div>
  );
}
