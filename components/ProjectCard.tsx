"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { projects } from "@/data/content";

type Project = (typeof projects)[number];

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative flex flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/60 hover:shadow-[0_0_30px_rgba(251,146,60,0.35)] section-fade-in"
    >
      <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-white/5">
        <Image
          src={project.image}
          alt={project.imageAlt ?? `${project.title} preview`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={project.title === "BDTextileHub: E-Commerce Website"}
        />
      </div>
      <h3 className="text-2xl font-semibold text-slate-50">{project.title}</h3>
      <div className="flex flex-wrap gap-2 text-xs text-slate-300">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full border border-white/20 px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-slate-200">{project.description}</p>
      <div className="mt-4 flex gap-3">
        <a
          href={project.liveUrl}
          className="flex-1 rounded-full border border-orange-300 bg-accent px-4 py-2 text-center text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(251,146,60,0.45)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          View project
        </a>
        <a
          href={project.codeUrl}
          className="flex-1 rounded-full border border-white/20 px-4 py-2 text-center text-sm font-semibold text-slate-200 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          View code
        </a>
      </div>
    </motion.article>
  );
}
