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

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5 py-6 backdrop-blur-sm">
          <div className="marquee-track flex w-[200%] animate-marquee items-center gap-8 whitespace-nowrap">
            {[...technologies, ...technologies].map((tech, index) => {
              const Icon = iconMap[tech.icon];
              return (
                <span
                  key={`${tech.label}-${index}`}
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300 shadow-sm backdrop-blur transition-colors hover:bg-white/10 hover:text-white"
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