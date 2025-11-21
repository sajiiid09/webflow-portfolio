"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Selected Work</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-50 md:text-4xl">
            A snapshot of recent client, research, and personal projects.
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.01, boxShadow: "0 30px 80px -40px rgba(0, 0, 0, 0.7)" }}
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
                <motion.a
                  href={project.liveUrl}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 rounded-full border border-accent px-4 py-2 text-center text-sm font-medium text-accent"
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.codeUrl}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 rounded-full border border-white/15 px-4 py-2 text-center text-sm font-medium text-slate-300"
                >
                  Code
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
