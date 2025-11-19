"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.35 }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
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
        <nav className="hidden items-center gap-2 md:flex text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${activeSection === item.href ? "nav-link-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full border border-white/20 px-3 py-1 text-sm font-medium text-foreground md:hidden"
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-white/10 bg-background/90 px-6 py-4 backdrop-blur">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`nav-link ${activeSection === item.href ? "nav-link-active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
