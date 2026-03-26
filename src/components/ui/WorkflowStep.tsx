// WorkflowStep.tsx — one numbered step in the Workflow section
// Usage: <WorkflowStep step={step} isLast={false} />

import { cn } from "@/lib/utils";
import type { WorkflowStep as WorkflowStepType } from "@/types";

type WorkflowStepProps = {
  step:   WorkflowStepType;
  isLast: boolean;           // Used to hide the bottom border on the last step
};

export default function WorkflowStep({ step, isLast }: WorkflowStepProps) {
  return (
    <div className={cn(
      "grid grid-cols-[3rem_1fr] gap-6 items-start py-7",
      !isLast && "border-b border-brand-border",
      // On hover, the step title turns green
      "group"
    )}>
      {/* Step number */}
      <span className="font-akshar text-sm font-semibold text-brand-gray pt-0.5">
        {step.number}
      </span>

      {/* Step content */}
      <div>
        <p className="font-akshar text-lg font-semibold capitalize mb-1 transition-colors duration-200 group-hover:text-brand-green-light">
          {step.title}
        </p>
        <p className="text-sm text-brand-gray leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}
