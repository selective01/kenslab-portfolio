// services.ts — your service offerings and pricing

import type { Service } from "@/types";

export const services: Service[] = [
  {
    title:    "Custom Website or Web Application",
    subtitle: "Creating all development without any code from you",
    timeline: "From 1 Week",
    featured: true, // 👈 This one gets the green highlight
    features: [
      "Project Planning",
      "Architecture Design",
      "Backend + Frontend",
      "Testing",
      "Deployment",
    ],
    ctaLabel: "Start Project",
  },
  {
    title:    "Modernizing Existing Projects",
    subtitle: "Reworking and adding to your previous code",
    timeline: "From 2 Weeks",
    features: [
      "Code Audit",
      "Architecture Improvement",
      "Performance Optimization",
      "Refactoring",
    ],
    ctaLabel: "Improve Project",
  },
  {
    title:    "Bug Fix & Support",
    subtitle: "Fixing bugs and improving performance",
    timeline: "From 3 Days",
    features: [
      "Finding & Fixing Bugs",
      "Server Issues",
      "Performance Optimization",
      "Code Review",
    ],
    ctaLabel: "Get Help",
  },
];

export const hourlyRate = "$20.00";

export const hourlyTags = [
  "Backend & Frontend",
  "API Integrations",
  "Performance Optimization",
  "Code Refactoring",
];
