import { experiences } from "@/data/content";

export function Experience() {
  return (
    <section id="experience">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-50 md:text-4xl">
            Building for brands, universities, and communities.
          </h2>
        </div>
        <div className="mt-12 space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.role}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-10"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-50">{experience.role}</h3>
                  <p className="text-slate-400">{experience.company}</p>
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{experience.period}</p>
              </div>
              <p className="mt-6 text-slate-300">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
