import { projects } from "@/data/content";
import { ProjectCard } from "./ProjectCard";
import { SectionLabel } from "./SectionLabel";

export function Projects() {
  return (
    <section id="projects" className="bg-transparent py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-slate-200">
        <SectionLabel eyebrow="Projects" title="Selected work" />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
