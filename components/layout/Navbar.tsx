"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-300 ease-out",
        scrolled
          ? "border-b border-border bg-white/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white/60 backdrop-blur-sm"
      )}
    >
      <nav className="container-app flex h-20 items-center justify-between">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link href="/" className="focus-ring flex items-center gap-2.5 rounded-md">
            <Image
              src="/logo/aussiz-logo.png"
              alt="Aussiz Education & Training"
              width={44}
              height={33}
              priority
              className="h-9 w-auto"
            />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-heading text-base font-bold text-navy">
                Aussiz
              </span>
              <span className="text-[10px] font-medium tracking-[0.14em] text-muted">
                EDUCATION &amp; TRAINING
              </span>
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: prefersReducedMotion
                ? undefined
                : { staggerChildren: 0.06, delayChildren: 0.15 },
            },
          }}
          className="hidden items-center gap-1 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.href}
                variants={{
                  hidden: prefersReducedMotion ? {} : { opacity: 0, y: -6 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "focus-ring group relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-orange" : "text-navy hover:text-orange"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-orange transition-transform duration-300 ease-out group-hover:scale-x-100",
                      isActive && "scale-x-100"
                    )}
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="hidden md:block"
        >
          <Link href="/ielts-booking">
            <Button variant="primary" size="default">
              Book IELTS
            </Button>
          </Link>
        </motion.div>

        <button
          type="button"
          className="focus-ring rounded-md p-2 text-navy md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <div className="container-app flex flex-col gap-1 py-5">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "focus-ring block rounded-md px-2 py-3 text-base font-medium",
                      pathname === link.href ? "text-orange" : "text-navy"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/ielts-booking" className="mt-2" onClick={closeMobileMenu}>
                <Button className="w-full">Book IELTS</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
