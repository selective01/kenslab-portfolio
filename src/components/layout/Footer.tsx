// Footer.tsx — updated with SocialIcons component

import Link from "next/link";
import SocialIcons from "@/components/ui/SocialIcons";

const quickLinks = [
  { label: "About Me",  href: "/#about"    },
  { label: "Skills",    href: "/#skills"   },
  { label: "Portfolio", href: "/#projects" },
  { label: "Services",  href: "/#services" },
  { label: "Blog",      href: "/blog"      },
  { label: "Contact",   href: "/#contact"  },
];

const serviceLinks = [
  { label: "Web App Development", href: "/#services" },
  { label: "SaaS Platforms",      href: "/#services" },
  { label: "API Development",     href: "/#services" },
  { label: "Bug Fix & Support",   href: "/#services" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border">
      <div className="section-container">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-14 border-b border-brand-border">

          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-akshar text-2xl font-bold uppercase tracking-tight mb-3">
              Ken&apos;sLab
            </p>
            <p className="text-xs text-brand-gray leading-relaxed max-w-[220px] mb-5">
              A full-stack developer with experience creating modern web applications,
              SaaS platforms, and MVPs for startups.
            </p>
            <SocialIcons size="sm" />
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.12em] text-brand-gray mb-5">Quick Links</p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-brand-gray-light hover:text-brand-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.12em] text-brand-gray mb-5">Services</p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-brand-gray-light hover:text-brand-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.12em] text-brand-gray mb-5">Get In Touch</p>
            <p className="text-sm text-brand-gray-light mb-5 leading-relaxed">
              Available for freelance projects and full-time opportunities.
            </p>
            <a
              href="#contact"
              className="inline-flex text-xs uppercase tracking-widest border border-brand-green text-brand-green-light px-4 py-2 rounded-[4px] hover:bg-brand-green hover:text-white transition-all duration-200"
            >
              Contact Me
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 gap-4">
          <p className="text-xs text-brand-gray">
            © {new Date().getFullYear()} Kenechukwu Emmanuel Obaji. All rights reserved.
          </p>
          <p className="font-akshar text-4xl md:text-6xl font-bold uppercase text-brand-surface2 tracking-tight select-none hover:text-brand-border transition-colors duration-300">
            BUILD. SHIP. SCALE.
          </p>
        </div>

      </div>
    </footer>
  );
}
