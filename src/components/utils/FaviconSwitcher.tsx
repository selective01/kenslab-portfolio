"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

function setOrCreateLink(rel: string, href: string) {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }

  link.href = href;
}

export default function FaviconSwitcher() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    const stamp = `v=${Date.now()}`;

    const faviconHref =
      resolvedTheme === "dark"
        ? `/favicon.ico?${stamp}`
        : `/light-favicon.ico?${stamp}`;

    const appleHref =
      resolvedTheme === "dark"
        ? `/apple-touch-icon.png?${stamp}`
        : `/light-apple-touch-icon.png?${stamp}`;

    setOrCreateLink("icon", faviconHref);
    setOrCreateLink("shortcut icon", faviconHref);
    setOrCreateLink("apple-touch-icon", appleHref);
  }, [resolvedTheme]);

  return null;
}