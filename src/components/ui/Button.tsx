// Button.tsx — reusable button component used across the whole site
// Instead of repeating styling on every button, we define variants here once
// Usage: <Button variant="primary">Start a Project</Button>

"use client";

import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "outline" | "ghost"; // visual style
  size?:    "sm" | "md" | "lg";
  href?:    string;                           // if provided, renders as <a> tag
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?:    "button" | "submit" | "reset";
};

export default function Button({
  variant   = "primary",
  size      = "md",
  href,
  className,
  children,
  onClick,
  type      = "button",
}: ButtonProps) {

  // Base classes every button gets
  const base = "inline-flex items-center justify-center font-inter font-semibold tracking-widest uppercase transition-all duration-200 rounded-[4px] cursor-pointer";

  // Size variants
  const sizes = {
    sm: "text-[0.72rem] px-4 py-2",
    md: "text-[0.8rem]  px-5 py-3",
    lg: "text-[0.85rem] px-7 py-3.5",
  };

  // Visual variants — light/dark aware
  const variants = {
    // Solid white button (primary CTA)
    primary: "bg-white text-brand-bg hover:bg-gray-200 dark:bg-white dark:text-brand-bg dark:hover:bg-gray-200",
    // Border-only button
    outline: "border border-brand-border text-brand-white hover:border-brand-green-light hover:text-brand-green-light",
    // Green border button (used in navbar)
    ghost:   "border border-brand-green text-brand-green-light hover:bg-brand-green hover:text-white",
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  // If href is passed, render as an anchor tag instead of a button
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
