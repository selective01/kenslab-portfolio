// Skills.tsx — updated with icon-based skill cards and proficiency bars

import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";
import SkillBar from "@/components/ui/SkillBar";
import { skills } from "@/data/skills";

const topSkills = [
  { name: "React & Next.js", percentage: 90 },
  { name: "Node.js & Express", percentage: 85 },
  { name: "MySQL & MongoDB", percentage: 82 },
  { name: "AWS & DevOps", percentage: 72 },
  { name: "TypeScript", percentage: 78 },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-brand-surface dark:bg-brand-surface">
      <div className="section-container">
        <SectionLabel subtitle="Technologies I work with">Skills</SectionLabel>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)] lg:gap-16">
          <div>
            <p className="mb-6 text-xs uppercase tracking-widest text-brand-gray">All Technologies</p>

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {skills.map((category) => (
                <div key={category.category}>
                  <p className="mb-3 text-[0.76rem] uppercase tracking-[0.18em] text-brand-gray [font-family:var(--font-akshar)]">
                    {category.category}
                  </p>

                  <div className="flex flex-col gap-2.5">
                    {category.skills.map((skill) => (
                      <SkillTag key={skill.name} name={skill.name} icon={skill.icon} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs uppercase tracking-widest text-brand-gray">Proficiency</p>
            <div className="flex flex-col gap-5">
              {topSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
