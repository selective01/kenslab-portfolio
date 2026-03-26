import Hero      from "@/components/sections/Hero";
import About     from "@/components/sections/About";
import Skills    from "@/components/sections/Skills";
import Projects  from "@/components/sections/Projects";
import CaseStudy from "@/components/sections/CaseStudy";
import Workflow  from "@/components/sections/Workflow";
import Services  from "@/components/sections/Services";
import Contact   from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <CaseStudy />
      <div className="section-divider" />
      <Workflow />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <Contact />
    </>
  );
}