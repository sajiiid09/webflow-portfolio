"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { FiDownloadCloud, FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { SectionLabel } from "./SectionLabel";

const FORM_ENDPOINT = "https://formspree.io/f/manvqayj";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      setStatus("loading");
      setMessage("");
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks for reaching out! I’ll get back to you shortly.");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong. Please try again later or email me directly.");
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-t from-white/10 via-transparent to-transparent py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-slate-200">
        <SectionLabel eyebrow="Contact" title="Let’s build something" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-surface grid gap-12 rounded-3xl p-8 md:grid-cols-2 section-fade-in"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Let’s Work Together</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-50 md:text-4xl">
              I’m always interested in new opportunities and exciting projects.
            </h2>
            <p className="mt-6 text-slate-200">
              Whether you have a question or just want to say hi, I’ll try my best to get back to you.
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <p>
                Email:{" "}
                <a
                  className="text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  href="mailto:sajid.m.mahmud.1@gmail.com"
                >
                  sajid.m.mahmud.1@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  className="text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  href="tel:+8801753289149"
                >
                  +880 1753 289149
                </a>
              </p>
              <p>Location: H-39, Rd-1, Sec-2, Block-F, Aftabnagar, Dhaka</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-50">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-50">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-50">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  placeholder="Tell me about your project"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                disabled={status === "loading"}
                className="w-full rounded-full border border-orange-300 bg-accent px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(251,146,60,0.45)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>
              {message && (
                <p className={`text-sm ${status === "error" ? "text-red-500" : "text-green-400"}`} aria-live="polite">
                  {message}
                </p>
              )}
            </form>
            <div className="flex flex-wrap gap-3 md:flex-row md:flex-nowrap">
              <a
                href="/cv/Sajid_Mahmud_CV.pdf"
                download
                className="glass-button focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label="Download CV"
              >
                <FiDownloadCloud />
                <span>Download CV</span>
              </a>
              <a
                href="https://github.com/sajiiid09"
                target="_blank"
                rel="noreferrer"
                className="glass-button focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label="Open GitHub profile"
              >
                <FiGithub />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sajid-mahmud-159513113"
                target="_blank"
                rel="noreferrer"
                className="glass-button focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label="Open LinkedIn profile"
              >
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://facebook.com/damnbuay"
                target="_blank"
                rel="noreferrer"
                className="glass-button focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label="Open Facebook profile"
              >
                <FiFacebook />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
