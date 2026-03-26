// Projects.tsx — Projects grid section
// Reads project data from src/data/projects.ts and renders ProjectCard for each

import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-brand-bg dark:bg-brand-bg">
      <div className="section-container">

        <SectionLabel subtitle='Look at my "done" and "at work" projects'>
          Projects
        </SectionLabel>

        {/* 3-column grid on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
