"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "About Me",  href: "/#about"    },
  { label: "Skills",    href: "/#skills"   },
  { label: "Portfolio", href: "/#projects" },
  { label: "Services",  href: "/#services" },
  { label: "Blog",      href: "/blog"      },
  { label: "Contact",   href: "/#contact"  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="
      fixed top-0 left-0 right-0 z-50
      border-b border-brand-border
      bg-white/85 dark:bg-brand-bg/85
      backdrop-blur-md
    ">
      <nav className="section-container flex items-center justify-between h-16">

        <Link href="/" className="font-akshar text-lg font-semibold tracking-wide text-gray-900 dark:text-white">
          Ken<span className="text-brand-green-light">&apos;s</span>Lab
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-[0.78rem] uppercase tracking-widest transition-colors duration-200",
                  pathname === link.href
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-500 dark:text-brand-gray-light hover:text-gray-900 dark:hover:text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/#projects"
            className="
              hidden md:inline-flex items-center
              text-[0.78rem] uppercase tracking-widest
              border border-brand-green text-brand-green-light
              px-4 py-2 rounded-[4px]
              hover:bg-brand-green hover:text-white
              transition-all duration-200
            "
          >
            View Projects
          </Link>
        </div>

      </nav>
    </header>
  );
}