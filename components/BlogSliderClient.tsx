"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/content";
import { SectionLabel } from "./SectionLabel";

export function BlogSliderClient() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = sliderRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.9 * (direction === "left" ? -1 : 1);
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="blog" className="bg-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-slate-200">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <SectionLabel eyebrow="Blog" title="Writing & notes" />
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              aria-label="Previous blog post"
            >
              Prev
            </button>
            <button
              onClick={() => scroll("right")}
              className="rounded-full border border-orange-300 bg-accent px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(251,146,60,0.45)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              aria-label="Next blog post"
            >
              Next
            </button>
          </div>
        </div>
        <div
          ref={sliderRef}
          className="mt-10 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
          aria-label="Latest blog posts"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              className="group relative min-w-[280px] flex-1 snap-center rounded-3xl border border-white/15 bg-white/10 p-6 md:min-w-[360px] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/60 hover:shadow-[0_0_30px_rgba(251,146,60,0.35)] section-fade-in"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-white/5">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 360px"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-50">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{post.excerpt}</p>
              <div className="mt-6 flex justify-between items-center">
                <a
                  href={post.url}
                  className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-accent px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(251,146,60,0.45)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Read article
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
