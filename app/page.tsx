import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SkillsSection } from "@/components/SkillsSection";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { BlogSlider } from "@/components/BlogSlider";
import { Contact } from "@/components/Contact";
import { AuroraBackground } from "@/components/AuroraBackground";

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-foreground">
      <div className="relative isolate w-full min-h-screen overflow-hidden bg-black">
        <AuroraBackground />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-slate-950" />
        <Header />
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
      <div className="bg-slate-950/95">
        <About />
        <SkillsSection />
        <Experience />
        <Projects />
        <BlogSlider />
        <Contact />
        <footer className="border-t border-white/10 py-10 text-center text-sm text-muted">
          © {new Date().getFullYear()} Sajid Mahmud. Built with Next.js, Tailwind CSS, and Framer Motion.
        </footer>
      </div>
    </main>
  );
}
