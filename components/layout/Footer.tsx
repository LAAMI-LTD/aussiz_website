"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { socialIconPaths } from "@/components/icons/social-icons";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact Us" },
];

const courseLinks = [
  { href: "/courses/ielts", label: "IELTS" },
  { href: "/courses/pte", label: "PTE" },
  { href: "/courses/computer-ict", label: "Computer & ICT" },
  { href: "/courses/german", label: "German Language" },
  { href: "/courses/nurse-aide", label: "Nurse Aide" },
  { href: "/courses/caregiving-disability", label: "Caregiving & Disability" },
];

const socialLinks = [
  { key: "facebook", label: "Facebook", url: siteConfig.social.facebook, path: socialIconPaths.facebook },
  { key: "instagram", label: "Instagram", url: siteConfig.social.instagram, path: socialIconPaths.instagram },
  { key: "linkedin", label: "LinkedIn", url: siteConfig.social.linkedin, path: socialIconPaths.linkedin },
  { key: "tiktok", label: "TikTok", url: siteConfig.social.tiktok, path: socialIconPaths.tiktok },
];

const columnReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Footer() {
  const prefersReducedMotion = useReducedMotion();

  const reveal = (index: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          variants: columnReveal,
          custom: index,
        };

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      {/* Layered background: subtle education imagery beneath a strong navy
          overlay so the footer stays part of the same visual system rather
          than competing with the content on top of it. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
        style={{ backgroundImage: "url(/images/hero/computer-lab.jpg)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,34,72,0.92)_0%,rgba(30,34,72,0.97)_45%,#1E2248_100%)]"
      />

      <div className="relative container-app grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div {...reveal(0)}>
          <Link href="/" className="mb-4 inline-flex items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white p-1.5">
              <Image
                src="/logo/aussiz-logo.png"
                alt="Aussiz Education & Training"
                width={44}
                height={33}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-heading text-base font-bold">
              Aussiz Education &amp; Training
            </span>
          </Link>
          <p className="text-sm font-medium italic text-white/85">
            &ldquo;Your Goals Are Our Goals. Your Success Is Our Success.&rdquo;
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            Aussiz Education &amp; Training provides language, ICT and professional
            training designed to help learners move confidently toward their goals.
          </p>
        </motion.div>

        <motion.div {...reveal(1)}>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-white/65">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="focus-ring rounded-md transition-colors hover:text-orange">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...reveal(2)}>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
            Courses &amp; Services
          </h4>
          <ul className="space-y-2 text-sm text-white/65">
            {courseLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="focus-ring rounded-md transition-colors hover:text-orange">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...reveal(3)}>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/65">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-orange" />
              <span>{siteConfig.contact.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-orange" />
              <span>{siteConfig.contact.email}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-orange" />
              <span>{siteConfig.contact.location}</span>
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((social) =>
              social.url ? (
                <a
                  key={social.key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-orange"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d={social.path} />
                  </svg>
                </a>
              ) : (
                <span
                  key={social.key}
                  aria-label={`${social.label} (link not yet available)`}
                  title={`${social.label} — link not yet available`}
                  className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full bg-white/5 opacity-40"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d={social.path} />
                  </svg>
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-app flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/55 sm:flex-row">
          <p>© 2026 Aussiz Education &amp; Training. All Rights Reserved.</p>
          <p>{siteConfig.partnership.trustBadge} · {siteConfig.partnership.statement}</p>
          {siteConfig.developer.url ? (
            <a
              href={siteConfig.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-1.5 rounded-md text-white/45 transition-colors hover:text-white/80"
            >
              <Image
                src="/logos/laami-logo.jpeg"
                alt=""
                width={16}
                height={14}
                style={{ width: 16, height: 14 }}
                className="rounded-sm opacity-80"
              />
              Developed by {siteConfig.developer.name}
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-white/45">
              <Image
                src="/logos/laami-logo.jpeg"
                alt=""
                width={16}
                height={14}
                style={{ width: 16, height: 14 }}
                className="rounded-sm opacity-80"
              />
              Developed by {siteConfig.developer.name}
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
