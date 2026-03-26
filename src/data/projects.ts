import type { Project, CaseStudyData } from "@/types";

export const projects: Project[] = [
  {
    id:          "skillfund",
    title:       "SkillFund Investment Platform",
    description: "A full-stack platform connecting creators with investors through a secure, milestone-based funding system. Built with advanced KYC verification, escrow payments, and real-time collaboration features.",
    image:       "/images/projects/skillfund.webp",
    tags:        ["React", "Node.js", "MongoDB", "Paystack", "Socket.io"],
    demoUrl:     "https://skillfund-client.vercel.app/",
    caseStudy:   true,
  },
  {
    id:          "kcee-collection",
    title:       "Kcee Collection E-Commerce",
    description: "A modern fashion e-commerce platform designed for a premium shopping experience. Features product management, secure payments, responsive UI, and a streamlined checkout system.",
    image:       "/images/projects/kcee-collection.webp",
    tags:        ["React", "Node.js", "MongoDB", "Paystack"],
    demoUrl:     "https://kcee-collection.vercel.app/",
  },
];

export const caseStudy: CaseStudyData = {
  title:       "SkillFund: Creator–Investor Platform",
  description: "Full-stack development of a scalable investment platform that connects skilled creators with investors, enabling secure funding through structured milestones and verification systems.",
  image:       "/images/projects/skillfund.webp",
  client:      "SkillFund (Startup Concept)",
  deadline:    "2 Months",
  role:        "Full-Stack / Lead Developer",
  demoUrl:     "https://skillfund-client.vercel.app/",

  problem:
    "Access to funding for skilled individuals — especially in emerging markets — is often limited by lack of trust, verification, and structured systems. Investors face high risks due to fraudulent requests, lack of accountability, and no clear tracking of fund usage. Existing platforms either don't support skill-based funding, lack proper escrow and verification systems, or are not tailored to local economic realities.",

  solution:
    "Developed a secure, end-to-end funding ecosystem with KYC verification (government ID + selfie + contact validation), escrow-based payments locked until milestone completion, structured milestone tracking with proof submission and approval, voice verification with call recording, a guarantor system for high-value funding, real-time messaging via Socket.io, and multi-payment integration with Paystack, Stripe, and crypto.",

  results: [
    "Improved investor trust with 5-layer anti-fraud system",
    "Enabled secure funding with milestone-based escrow protection",
    "Built scalable system handling real-time interactions via Socket.io",
    "Multi-payment support: Paystack + Stripe + USDT crypto",
    "Created a foundation for a global creator funding ecosystem",
  ],

  architecture: {
    frontend:       "React, Tailwind CSS, Zustand",
    backend:        "Node.js, Express, REST APIs",
    database:       "MongoDB",
    infrastructure: "Vercel (frontend), Render (backend), Cloud services",
  },

  techStack: [
    { category: "Frontend",       items: ["React", "Tailwind", "Zustand"] },
    { category: "Backend",        items: ["Node.js", "Express"] },
    { category: "Database",       items: ["MongoDB"] },
    { category: "Payments",       items: ["Paystack", "Stripe", "USDT"] },
    { category: "Real-time",      items: ["Socket.io"] },
    { category: "Infrastructure", items: ["Vercel", "Render"] },
  ],
};
