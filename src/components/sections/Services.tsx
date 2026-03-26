// Services.tsx — pricing and services section
// Reads data from src/data/services.ts

import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";
import { services, hourlyRate, hourlyTags } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-brand-surface dark:bg-brand-surface">
      <div className="section-container">

        <SectionLabel>Services</SectionLabel>

        {/* Reminder note */}
        <p className="text-sm text-brand-gray mb-8 -mt-4">
          <span className="text-brand-red font-semibold">Remember!</span>{" "}
          Typical timelines for common projects. Final price depends on scope.
        </p>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Hourly rate card — full width */}
        <div className="bg-brand-bg border border-brand-border rounded-[4px] p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Left — info */}
          <div>
            <p className="text-sm font-semibold text-brand-white mb-1">Hourly Development</p>
            <p className="text-xs text-brand-gray mb-4">
              Flexible development support. For ongoing projects or other.
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {hourlyTags.map((tag) => (
                <span key={tag} className="border border-brand-border rounded-full px-3 py-1 text-[0.7rem] text-brand-gray">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — price + CTA */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <p className="font-akshar text-4xl font-bold">
              {hourlyRate}<span className="text-lg text-brand-gray">/hr</span>
            </p>
            <a
              href="#contact"
              className="border border-brand-border text-brand-white text-xs uppercase tracking-widest px-5 py-3 rounded-[4px] hover:border-brand-green-light hover:text-brand-green-light transition-all duration-200"
            >
              Hire Hourly
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
