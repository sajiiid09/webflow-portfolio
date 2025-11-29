"use client";

import { motion } from "framer-motion";
import { coreSkills, technologies } from "@/data/content";
import { SectionLabel } from "./SectionLabel";
import {
  SiAmazon,
  SiDocker,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPostgresql
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  openai: SiOpenai,
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  python: SiPython,
  mongodb: SiMongodb,
  tailwind: SiTailwindcss,
  docker: SiDocker,
  aws: SiAmazon,
  php: SiPhp,
  laravel: SiLaravel,
  mysql: SiMysql,
  postgresql: SiPostgresql
};

export function SkillsSection() {
  return (
    <section id="skills" className="bg-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-slate-200">
        <SectionLabel eyebrow="Skills" title="What I work with" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-fade-in"
        >
          <div className="mt-2 grid gap-8 md:grid-cols-2">
            {coreSkills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="mb-3 flex items-center justify-between text-sm font-medium">
                  <span className="text-slate-200 transition-colors group-hover:text-white">{skill.name}</span>
                  <span className="font-mono text-xs text-accent">{skill.proficiency}%</span>
                </div>

                <div className="flex h-3 gap-1.5">
                  {Array.from({ length: 10 }).map((_, i) => {
                    const isActive = i < Math.round(skill.proficiency / 10);

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{
                          opacity: 1,
                          scaleY: 1,
                          backgroundColor: isActive ? "hsl(var(--accent))" : "rgba(255,255,255,0.05)"
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + i * 0.05,
                          type: "spring",
                          stiffness: 300
                        }}
                        className={`flex-1 rounded-[2px] transition-all duration-500 ${
                          isActive
                            ? "shadow-[0_0_10px_-2px_hsl(var(--accent))] brightness-110"
                            : "border border-white/5"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="section-fade-in mt-24 overflow-hidden border-y border-white/10 bg-white/5 bg-opacity-5 py-8">
          <div className="relative flex w-full overflow-hidden">
            {/* First Track */}
            <div className="flex min-w-full shrink-0 animate-marquee-infinite items-center justify-around gap-8 pr-8 marquee-track">
              {technologies.map((tech, index) => {
                const Icon = iconMap[tech.icon];
                return (
                  <div
                    key={`${tech.label}-${index}`}
                    className="flex items-center gap-2 text-slate-300 transition-colors duration-300 hover:text-accent"
                  >
                    {Icon ? <Icon className="text-3xl" aria-hidden /> : null}
                    <span className="text-xl font-bold">{tech.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Second Track for seamless loop */}
            <div
              aria-hidden="true"
              className="flex min-w-full shrink-0 animate-marquee-infinite items-center justify-around gap-8 pr-8 marquee-track"
            >
              {technologies.map((tech, index) => {
                const Icon = iconMap[tech.icon];
                return (
                  <div
                    key={`${tech.label}-${index}-duplicate`}
                    className="flex items-center gap-2 text-slate-300 transition-colors duration-300 hover:text-accent"
                  >
                    {Icon ? <Icon className="text-3xl" aria-hidden /> : null}
                    <span className="text-xl font-bold">{tech.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}