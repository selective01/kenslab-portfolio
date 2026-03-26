// About.tsx — About Me section
// Contains: bio text, specialties list, photo placeholder
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding bg-brand-bg dark:bg-brand-bg">
      <div className="section-container">

        {/* Section label */}
        <p className="font-akshar text-2xl md:text-3xl font-semibold uppercase tracking-wider text-brand-green-light mb-10">
          About Me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Bio text — spans 2 columns */}
          <div className="md:col-span-2">
            <p className="text-[0.92rem] text-brand-gray-light leading-[1.9] mb-4">
              Full-Stack Web Developer with 2+ years of experience specializing in
              building scalable, production-ready applications. I work across the
              entire stack — from clean, responsive frontends to robust backend
              systems and cloud infrastructure.
            </p>
            <p className="text-[0.92rem] text-brand-gray-light leading-[1.9]">
              My focus is on clean architecture, performance, and long-term
              maintainability. I take pride in writing code that not only works
              today but scales well into the future.
            </p>

            {/* Specialties grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {[
                "SaaS platform development",
                "API design & integrations",
                "E-commerce solutions",
                "Cloud infrastructure",
                "Performance optimization",
                "Legacy system refactoring",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[0.82rem] text-brand-gray-light">
                  <span className="text-brand-green-light text-lg leading-none">•</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="w-full aspect-[3/4] relative">
            <Image
              src="/images/about-photo.webp"
              alt="About KenLabs"
              fill
              className="object-cover rounded-[4px] border border-brand-border"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
