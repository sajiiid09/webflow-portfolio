"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Message sent! I’ll get back to you soon.");
    event.currentTarget.reset();
  };

  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 rounded-3xl border border-slate-200 bg-white p-8 md:grid-cols-2"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted">Let’s Work Together</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              I’m always interested in new opportunities and exciting projects.
            </h2>
            <p className="mt-6 text-muted">
              Whether you have a question or just want to say hi, I’ll try my best to get back to you.
            </p>
            <div className="mt-8 space-y-4 text-sm text-muted">
              <p>Email: <a className="underline-offset-4 hover:underline" href="mailto:sajid.m.mahmud.1@gmail.com">sajid.m.mahmud.1@gmail.com</a></p>
              <p>Phone: <a className="underline-offset-4 hover:underline" href="tel:+8801753289149">+880 1753 289149</a></p>
              <p>Location: H-39, Rd-1, Sec-2, Block-F, Aftabnagar, Dhaka</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                placeholder="Tell me about your project"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-full border border-foreground px-4 py-3 text-sm font-semibold"
            >
              Send Message
            </motion.button>
            {status && <p className="text-sm text-green-600">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
