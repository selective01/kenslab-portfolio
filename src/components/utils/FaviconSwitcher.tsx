"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

function setHeadLink(rel: string, href: string, type?: string) {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }

  link.href = href;

  if (type) {
    link.type = type;
  }
}

export default function FaviconSwitcher() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const isDark = resolvedTheme !== "light";

    setHeadLink("icon", isDark ? "/favicon.ico" : "/light-favicon.ico", "image/x-icon");
    setHeadLink(
      "apple-touch-icon",
      isDark ? "/apple-touch-icon.png" : "/light-apple-touch-icon.png",
      "image/png"
    );
  }, [resolvedTheme]);

  return null;
}
