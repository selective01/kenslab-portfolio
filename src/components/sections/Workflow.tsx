// Workflow.tsx — your 5-step development process section
// Reads data from src/data/workflow.ts and renders a WorkflowStep for each

import SectionLabel from "@/components/ui/SectionLabel";
import WorkflowStep from "@/components/ui/WorkflowStep";
import { workflowSteps } from "@/data/workflow";

export default function Workflow() {
  return (
    <section id="workflow" className="section-padding bg-brand-bg dark:bg-brand-bg">
      <div className="section-container">

        <SectionLabel subtitle="How I bring projects to life">
          Workflow
        </SectionLabel>

        {/* Steps list */}
        <div className="flex flex-col">
          {workflowSteps.map((step, index) => (
            <WorkflowStep
              key={step.number}
              step={step}
              isLast={index === workflowSteps.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
