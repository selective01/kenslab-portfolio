"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Stat = { value: number; suffix: string; label: string; };

// Updated with accurate numbers from CV
const stats: Stat[] = [
  { value: 2,  suffix: "+",  label: "Years of Experience"  },
  { value: 6,  suffix: "+",  label: "Projects Shipped"     },
  { value: 3,  suffix: "",   label: "Payment Gateways"     },
  { value: 100, suffix: "%", label: "Remote Ready"         },
];

function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [go, setGo] = useState(false);
  const count = useCountUp(stat.value, 1500, go);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setGo(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center md:items-start">
      <p className="font-akshar text-4xl font-bold text-brand-white">
        <span className="text-brand-green-light">{count}</span>
        {stat.suffix}
      </p>
      <p className="text-xs text-brand-gray uppercase tracking-widest mt-1">{stat.label}</p>
    </div>
  );
}

export default function StatsRow({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-brand-border pt-8", className)}>
      {stats.map((stat) => <StatItem key={stat.label} stat={stat} />)}
    </div>
  );
}
