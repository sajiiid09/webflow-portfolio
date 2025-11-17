interface SectionTitleProps {
  id: string;
  label: string;
  eyebrow?: string;
}

export function SectionTitle({ id, label, eyebrow }: SectionTitleProps) {
  return (
    <div id={id} className="mb-10">
      {eyebrow && (
        <p className="uppercase tracking-[0.3em] text-xs text-muted mb-2">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold">{label}</h2>
    </div>
  );
}
