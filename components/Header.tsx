"use client";

import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-semibold tracking-tight"
        >
          Sajid Mahmud
        </motion.a>
        <nav className="hidden items-center gap-6 md:flex text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-sm font-medium border px-3 py-1 rounded-full"
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-muted hover:text-foreground"
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
