// utils.ts — small helper functions used across the project

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ─── cn() ─────────────────────────────────────────────────────────────────
// This is the most-used utility in the whole project.
// It combines multiple Tailwind class names safely, resolving conflicts.
//
// Example usage:
//   cn("px-4 py-2", isActive && "bg-brand-green", "text-white")
//   → "px-4 py-2 bg-brand-green text-white"  (if isActive is true)
//
// Without cn(), combining conditional classes gets messy fast.
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// ─── formatDate() ─────────────────────────────────────────────────────────
// Converts "2026-03-15" into "March 15, 2026"
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year:  "numeric",
    month: "long",
    day:   "numeric",
  });
}
