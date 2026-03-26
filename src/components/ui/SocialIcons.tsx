// SocialIcons.tsx — social icons with tooltips, real links, Instagram replacing Twitter

"use client";

import { Linkedin, Github, Mail, MessageCircle, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

type SocialLink = {
  label: string;
  href:  string;
  icon:  React.ElementType;
  tooltip: string;
};

const socialLinks: SocialLink[] = [
  {
    label:   "LinkedIn",
    href:    "https://www.linkedin.com/in/kenechukwu-obaji-72b106269",
    icon:    Linkedin,
    tooltip: "Connect on LinkedIn",
  },
  {
    label:   "GitHub",
    href:    "https://github.com/selective01", // 👈 Update with your real GitHub
    icon:    Github,
    tooltip: "View GitHub Profile",
  },
  {
    label:   "Instagram",
    href:    "https://www.instagram.com/kceecollect01?igsh=NGM4emN3ajg1cWZj",
    icon:    Instagram,
    tooltip: "Follow on Instagram",
  },
  {
    label:   "WhatsApp",
    href:    "https://wa.me/2349137145633?text=Hi%20KenLabs%2C%20I%20want%20to%20build%20a%20project",
    icon:    MessageCircle,
    tooltip: "Chat on WhatsApp",
  },
  {
    label:   "Email",
    href:    "mailto:kceeemmanuel01@gmail.com",
    icon:    Mail,
    tooltip: "kceeemmanuel01@gmail.com",
  },
];

type SocialIconsProps = {
  className?: string;
  size?:      "sm" | "md";
  showTooltip?: boolean;
};

export default function SocialIcons({
  className,
  size         = "md",
  showTooltip  = true,
}: SocialIconsProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socialLinks.map(({ label, href, icon: Icon, tooltip }) => (
        <div key={label} className="relative group">

          {/* Icon button */}
          <a
            href={href}
            target={href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "flex items-center justify-center rounded-[4px]",
              "border border-brand-border",
              "text-brand-gray-light",
              "hover:border-brand-green-light hover:text-brand-green-light",
              "hover:scale-110 hover:shadow-[0_0_12px_rgba(232,103,26,0.3)]",
              "transition-all duration-200",
              size === "sm" ? "w-8 h-8" : "w-10 h-10"
            )}
          >
            <Icon size={size === "sm" ? 14 : 16} />
          </a>

          {/* Tooltip — shows on hover */}
          {showTooltip && (
            <div className="
              absolute bottom-full left-1/2 -translate-x-1/2 mb-2
              px-3 py-1.5 rounded-[3px]
              bg-brand-surface2 border border-brand-border
              text-[0.68rem] text-brand-gray-light whitespace-nowrap
              opacity-0 group-hover:opacity-100
              translate-y-1 group-hover:translate-y-0
              transition-all duration-200 pointer-events-none
              z-50
            ">
              {tooltip}
              {/* Little arrow pointing down */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-brand-border" />
            </div>
          )}

        </div>
      ))}
    </div>
  );
}
