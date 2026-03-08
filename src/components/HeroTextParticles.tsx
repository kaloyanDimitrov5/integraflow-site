'use client';

import {useEffect, useRef} from 'react';

type Particle = {
  x: number; y: number;
  vx: number; vy: number;
  tx: number; ty: number;
  a: number;
};

export default function HeroTextParticles({
  text = 'IntegraFlow',
  density = 2,
  fontSize = 220,
  strength = 0.06
}: {
  text?: string;
  density?: number;
  fontSize?: number;
  strength?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', {alpha: true});
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.05);
      w = canvas.clientWidth;
      h = canvas.clientHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      buildParticles();
    };

    const buildParticles = () => {
      particlesRef.current = [];
      ctx.clearRect(0, 0, w, h);

      // draw text then sample pixels
      ctx.save();
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `800 ${fontSize}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto`;
      ctx.fillText(text, w * 0.56, h * 0.40);
      ctx.restore();

      const img = ctx.getImageData(0, 0, w, h).data;
      ctx.clearRect(0, 0, w, h);

      for (let y = 0; y < h; y += density) {
        for (let x = 0; x < w; x += density) {
          const idx = (y * w + x) * 4;
          const alpha = img[idx + 3];

          if (alpha > 25) {
            particlesRef.current.push({
              x: w * 0.5 + (Math.random() - 0.5) * w * 0.9,
              y: h * 0.45 + (Math.random() - 0.5) * h * 0.9,
              vx: (Math.random() - 0.5) * 0.7,
              vy: (Math.random() - 0.5) * 0.7,
              tx: x,
              ty: y,
              a: Math.min(1, alpha / 255)
            });
          }
        }
      }
    };

    const tick = () => {
      const particles = particlesRef.current;
      ctx.clearRect(0, 0, w, h);

      // gradient tint
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, 'rgba(99,102,241,0.85)');
      grad.addColorStop(0.55, 'rgba(34,211,238,0.65)');
      grad.addColorStop(1, 'rgba(168,85,247,0.45)');

      const time = performance.now() * 0.001;

      // particle draw settings for better visibility
      ctx.fillStyle = grad;
      ctx.shadowColor = 'rgba(34,211,238,0.25)';
      ctx.shadowBlur = 10;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // tiny "alive" jitter around target so text keeps moving subtly
        const jitterX = Math.sin(time * 1.4 + p.tx * 0.02) * 0.35;
        const jitterY = Math.cos(time * 1.2 + p.ty * 0.02) * 0.35;
        const targetX = p.tx + jitterX;
        const targetY = p.ty + jitterY;

        // attraction
        p.vx += (targetX - p.x) * strength;
        p.vy += (targetY - p.y) * strength;

        // friction
        p.vx *= 0.86;
        p.vy *= 0.86;

        // move
        p.x += p.vx;
        p.y += p.vy;

        // shimmer wave across text
        const wave = 0.6 + 0.4 * Math.sin((p.tx / Math.max(w, 1)) * 7.0 + time * 1.5);

        ctx.globalAlpha = p.a * 0.85 * wave;

        // slightly larger particles = more readable letters
        ctx.fillRect(p.x, p.y, 2.1, 2.1);
      }

      // subtle lines
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 0.10;
      ctx.strokeStyle = 'rgba(99,102,241,0.75)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i += 44) {
        const a = particles[i];
        for (let j = i + 44; j < i + 260 && j < particles.length; j += 44) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 40) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(tick);
    };

    const onResize = () => resize();

    resize();
    tick();
    window.addEventListener('resize', onResize, {passive: true});

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [text, density, fontSize, strength]);

  return (
    <canvas
      ref={canvasRef}
      className="hero-particles pointer-events-none absolute inset-0 h-full w-full opacity-90"
    />
  );
}
