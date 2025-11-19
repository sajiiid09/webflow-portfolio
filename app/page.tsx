import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SkillsSection } from "@/components/SkillsSection";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { BlogSlider } from "@/components/BlogSlider";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <About />
      <SkillsSection />
      <Experience />
      <Projects />
      <BlogSlider />
      <Contact />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-muted">
        © {new Date().getFullYear()} Sajid Mahmud. Built with Next.js, Tailwind CSS, and Framer Motion.
      </footer>
    </main>
  );
}
