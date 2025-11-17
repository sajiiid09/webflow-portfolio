"use client";

import { motion } from "framer-motion";
import { coreSkills, technologies } from "@/data/content";

export function SkillsSection() {
  return (
    <section id="skills" className="bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Core Skills</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {coreSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.proficiency}%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-100">
                  <motion.div
                    className="h-full rounded-full bg-foreground"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 py-6">
          <div className="flex w-[200%] animate-marquee gap-8 whitespace-nowrap">
            {[...technologies, ...technologies].map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="rounded-full border border-slate-300 px-6 py-2 text-sm text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
