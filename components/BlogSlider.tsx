"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/content";

export function BlogSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = sliderRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.9 * (direction === "left" ? -1 : 1);
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="blog" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted">Tech Blogs</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Latest writing & research notes.</h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm"
              aria-label="Previous blog post"
            >
              Prev
            </button>
            <button
              onClick={() => scroll("right")}
              className="rounded-full border border-foreground px-4 py-2 text-sm font-semibold"
              aria-label="Next blog post"
            >
              Next
            </button>
          </div>
        </div>
        <div
          ref={sliderRef}
          className="mt-10 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              className="min-w-[280px] flex-1 snap-center rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:min-w-[360px]"
              whileHover={{ y: -6, boxShadow: "0 20px 60px -30px rgba(15, 23, 42, 0.3)" }}
            >
              <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 90vw, 360px" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{post.title}</h3>
              <p className="mt-3 text-sm text-muted">{post.excerpt}</p>
              <a href={post.url} className="mt-6 inline-flex text-sm font-medium underline-offset-4 hover:underline">
                Read More
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
