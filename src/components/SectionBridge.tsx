'use client';

export default function SectionBridge({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute left-0 right-0 top-0 h-24 -translate-y-1/2 ${className}`}
    >
      {/* fades ROI panel into hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/70" />
      {/* subtle color carryover */}
      <div className="absolute inset-0 opacity-70 blur-2xl bg-[radial-gradient(700px_circle_at_30%_20%,rgba(34,211,238,.14),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(99,102,241,.12),transparent_55%)]" />
    </div>
  );
}
