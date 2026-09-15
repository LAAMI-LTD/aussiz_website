export interface Course {
  slug: string;
  name: string;
  category: string;
  categoryFilter: "language" | "ict" | "healthcare";
  featured: boolean;
  shortDescription: string;
  description: string;
  icon: string;
  benefits: string[];
  ctaLabel: string;
  price?: string;
  intakeStatus?: string;
  overview?: string;
  whoItsFor?: string[];
  learningOutcomes?: string[];
  duration?: string;
  modules?: string[];
  requirements?: string[];
  trainingMode?: string;
  fees?: string;
  examBookingInfo?: string;
  faqs?: { question: string; answer: string }[];
}

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  heroImage?: string;
  category: string;
  publishedAt: string; // ISO date string
  author?: string;
}

export interface Metric {
  value: string;
  label: string;
  description?: string;
}

export interface Facilitator {
  id: string;
  name: string;
  role: string;
  specialization: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  quote: string;
  isPlaceholder: boolean;
  image?: string;
  result?: string;
  date?: string;
  source?: string;
}
