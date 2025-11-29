"use client";

import { motion } from "framer-motion";
import { coreSkills, technologies } from "@/data/content";
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
    <section id="skills" className="bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Core Skills</p>
          
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {coreSkills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex items-center justify-between text-sm font-medium mb-3">
                  <span className="text-slate-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-accent font-mono text-xs">
                    {skill.proficiency}%
                  </span>
                </div>

                {/* THE FIX IS BELOW: WRAPPING var(--accent) in hsl() */}
                <div className="flex gap-1.5 h-3">
                  {Array.from({ length: 10 }).map((_, i) => {
                    const isActive = i < Math.round(skill.proficiency / 10);
                    
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ 
                          opacity: 1, 
                          scaleY: 1,
                          // FIX 1: Use 'hsl(var(--accent))' instead of just 'var(--accent)'
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
                            // FIX 2: Update shadow class to use hsl() as well
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

        <div className="mt-24 overflow-hidden border-y border-white/10 bg-white/5/ bg-opacity-5 py-8">
          <div className="relative flex w-full overflow-hidden">
            {/* First Track */}
            <div className="flex min-w-full shrink-0 animate-marquee-infinite items-center justify-around gap-8 pr-8">
              {technologies.map((tech, index) => {
                const Icon = iconMap[tech.icon];
                return (
                  <div
                    key={`${tech.label}-${index}`}
                    className="flex items-center gap-2 text-slate-400 transition-colors duration-300 hover:text-accent"
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
              className="flex min-w-full shrink-0 animate-marquee-infinite items-center justify-around gap-8 pr-8"
            >
              {technologies.map((tech, index) => {
                const Icon = iconMap[tech.icon];
                return (
                  <div
                    key={`${tech.label}-${index}-duplicate`}
                    className="flex items-center gap-2 text-slate-400 transition-colors duration-300 hover:text-accent"
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