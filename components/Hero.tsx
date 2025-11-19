"use client";

import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const SPLINE_SCENE_URL = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pt-28 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-sm uppercase tracking-[0.5em] text-muted">Creative Developer</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-gradient-copper md:text-6xl">Sajid Mahmud</h1>
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
            className="mt-10 inline-flex items-center rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent"
          >
            Explore My Work
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex-1"
        >
          <div className="relative mx-auto h-[420px] w-full max-w-lg rounded-[32px] border border-white/40 bg-white/30 p-2 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.6)] backdrop-blur">
            <div className="h-full w-full overflow-hidden rounded-[28px] bg-gradient-to-b from-white/70 to-slate-100/80">
              <Spline scene={SPLINE_SCENE_URL} />
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted">A living, animated canvas powered by Spline.</p>
        </motion.div>
      </div>
    </section>
  );
}
