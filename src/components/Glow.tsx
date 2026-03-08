'use client';

export default function Glow({className = ''}: {className?: string}) {
  return (
    <div
      className={`pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[520px] w-[1100px] -translate-x-1/2 -translate-y-1/2 ${className}`}
    >
      <div className="absolute -inset-40 opacity-80 blur-3xl">
        <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,.22),transparent_55%),radial-gradient(circle_at_70%_40%,rgba(34,211,238,.18),transparent_55%),radial-gradient(circle_at_40%_70%,rgba(168,85,247,.14),transparent_60%)]" />
      </div>

      <div className="absolute inset-0 [mask-image:radial-gradient(55%_55%_at_50%_50%,black,transparent_72%)]" />
    </div>
  );
}
