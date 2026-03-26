// ProjectCard.tsx — one project card shown in the Projects grid
// Receives a single project object and renders the card
// Usage: <ProjectCard project={project} />

import Image from "next/image";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="
      group border border-brand-border rounded-[4px] overflow-hidden
      bg-brand-surface
      transition-all duration-200
      hover:border-brand-green hover:-translate-y-1
    ">
      {/* Project thumbnail */}
      <div className="relative w-full h-44 bg-brand-surface2 border-b border-brand-border overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          // Placeholder shown when no image is set yet
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-akshar text-lg text-brand-border uppercase tracking-widest">
              Project Image
            </span>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-5">
        <h3 className="font-akshar text-base font-semibold uppercase tracking-wide mb-1.5">
          {project.title}
        </h3>

        <p className="text-xs text-brand-gray leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.68rem] px-2 py-0.5 border border-brand-border rounded-sm text-brand-gray"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.caseStudy && (
            <a href="#casestudy" className="text-xs text-brand-gray-light underline underline-offset-4 hover:text-brand-green-light transition-colors">
              View Case Study →
            </a>
          )}
          {project.demoUrl && project.demoUrl !== "#" && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
               className="text-xs text-brand-gray-light underline underline-offset-4 hover:text-brand-green-light transition-colors">
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
