"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pt-28 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-sm uppercase tracking-[0.5em] text-muted">Creative Developer</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">Sajid Mahmud</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Full-stack developer crafting beautiful, functional, user-centered digital experiences from Aftabnagar, Dhaka.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted">
            <span>Aftabnagar, Dhaka, Bangladesh</span>
            <span className="h-1 w-1 rounded-full bg-muted" />
            <a href="mailto:sajid.m.mahmud.1@gmail.com" className="underline-offset-4 hover:underline">
              sajid.m.mahmud.1@gmail.com
            </a>
          </div>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center rounded-full border border-foreground px-6 py-3 text-sm font-semibold"
          >
            Explore My Work
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1"
        >
          <div className="mx-auto h-72 w-72 rounded-[32px] border border-slate-200 bg-white shadow-card" />
          <p className="mt-4 text-center text-sm text-muted">
            Placeholder portrait — swap with your favorite shot later.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
