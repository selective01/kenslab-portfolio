import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug:     "building-skillfund-escrow-system",
    title:    "How I Built a Full Escrow System with Milestone-Based Payouts",
    date:     "2026-03-01",
    excerpt:  "A deep dive into building SkillFund's escrow architecture — from fund locking to milestone verification, dispute resolution, and automated releases.",
    tags:     ["Node.js", "MongoDB", "Paystack", "Architecture"],
    readTime: "9 min read",
  },
  {
    slug:     "integrating-multiple-payment-gateways",
    title:    "Integrating Paystack, Stripe, and Crypto Payments in One App",
    date:     "2026-02-10",
    excerpt:  "What I learned building a multi-provider payment system that handles NGN, USD, and USDT in the same application without losing my mind.",
    tags:     ["Paystack", "Stripe", "NOWPayments", "Node.js"],
    readTime: "7 min read",
  },
  {
    slug:     "from-zero-to-production-nextjs",
    title:    "From Zero to Production: Deploying a Next.js + Node.js App on Vercel & Render",
    date:     "2026-01-15",
    excerpt:  "The exact steps I use to deploy a full-stack app with CI/CD, environment variables, and zero downtime.",
    tags:     ["Next.js", "Vercel", "Render", "DevOps"],
    readTime: "6 min read",
  },
];
