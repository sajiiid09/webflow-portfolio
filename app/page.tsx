import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SkillsSection } from "@/components/SkillsSection";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { BlogSlider } from "@/components/BlogSlider";
import { Contact } from "@/components/Contact";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <AuroraBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      <main className="relative z-10">
        <Header />
        <Hero />
        <About />
        <SkillsSection />
        <Experience />
        <Projects />
        <BlogSlider />
        <Contact />
        <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Sajid Mahmud. Built with Next.js, Tailwind CSS, and Framer Motion.
        </footer>
      </main>
    </div>
  );
}
