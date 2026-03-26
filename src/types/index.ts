// index.ts — TypeScript type definitions
// A "type" describes the shape/structure of an object
// It's like a contract: "every Project MUST have these fields"
// TypeScript will warn you if you forget a field or use the wrong type

// ─── PROJECT ──────────────────────────────────────────────────────────────
export type Project = {
  id:          string;       // Unique ID e.g. "saas-booking"
  title:       string;       // e.g. "SaaS Booking Platform"
  description: string;       // Short description shown on the card
  image:       string;       // Path to image e.g. "/images/projects/project-1.png"
  tags:        string[];     // Tech used e.g. ["React", "Node.js", "MySQL"]
  demoUrl?:    string;       // Optional — link to live site
  caseStudy?:  boolean;      // Optional — if true, "View Case Study" link shows
};

// ─── CASE STUDY ───────────────────────────────────────────────────────────
export type CaseStudyData = {
  title:       string;
  description: string;
  image:       string;
  client:      string;
  deadline:    string;
  role:        string;
  demoUrl:     string;
  problem:     string;
  solution:    string;
  results:     string[];     // List of result bullet points
  architecture: {
    frontend:      string;
    backend:       string;
    database:      string;
    infrastructure: string;
  };
  techStack: {
    category: string;        // e.g. "Frontend"
    items:    string[];      // e.g. ["React", "Tailwind"]
  }[];
};

// ─── SKILL ────────────────────────────────────────────────────────────────
export type SkillItem = {
  name: string;              // e.g. "React"
  icon?: React.ComponentType<{ className?: string }>;
};

export type SkillCategory = {
  category: string;          // e.g. "Frontend"
  skills:   SkillItem[];     // e.g. [{ name: "React", icon: FaReact }]
};

// ─── SERVICE ──────────────────────────────────────────────────────────────
export type Service = {
  title:       string;
  subtitle:    string;
  timeline:    string;       // e.g. "From 1 Week"
  features:    string[];
  featured?:   boolean;      // If true, this card gets the green highlight
  ctaLabel:    string;       // Button text e.g. "Start Project"
};

// ─── WORKFLOW STEP ────────────────────────────────────────────────────────
export type WorkflowStep = {
  number:      number;
  title:       string;
  description: string;
};

// ─── BLOG POST ────────────────────────────────────────────────────────────
export type BlogPost = {
  slug:        string;       // URL-friendly title e.g. "building-a-saas-with-nodejs"
  title:       string;
  date:        string;       // e.g. "2026-03-15"
  excerpt:     string;       // Short summary shown on blog listing page
  tags:        string[];
  readTime:    string;       // e.g. "5 min read"
  content?:    string;       // Full markdown content (loaded separately)
};
