"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/content";

export function Experience() {
  return (
    <section id="experience">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Building for brands, universities, and communities.
          </h2>
        </motion.div>
        <div className="mt-12 space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-10"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{experience.role}</h3>
                  <p className="text-muted">{experience.company}</p>
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted">{experience.period}</p>
              </div>
              <p className="mt-6 text-muted">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
