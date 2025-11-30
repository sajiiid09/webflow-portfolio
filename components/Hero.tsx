"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SPLINE_SCENE_URL = "https://prod.spline.design/dpBCmXsVUJ-gT49T/scene.splinecode";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-white/5" />
});

export function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-[90vh] items-center overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pt-10 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity: textOpacity }}
          className="flex-1 section-fade-in"
        >
          <p className="text-sm uppercase tracking-[0.5em] text-slate-300">Web Application Developer</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-gradient-copper md:text-6xl">Sajid Mahmud</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Full-stack developer crafting beautiful, functional, user-centered digital experiences.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <span>Dhaka, Bangladesh</span>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <a
              href="mailto:sajid.m.mahmud.1@gmail.com"
              className="text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              sajid.m.mahmud.1@gmail.com
            </a>
          </div>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center rounded-full border border-orange-300 bg-accent px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(251,146,60,0.45)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Explore My Work
          </motion.a>
          <div className="scroll-indicator mt-12 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
            <span>Scroll</span>
            <motion.div
              initial={{ y: 0, opacity: 0.6 }}
              animate={{ y: [0, 6, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="h-5 w-px bg-slate-400"
            />
          </div>
        </motion.div>
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{ translateY, rotateX: rotate, rotateY: rotate, scale }}
            className="spline-hero-wrapper mx-auto max-w-xl section-fade-in"
          >
            {!isMobile ? (
              <Spline scene={SPLINE_SCENE_URL} />
            ) : (
              <div className="relative h-full w-full">
                <Image
                  src="/projects/heart.png"
                  alt="Hero Visual"
                  fill
                  priority
                  className="object-contain p-8 opacity-80"
                />
              </div>
            )}
          </motion.div>
          <p className="mt-4 text-center text-sm text-slate-500">Hi! Buddy.</p>
        </div>
      </div>
    </section>
  );
}
