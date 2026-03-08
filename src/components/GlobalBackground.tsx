'use client';

export default function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-[#020409]" />

      {/* atmosphere (single-line className to avoid hydration mismatch) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.12),transparent_50%),radial-gradient(circle_at_50%_90%,rgba(168,85,247,0.12),transparent_55%)]" />

      {/* subtle noise overlay (LOCAL file, no external request) */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{ backgroundImage: "url('/noise.svg')" }}
      />
    </div>
  );
}
