// ThemeToggle.tsx — the dark/light mode switch button in the Navbar
// useTheme() comes from next-themes and gives us the current theme + a setter
// "use client" is required because this component uses browser state (useState, useTheme)

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // lucide-react gives us clean SVG icons

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // mounted prevents a "hydration mismatch" — a Next.js quirk where
  // the server renders before it knows the user's theme preference.
  // We just don't render the button until the client is ready.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark/light mode"
      className="
        w-9 h-9 flex items-center justify-center
        border border-brand-border rounded-[4px]
        text-brand-gray-light
        hover:border-brand-green hover:text-brand-green-light
        transition-all duration-200
      "
    >
      {/* Show Sun icon in dark mode (click to go light), Moon icon in light mode */}
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
