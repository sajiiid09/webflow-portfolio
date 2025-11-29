interface SectionLabelProps {
  id?: string;
  eyebrow: string;
  title: string;
}

export function SectionLabel({ id, eyebrow, title }: SectionLabelProps) {
  return (
    <div id={id} className="mb-10 flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/70">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">{title}</h2>
    </div>
  );
}
