// skills.ts — all your skill data in one place
// To add/remove a skill, edit this file only — the UI updates automatically

import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiDigitalocean,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiPostman,
  SiRedis,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi, TbBrandGithubCopilot } from "react-icons/tb";
import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST API", icon: TbApi },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Nginx", icon: SiNginx },
      { name: "Docker", icon: FaDocker },
      { name: "DigitalOcean", icon: SiDigitalocean },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "CI/CD", icon: TbBrandGithubCopilot },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: FaFigma },
    ],
  },
];
