import { projects } from "@/data/content";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Selected Work</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-50 md:text-4xl">
            A snapshot of recent client, research, and personal projects.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
