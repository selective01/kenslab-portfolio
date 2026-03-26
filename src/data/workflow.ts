// workflow.ts — your 5-step development process

import type { WorkflowStep } from "@/types";

export const workflowSteps: WorkflowStep[] = [
  {
    number:      1,
    title:       "Discovery & Planning",
    description: "Requirements analysis, goal definition, roadmap and technical specifications development.",
  },
  {
    number:      2,
    title:       "Architecture & Setup",
    description: "Architecture, database, and API design. Environment, repository, and CI/CD setup.",
  },
  {
    number:      3,
    title:       "Development",
    description: "Backend and frontend implementation, integration with external services, business logic.",
  },
  {
    number:      4,
    title:       "Testing & Optimization",
    description: "Testing, bug fixing, performance and database optimization.",
  },
  {
    number:      5,
    title:       "Deployment",
    description: "Setting up a server, domain, SSL, project deployment, and stability testing.",
  },
];
