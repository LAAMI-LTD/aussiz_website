// Centralized site configuration. Replace placeholders with verified business
// information — never invent contact details, socials, or partnership claims.

export const siteConfig = {
  name: "Aussiz Education & Training",
  tagline: "Your Goals Are Our Goals — And Your Success Is Our Success.",
  description:
    "Aussiz Education & Training provides IELTS and PTE preparation and exam booking support, computer and ICT training, German language training, Nurse Aide, Caregiving and Disability training.",

  // Verified against the live production site (aussiz-site1.vercel.app) on 2026-09-08.
  // NOTE: the phone number below is published live as "+254 700 000 000" — the
  // repeated zeros strongly suggest it may itself be an unfilled placeholder on
  // the production site rather than a real number. Confirm before relying on it.
  contact: {
    phone: "+254 748 822 787, +254 720 480 750, +254 725 990 232",
    email: "info@aussiz.co.ke",
    location: "Komora Centre, 4th Floor, Rooms 413 & 415, Eldoret, Kenya",
    whatsappNumber: "+254 748 822 787,",
  },

  social: {
    facebook: "",
    instagram: "",
    tiktok: "https://www.tiktok.com/@aussizeducationieltseld",
    linkedin: "",
  },

  partnership: {
    name: "British Council",
    statement: "In partnership with the British Council",
    trustBadge: "Approved IELTS Test Centre",
  },


  developer: {
    name: "Laami",
    url: "https://laamilabs.co.ke",
  },
} as const;

export const siteMetrics = [
  { value: "3,200+", label: "Students Trained" },
  { value: "85%", label: "IELTS Band 6.5+ Success Rate" },
  { value: "12+", label: "Years of Experience" },
  { value: "98%", label: "Student Satisfaction" },
] as const;

export function getWhatsAppLink(prefilledMessage?: string) {
  if (!siteConfig.contact.whatsappNumber) return null;
  const base = `https://wa.me/${siteConfig.contact.whatsappNumber}`;
  return prefilledMessage ? `${base}?text=${encodeURIComponent(prefilledMessage)}` : base;
}
