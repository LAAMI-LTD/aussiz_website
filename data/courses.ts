import type { Course } from "@/types";

export const courses: Course[] = [
  {
    slug: "ielts",
    name: "IELTS Training & Exam Booking",
    category: "English Language Testing",
    categoryFilter: "language",
    featured: true,
    icon: "BookOpenCheck",
    shortDescription:
      "Prepare confidently for IELTS with structured training designed to strengthen your listening, reading, writing and speaking skills, with support for exam booking.",
    description:
      "Prepare confidently for IELTS with structured training designed to strengthen your listening, reading, writing and speaking skills, with support for exam booking.",
    benefits: [
      "Skill-focused training across all four bands",
      "Practice tests and structured feedback",
      "Exam booking support",
      "Small-group and individual sessions",
    ],
    ctaLabel: "Learn More",
    price: "KES 10,000 (Face-to-Face) / KES 12,000 (Online)",
    intakeStatus: "Intake Open",
    overview:
      "Placeholder overview — replace with verified IELTS programme details.",
    whoItsFor: [
      "Students applying to study overseas",
      "Professionals seeking migration or work pathways",
      "Anyone needing a recognised English proficiency score",
    ],
    learningOutcomes: [
      "Improved listening comprehension strategies",
      "Stronger academic and general reading techniques",
      "Structured approach to writing Task 1 and Task 2",
      "Confidence in speaking under exam conditions",
    ],
    duration: "4 Weeks",
    modules: ["Listening", "Reading", "Writing", "Speaking", "Mock Exams"],
    requirements: ["[Requirements to be confirmed]"],
    trainingMode: "Face to Face / Online",
    fees: "KES 10,000 (Face-to-Face) / KES 12,000 (Online)",
    examBookingInfo:
      "Aussiz can support learners with information on booking their IELTS exam. Booking is subject to official test provider terms.",
    faqs: [
      {
        question: "Does Aussiz guarantee a specific IELTS band score?",
        answer:
          "No. Aussiz provides structured preparation and support, but results depend on individual performance and cannot be guaranteed.",
      },
    ],
  },
  {
    slug: "pte",
    name: "PTE Training & Exam Booking",
    category: "English Language Testing",
    categoryFilter: "language",
    featured: true,
    icon: "MonitorCheck",
    shortDescription:
      "Build the skills, confidence and test strategies needed to perform effectively in the Pearson Test of English.",
    description:
      "Build the skills, confidence and test strategies needed to perform effectively in the Pearson Test of English.",
    benefits: [
      "Computer-based exam technique training",
      "Targeted practice for all item types",
      "Exam booking support",
      "Personalised progress feedback",
    ],
    ctaLabel: "Learn More",
    price: "KES 10,000",
    intakeStatus: "Intake Open",
    overview: "Placeholder overview — replace with verified PTE programme details.",
    whoItsFor: [
      "Students and professionals needing a fast, computer-based English test",
      "Applicants for study, work or migration pathways",
    ],
    learningOutcomes: [
      "Familiarity with the PTE test interface and timing",
      "Improved accuracy across speaking, writing, reading and listening tasks",
      "Test-day strategies for managing time and stress",
    ],
    duration: "4 Weeks",
    modules: ["Speaking & Writing", "Reading", "Listening", "Mock Tests"],
    requirements: ["[Requirements to be confirmed]"],
    trainingMode: "Computer-Based",
    fees: "KES 10,000",
    examBookingInfo:
      "Aussiz can support learners with information on booking their PTE exam. Booking is subject to official test provider terms.",
    faqs: [
      {
        question: "Can Aussiz guarantee my PTE score?",
        answer:
          "No. Aussiz provides preparation and guidance, but scores depend on individual performance and cannot be guaranteed.",
      },
    ],
  },
  {
    slug: "computer-ict",
    name: "Computer Packages & ICT Courses",
    category: "Computer & ICT",
    categoryFilter: "ict",
    featured: true,
    icon: "Laptop",
    shortDescription:
      "Develop practical computer and digital skills for school, work, business and everyday life.",
    description:
      "Develop practical computer and digital skills for school, work, business and everyday life.",
    benefits: [
      "Hands-on, practical training",
      "Beginner to intermediate skill levels",
      "Office and everyday productivity tools",
      "Certificate of completion",
    ],
    ctaLabel: "View ICT Courses",
    price: "KES 3,500",
    intakeStatus: "Intake Open",
    overview: "Placeholder overview — replace with verified ICT programme details.",
    whoItsFor: [
      "Students building foundational digital skills",
      "Job seekers needing computer literacy",
      "Small business owners and everyday learners",
    ],
    learningOutcomes: [
      "Confident use of common office and productivity software",
      "Basic digital literacy and file management",
      "Practical skills applicable to work and study",
    ],
    duration: "1 Month",
    modules: ["Computer Basics", "Office Applications", "Internet & Email", "Digital Safety"],
    requirements: ["[Requirements to be confirmed]"],
    trainingMode: "Beginner to Advanced",
    fees: "KES 3,500",
    faqs: [],
  },
  {
    slug: "german",
    name: "German Language Training & Booking",
    category: "International Languages",
    categoryFilter: "language",
    featured: true,
    icon: "Languages",
    shortDescription:
      "Learn German through structured language training designed for academic, professional and personal opportunities.",
    description:
      "Learn German through structured language training designed for academic, professional and personal opportunities.",
    benefits: [
      "Structured levels from beginner upward",
      "Focus on speaking and everyday communication",
      "Support for academic and professional goals",
      "Experienced language facilitators",
    ],
    ctaLabel: "Learn German",
    price: "KES 10,000 / Month",
    intakeStatus: "Intake Open",
    overview: "Placeholder overview — replace with verified German programme details.",
    whoItsFor: [
      "Students planning to study in German-speaking countries",
      "Professionals pursuing international career opportunities",
      "Anyone learning German for personal growth",
    ],
    learningOutcomes: [
      "Practical conversational German skills",
      "Foundational grammar and vocabulary",
      "Preparation pathway toward recognised proficiency levels",
    ],
    duration: "2 Months per Level (A1–B2)",
    modules: ["Beginner (A1)", "Elementary (A2)", "Intermediate (B1)"],
    requirements: ["[Requirements to be confirmed]"],
    trainingMode: "In-person",
    fees: "KES 10,000 / Month",
    faqs: [],
  },
  {
    slug: "nurse-aide",
    name: "Nurse Aide",
    category: "Healthcare Training",
    categoryFilter: "healthcare",
    featured: true,
    icon: "HeartPulse",
    shortDescription:
      "Gain practical knowledge and foundational skills for supporting patients and healthcare professionals.",
    description:
      "Gain practical knowledge and foundational skills for supporting patients and healthcare professionals.",
    benefits: [
      "Practical, hands-on healthcare training",
      "Foundational patient support skills",
      "Professional and compassionate care approach",
      "Pathway into healthcare support roles",
    ],
    ctaLabel: "Learn More",
    overview: "Placeholder overview — replace with verified Nurse Aide programme details.",
    whoItsFor: [
      "Individuals interested in entry-level healthcare support roles",
      "Career changers exploring the healthcare sector",
    ],
    learningOutcomes: [
      "Basic patient care and support techniques",
      "Understanding of hygiene, safety and professionalism in care settings",
      "Foundational knowledge for supporting healthcare teams",
    ],
    duration: "[Duration to be confirmed]",
    modules: ["Patient Care Basics", "Safety & Hygiene", "Communication in Healthcare"],
    requirements: ["[Requirements to be confirmed]"],
    trainingMode: "[In-person / Online — to be confirmed]",
    fees: "[Fees available on enquiry]",
    faqs: [],
  },
  {
    slug: "caregiving-disability",
    name: "Caregiving & Disability",
    category: "Healthcare Training",
    categoryFilter: "healthcare",
    featured: true,
    icon: "HandHeart",
    shortDescription:
      "Develop practical caregiving skills for supporting individuals with dignity, compassion and professionalism.",
    description:
      "Develop practical caregiving skills for supporting individuals with dignity, compassion and professionalism.",
    benefits: [
      "Person-centred caregiving approach",
      "Practical support techniques",
      "Focus on dignity and compassion",
      "Foundational disability support knowledge",
    ],
    ctaLabel: "Learn More",
    price: "KES 65,000",
    intakeStatus: "Intake Open",
    overview:
      "Placeholder overview — replace with verified Caregiving & Disability programme details.",
    whoItsFor: [
      "Individuals interested in caregiving or disability support roles",
      "Family members supporting a loved one",
    ],
    learningOutcomes: [
      "Foundational caregiving and support skills",
      "Understanding of dignity-focused, person-centred care",
      "Practical approaches for supporting individuals with disabilities",
    ],
    duration: "6 Months",
    modules: ["Foundations of Caregiving", "Disability Support Principles", "Safe Practice"],
    requirements: ["[Requirements to be confirmed]"],
    trainingMode: "In-person",
    fees: "KES 65,000",
    faqs: [],
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}
