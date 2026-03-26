// ServiceCard.tsx — glowing card style inspired by Image 4 (Wilkerson)
// Featured card glows orange, others glow subtly on hover

import { cn } from "@/lib/utils";
import type { Service } from "@/types";

// Icons for each service type
const serviceIcons: Record<string, string> = {
  "Custom Website or Web Application": "⚡",
  "Modernizing Existing Projects":     "🔧",
  "Bug Fix & Support":                 "🛡️",
};

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className={cn(
      "relative flex flex-col border rounded-[4px] p-7",
      "transition-all duration-300",
      // Glowing hover effect
      service.featured
        ? [
            "bg-brand-surface2 border-brand-green",
            "shadow-[0_0_30px_rgba(232,103,26,0.15)]",
            "hover:shadow-[0_0_40px_rgba(232,103,26,0.3)]",
          ]
        : [
            "bg-brand-bg border-brand-border",
            "hover:border-brand-green",
            "hover:shadow-[0_0_25px_rgba(232,103,26,0.1)]",
          ]
    )}>

      {/* Icon */}
      <div className={cn(
        "w-12 h-12 rounded-[4px] flex items-center justify-center text-2xl mb-5",
        "border",
        service.featured
          ? "bg-brand-green/20 border-brand-green"
          : "bg-brand-surface2 border-brand-border"
      )}>
        {serviceIcons[service.title] ?? "💻"}
      </div>

      {/* Title & subtitle */}
      <p className="text-sm font-semibold text-brand-white mb-1">{service.title}</p>
      <p className="text-xs text-brand-gray mb-5">{service.subtitle}</p>

      {/* Timeline */}
      <p className={cn(
        "font-akshar text-3xl font-bold mb-4 pb-4 border-b",
        service.featured ? "border-brand-green/30" : "border-brand-border",
        service.featured ? "text-brand-green-light" : "text-brand-white"
      )}>
        {service.timeline}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-2.5 flex-1">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-xs text-brand-gray-light">
            <span className="text-brand-green-light text-base leading-none">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className={cn(
          "mt-7 py-2.5 text-center rounded-[4px] text-xs tracking-widest uppercase transition-all duration-200 border",
          service.featured
            ? "bg-brand-green border-brand-green text-white hover:bg-brand-green-light hover:shadow-[0_0_15px_rgba(232,103,26,0.4)]"
            : "bg-transparent border-brand-border text-brand-white hover:border-brand-green-light hover:text-brand-green-light"
        )}
      >
        {service.ctaLabel}
      </a>
    </div>
  );
}
