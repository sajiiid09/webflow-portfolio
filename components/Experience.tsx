import { experiences } from "@/data/content";
import { SectionLabel } from "./SectionLabel";

export function Experience() {
  return (
    <section id="experience" className="bg-gradient-to-b from-white/10 via-transparent to-transparent py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-slate-200">
        <SectionLabel eyebrow="Experience" title="Where I’ve been" />
        <div className="mt-12 space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.role}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-10 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/60 hover:shadow-[0_0_30px_rgba(251,146,60,0.35)]"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-50">{experience.role}</h3>
                  <p className="text-slate-300">{experience.company}</p>
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{experience.period}</p>
              </div>
              <p className="mt-6 text-slate-200">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
