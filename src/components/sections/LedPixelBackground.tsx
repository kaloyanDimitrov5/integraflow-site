'use client';

type LedPixelBackgroundProps = {
  className?: string;
};

export default function LedPixelBackground({
  className = ''
}: LedPixelBackgroundProps) {
  return (
    <div
      className={[
        'pointer-events-none fixed inset-0 -z-10 overflow-hidden',
        className
      ].join(' ')}
      aria-hidden="true"
    >
      {/* Base deep gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(26,56,105,0.18),transparent_30%),radial-gradient(circle_at_70%_30%,rgba(3,102,119,0.14),transparent_28%),radial-gradient(circle_at_50%_65%,rgba(99,102,241,0.14),transparent_35%),linear-gradient(135deg,rgba(3,7,18,0.96),rgba(10,15,35,0.92),rgba(3,7,18,0.98))]" />

      {/* LED pixel matrix */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(56,189,248,0.9) 0.7px, transparent 1.2px),
            radial-gradient(circle, rgba(99,102,241,0.55) 0.9px, transparent 1.6px)
          `,
          backgroundSize: '18px 18px, 36px 36px',
          backgroundPosition: '0 0, 9px 9px'
        }}
      />

      {/* Bigger glowing LED clusters */}
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(34,211,238,0.95) 1.4px, transparent 3px),
            radial-gradient(circle, rgba(129,140,248,0.75) 1.8px, transparent 3.6px)
          `,
          backgroundSize: '54px 54px, 72px 72px',
          backgroundPosition: '0 0, 18px 18px'
        }}
      />

      {/* Soft horizontal scan feel */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 1px, transparent 2px, transparent 6px)'
        }}
      />

      {/* Vertical light beams */}
      <div className="absolute inset-y-0 left-[12%] w-[18%] bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-y-0 right-[10%] w-[16%] bg-indigo-500/10 blur-3xl" />
      <div className="absolute top-[20%] left-[38%] h-[30%] w-[20%] bg-sky-400/10 blur-3xl" />

      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(2,6,23,0.45)_72%,rgba(2,6,23,0.82)_100%)]" />
    </div>
  );
}
