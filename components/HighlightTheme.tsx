"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HighlightTheme() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const existingLinks = document.querySelectorAll(
      'link[href*="highlight.js"]'
    );
    existingLinks.forEach((link) => link.remove());

    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const isDark = currentTheme === "dark";
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = isDark
      ? "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
      : "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css";
    document.head.appendChild(link);

    return () => {
      link.remove();
    };
  }, [theme, resolvedTheme, mounted]);

  return null;
}
