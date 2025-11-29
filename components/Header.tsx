"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const sections = ["home", "about", "skills", "experience", "projects", "blog", "contact"] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { threshold: 0.4 }
    );

    observerRef.current = observer;

    sections.forEach((sectionId) => {
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) observer.observe(sectionEl);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 navbar-glass">
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-semibold tracking-tight"
        >
          Sajid Mahmud
        </motion.a>
        <nav className="relative hidden items-center gap-2 text-sm md:flex">
          {sections.map((sectionId) => {
            const label = sectionId === "home" ? "Home" : sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={sectionId}
                href={`#${sectionId}`}
                data-section={sectionId}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            );
          })}
        </nav>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full border border-white/20 px-3 py-1 text-sm font-medium text-foreground md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-xl shadow-lg">
            {sections.map((sectionId) => {
              const label = sectionId === "home" ? "Home" : sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={sectionId}
                  href={`#${sectionId}`}
                  onClick={() => setOpen(false)}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && <motion.span layoutId="nav-pill" className="nav-pill" transition={{ type: "spring", stiffness: 350, damping: 30 }} />}
                  <span className="relative z-10">{label}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
