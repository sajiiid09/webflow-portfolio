"use client";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="aurora-blob aurora-1" aria-hidden />
      <div className="aurora-blob aurora-2" aria-hidden />
      <div className="aurora-blob aurora-3" aria-hidden />
      <div className="aurora-blob aurora-4" aria-hidden />
    </div>
  );
}
