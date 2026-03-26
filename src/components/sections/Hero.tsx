"use client";

import Image           from "next/image";
import Marquee         from "@/components/ui/Marquee";
import Button          from "@/components/ui/Button";
import CVDownload      from "@/components/ui/CVDownload";
import TypingAnimation from "@/components/ui/TypingAnimation";
import SocialIcons     from "@/components/ui/SocialIcons";
import StatsRow        from "@/components/ui/StatsRow";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 bg-brand-bg dark:bg-brand-bg">

      <div className="section-container flex-1 flex flex-col justify-center py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-12">

          {/* ── LEFT ── */}
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.15em] text-brand-gray mb-4">
              Available for Freelance
            </p>

            {/*
              h1 has a fixed height = exactly 2 lines at the current font size.
              Both lines are always rendered as block spans so the height
              never changes regardless of how long the typed word is.
            */}
            <div
              className="font-akshar font-bold uppercase tracking-tight mb-6"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 1.05 }}
            >
              <div style={{ minHeight: "1.1em" }}>
                Full-Stack
              </div>

              <div style={{ minHeight: "1.1em" }}>
                <TypingAnimation />
              </div>
            </div>
            {/* Coding image — bottom left */}
            <div className="relative w-[320px] h-[210px] rounded-[4px] overflow-hidden border border-brand-border mb-8">
              <Image
                src="/images/hero-photo.webp"
                alt="Coding setup"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-brand-bg/20" />
            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-4 mb-6">
              <Button href="/#projects" variant="primary">Start a Project</Button>
              <CVDownload />
            </div>

            {/* Social icons */}
            <SocialIcons />
          </div>

          {/* ── RIGHT ── */}
          <div className="flex flex-col items-end gap-6 justify-between h-full">

            {/* Photo placeholder — top right */}
            <div className="relative self-end">
              <Image
                src="/images/hero-portrait.webp"
                alt="KenLabs Portrait"
                width={220}
                height={280}
                className="rounded-[4px] border border-brand-border object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[4px]" />
            </div>

            {/* Description + big name — bottom right */}
            <div className="text-right">
              <p className="text-[0.78rem] uppercase tracking-[0.08em] text-brand-gray-light leading-[1.8] max-w-[260px] mb-4 ml-auto">
                I build scalable web applications,<br />
                SaaS platforms and high-performance<br />
                websites.
              </p>
              <h2 className="font-akshar font-bold uppercase leading-[1] tracking-tight text-[clamp(2rem,5vw,4rem)]">
                Kenechukwu<br />Emmanuel<br />Obaji
              </h2>
            </div>

          </div>

        </div>

        {/* ── STATS ROW ── */}
        <StatsRow />

      </div>

      {/* ── MARQUEE ── */}
      <Marquee />

    </section>
  );
}
