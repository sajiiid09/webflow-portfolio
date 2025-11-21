"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const SPLINE_SCENE_URL = "https://prod.spline.design/dpBCmXsVUJ-gT49T/scene.splinecode";

export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight;
      const progress = Math.min(window.scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = scrollProgress * 18;
  const rotate = scrollProgress * 3;
  const scale = 1 - scrollProgress * 0.03;

  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pt-28 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-sm uppercase tracking-[0.5em] text-slate-400">Web Application Developer</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-gradient-copper md:text-6xl">Sajid Mahmud</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Full-stack developer crafting beautiful, functional, user-centered digital experiences from Aftabnagar, Dhaka.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span>Aftabnagar, Dhaka, Bangladesh</span>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <a href="mailto:sajid.m.mahmud.1@gmail.com" className="text-white underline-offset-4 hover:underline">
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
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale }}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{ translateY, rotateX: rotate, rotateY: rotate }}
            className="spline-hero-wrapper mx-auto max-w-xl"
          >
            <Spline scene={SPLINE_SCENE_URL} />
          </motion.div>
          <p className="mt-4 text-center text-sm text-slate-500">Hi! Buddy.</p>
        </div>
      </div>
    </section>
  );
}
