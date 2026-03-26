// CaseStudy.tsx — full SkillFund case study

import Image        from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { caseStudy } from "@/data/projects";

const keyFeatures = [
  "Investor ↔ Creator matching system",
  "Escrow wallet with milestone-based payouts",
  "KYC & compliance layer (ID + selfie + BVN)",
  "Voice verification with call recording",
  "Guarantor system for high-value funding",
  "Real-time notifications via Socket.io",
  "Admin moderation dashboard",
  "Multi-payment: Paystack + Stripe + Crypto",
];

export default function CaseStudy() {
  return (
    <section id="casestudy" className="section-padding bg-brand-surface dark:bg-brand-surface">
      <div className="section-container">

        <SectionLabel subtitle="Featured project deep-dive">Case Study</SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ── LEFT / MAIN ── */}
          <div className="md:col-span-2 flex flex-col gap-8">

            {/* Project thumbnail */}
            <div className="relative w-full h-[260px] rounded-[4px] overflow-hidden border border-brand-border">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-bg/30" />
            </div>

            {/* Title */}
            <div>
              <h2 className="font-akshar text-2xl font-bold uppercase tracking-wide mb-2">
                {caseStudy.title}
              </h2>
              <p className="text-sm text-brand-gray-light leading-relaxed">
                {caseStudy.description}
              </p>
            </div>

            {/* Review card */}
            <div className="bg-brand-bg border border-brand-border rounded-[4px] p-6">
              <p className="font-akshar text-sm font-semibold uppercase tracking-wider mb-5">Review</p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: "Client",   value: caseStudy.client   },
                  { label: "Timeline", value: caseStudy.deadline  },
                  { label: "Role",     value: caseStudy.role      },
                  { label: "Demo",     value: "Live Platform →", isLink: true },
                ].map(({ label, value, isLink }) => (
                  <div key={label}>
                    <p className="text-[0.68rem] uppercase tracking-[0.1em] text-brand-gray mb-1">{label}</p>
                    {isLink ? (
                      <a href={caseStudy.demoUrl} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-brand-green-light underline underline-offset-4 hover:opacity-80 transition-opacity">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-brand-white font-medium">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Problem */}
            <div>
              <p className="font-akshar text-sm font-bold uppercase tracking-widest text-brand-red mb-3">Problem</p>
              <p className="text-sm text-brand-gray-light leading-[1.9]">{caseStudy.problem}</p>
            </div>

            {/* Solution */}
            <div>
              <p className="font-akshar text-sm font-bold uppercase tracking-widest text-brand-green-light mb-3">Solution</p>
              <p className="text-sm text-brand-gray-light leading-[1.9]">{caseStudy.solution}</p>
            </div>

            {/* Architecture */}
            <div>
              <p className="font-akshar text-sm font-bold uppercase tracking-widest text-brand-white mb-4">Architecture</p>
              <div className="bg-brand-bg border border-brand-border rounded-[4px] p-6 grid grid-cols-2 gap-5">
                {Object.entries(caseStudy.architecture).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-[0.68rem] uppercase tracking-[0.1em] text-brand-gray mb-1 capitalize">{key}</p>
                    <p className="text-sm text-brand-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <p className="font-akshar text-sm font-bold uppercase tracking-widest text-brand-white mb-4">Key Features</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {keyFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 bg-brand-bg border border-brand-border rounded-[3px] px-4 py-3">
                    <span className="text-brand-green-light mt-0.5 flex-shrink-0">◆</span>
                    <span className="text-sm text-brand-gray-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <p className="font-akshar text-sm font-bold uppercase tracking-widest text-brand-white mb-4">Results</p>
              <div className="flex flex-col gap-2">
                {caseStudy.results.map((result) => (
                  <div key={result} className="bg-brand-bg border border-brand-border border-l-[3px] border-l-brand-green-light rounded-[3px] px-4 py-3 text-sm text-brand-gray-light">
                    {result}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="flex flex-col gap-5">

            {/* Tech stack */}
            <div className="bg-brand-bg border border-brand-border rounded-[4px] p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.12em] text-brand-gray mb-4">Tech Stack</p>
              {caseStudy.techStack.map(({ category, items }) => (
                <div key={category} className="mb-4 last:mb-0">
                  <p className="text-[0.65rem] uppercase tracking-[0.1em] text-brand-gray mb-2">{category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} className="bg-brand-surface2 border border-brand-border rounded-[3px] px-2 py-1 text-xs text-brand-gray-light">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Live link */}
            <a
              href={caseStudy.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 text-center bg-brand-green border border-brand-green text-white text-xs uppercase tracking-widest rounded-[4px] hover:bg-brand-green-light hover:shadow-[0_0_20px_rgba(232,103,26,0.3)] transition-all duration-200"
            >
              View Live Project →
            </a>

            {/* Discuss CTA */}
            <div className="bg-brand-bg border border-brand-border rounded-[4px] p-5 text-center">
              <h4 className="font-akshar text-base font-bold uppercase leading-snug mb-2">
                Want a similar project?
              </h4>
              <p className="text-xs text-brand-gray mb-5">
                Let&apos;s discuss your idea and build something great.
              </p>
              <a href="#contact"
                className="block w-full py-2.5 text-center border border-brand-border text-brand-white text-xs uppercase tracking-widest rounded-[4px] hover:border-brand-green-light hover:text-brand-green-light transition-all duration-200">
                Discuss
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
