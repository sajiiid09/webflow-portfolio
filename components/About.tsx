"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";

export function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted">About Me</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Passionate about crafting beautiful, functional, user-centered experiences.
          </h2>
          <p className="mt-6 text-lg text-muted">
            I’m a full-stack developer who graduated from BRAC University in Computer Science. I love blending clean UI with solid
            engineering, and when I’m not coding I’m exploring new tech, contributing to open source, or sharing knowledge with the
            developer community.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-3xl font-semibold text-gradient-copper">{stat.value}</p>
                <p className="text-sm uppercase tracking-[0.3em] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
