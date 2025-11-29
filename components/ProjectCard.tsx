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
      whileHover={{ y: -6, scale: 1.01, boxShadow: "0 30px 80px -40px rgba(0, 0, 0, 0.7)" }}
      className="glass-surface glass-card flex flex-col rounded-3xl p-6"
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
      <h3 className="mt-6 text-2xl font-semibold text-slate-50">{project.title}</h3>
      <p className="mt-3 flex-1 text-slate-300">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/15 px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <a
          href={project.liveUrl}
          className="flex-1 rounded-full border border-accent px-4 py-2 text-center text-sm font-medium text-accent transition-transform duration-200 hover:-translate-y-0.5"
        >
          Live Demo
        </a>
        <a
          href={project.codeUrl}
          className="flex-1 rounded-full border border-white/15 px-4 py-2 text-center text-sm font-medium text-slate-300 transition-transform duration-200 hover:-translate-y-0.5"
        >
          Code
        </a>
      </div>
    </motion.article>
  );
}
