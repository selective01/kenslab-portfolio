import type { ComponentType } from "react";

type SkillTagProps = {
  name: string;
  icon?: ComponentType<{ className?: string }>;
};

export default function SkillTag({ name, icon: Icon }: SkillTagProps) {
  return (
    <div
      className="
        min-h-[56px] w-full
        flex items-center gap-3 px-4 py-3
        bg-brand-surface2 border border-brand-border rounded-[3px]
        text-sm text-brand-gray-light
        transition-all duration-200 cursor-default
        hover:border-brand-green
      "
    >
      {Icon && (
        <span className="shrink-0 text-brand-green-light">
          <Icon className="text-lg" />
        </span>
      )}

      <span className="leading-tight break-words">
        {name}
      </span>
    </div>
  );
}