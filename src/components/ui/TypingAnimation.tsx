"use client";

import { useEffect, useMemo, useState } from "react";

const words = [
  "Developer",
  "SaaS Builder",
  "API Architect",
  "React Expert",
  "Node Engineer",
];

export default function TypingAnimation() {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  const longestWord = useMemo(
    () => words.reduce((longest, word) => (word.length > longest.length ? word : longest), words[0]),
    []
  );

  useEffect(() => {
    const word = words[currentWord];

    if (!deleting && displayed.length < word.length) {
      const t = setTimeout(() => {
        setDisplayed(word.slice(0, displayed.length + 1));
      }, 80);
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length === word.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => {
        setDisplayed(word.slice(0, displayed.length - 1));
      }, 45);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
      }, 120);
      return () => clearTimeout(t);
    }
  }, [displayed, deleting, currentWord]);

  return (
    <span
      className="relative inline-block align-top whitespace-nowrap leading-[1.05]"
      aria-label={words[currentWord]}
    >
      {/* Invisible width reserver */}
      <span className="invisible">
        {longestWord}
        <span className="ml-1 inline-block w-[3px]" />
      </span>

      {/* Animated content */}
      <span className="absolute inset-0 text-brand-green-light">
        {displayed || "\u00A0"}
        <span className="ml-1 inline-block w-[3px] h-[0.9em] bg-brand-green-light align-middle animate-pulse" />
      </span>
    </span>
  );
}