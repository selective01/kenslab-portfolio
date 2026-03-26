// SkillBar.tsx — animated progress bar showing skill proficiency %
// The bar fills from 0 to the target % when it scrolls into view

"use client";

import { useEffect, useRef, useState } from "react";

type SkillBarProps = {
  name:       string;
  percentage: number;  // 0-100
};

export default function SkillBar({ name, percentage }: SkillBarProps) {
  const ref          = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay so the animation is visible
          setTimeout(() => setWidth(percentage), 200);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      {/* Label row */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-brand-gray-light">{name}</span>
        <span className="text-xs text-brand-green-light font-semibold">{percentage}%</span>
      </div>

      {/* Track */}
      <div className="w-full h-1.5 bg-brand-border rounded-full overflow-hidden">
        {/* Fill — animates from 0 to percentage */}
        <div
          className="h-full bg-brand-green-light rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
