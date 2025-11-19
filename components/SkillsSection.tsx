"use client";

import { motion } from "framer-motion";
import { coreSkills, technologies } from "@/data/content";
import {
  SiAmazonaws,
  SiDocker,
  SiMicrosoftaccess,
  SiMicrosoftexcel,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  openai: SiOpenai,
  access: SiMicrosoftaccess,
  excel: SiMicrosoftexcel,
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  python: SiPython,
  mongodb: SiMongodb,
  tailwind: SiTailwindcss,
  docker: SiDocker,
  aws: SiAmazonaws
};

export function SkillsSection() {
  return (
    <section id="skills" className="bg-transparent">
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
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-accent"
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
        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5 py-6">
          <div className="marquee-track flex w-[200%] animate-marquee items-center gap-8 whitespace-nowrap">
            {[...technologies, ...technologies].map((tech, index) => {
              const Icon = iconMap[tech.icon];
              return (
                <span
                  key={`${tech.label}-${index}`}
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-muted shadow-sm backdrop-blur"
                >
                  {Icon ? <Icon className="text-lg text-accent" aria-hidden /> : null}
                  {tech.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
