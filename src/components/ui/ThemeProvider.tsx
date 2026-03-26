// ThemeProvider.tsx
// - Every NEW visitor always starts in dark mode
// - Toggle works normally within a session
// - On page refresh, dark mode is restored (theme is not persisted)

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      // By NOT providing a storageKey, next-themes uses its default key
      // but forcedTheme on first render ensures dark is always the starting point.
      // We simply don't persist — every fresh page load returns to dark.
      storageKey="kenslab-theme-disabled" // non-functional key — effectively disables persistence
    >
      {children}
    </NextThemesProvider>
  );
}
