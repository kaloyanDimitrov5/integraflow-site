'use client';

import {useEffect, useRef} from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tx: number;
  ty: number;
  a: number;
};

export default function HeroTextParticles({
  text = 'INLEDDO',
  density = 4,
  fontSize = 180,
  strength = 0.08
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
    let startTime = 0;
    let lastFrame = 0;
    let isStatic = false;

    const MAX_ANIM_MS = 1200;
    const FPS = 30;
    const FRAME_INTERVAL = 1000 / FPS;

    const makeGradient = () => {
      const grad = ctx.createLinearGradient(0, 0, Math.max(w, 1), Math.max(h, 1));
      grad.addColorStop(0, 'rgba(99,102,241,0.80)');
      grad.addColorStop(0.5, 'rgba(34,211,238,0.65)');
      grad.addColorStop(1, 'rgba(168,85,247,0.38)');
      return grad;
    };

    const buildParticles = () => {
      if (!w || !h) return;

      particlesRef.current = [];
      ctx.clearRect(0, 0, w, h);

      ctx.save();
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `800 ${fontSize}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto`;
      ctx.fillText(text, w * 0.53, h * 0.4);
      ctx.restore();

      if (!w || !h) return;

      const img = ctx.getImageData(0, 0, w, h).data;
      ctx.clearRect(0, 0, w, h);

      for (let y = 0; y < h; y += density) {
        for (let x = 0; x < w; x += density) {
          const idx = (y * w + x) * 4;
          const alpha = img[idx + 3];

          if (alpha > 30) {
            particlesRef.current.push({
              x: w * 0.5 + (Math.random() - 0.5) * w * 0.8,
              y: h * 0.42 + (Math.random() - 0.5) * h * 0.7,
              vx: (Math.random() - 0.5) * 0.5,
              vy: (Math.random() - 0.5) * 0.5,
              tx: x,
              ty: y,
              a: Math.min(1, alpha / 255)
            });
          }
        }
      }
    };

    const drawStatic = () => {
      if (!w || !h) return;

      const particles = particlesRef.current;
      const grad = makeGradient();

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = grad;
      ctx.globalAlpha = 0.9;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.fillRect(p.tx, p.ty, 1.8, 1.8);
      }

      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      if (isStatic || !w || !h) return;

      if (!startTime) startTime = now;

      if (now - lastFrame < FRAME_INTERVAL) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      lastFrame = now;

      const elapsed = now - startTime;
      const particles = particlesRef.current;
      const grad = makeGradient();

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = grad;

      const progress = Math.min(elapsed / MAX_ANIM_MS, 1);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.vx += (p.tx - p.x) * strength;
        p.vy += (p.ty - p.y) * strength;

        p.vx *= 0.84;
        p.vy *= 0.84;

        p.x += p.vx;
        p.y += p.vy;

        const alphaBoost = 0.55 + progress * 0.35;
        ctx.globalAlpha = p.a * alphaBoost;
        ctx.fillRect(p.x, p.y, 1.8, 1.8);
      }

      ctx.globalAlpha = 1;

      if (elapsed >= MAX_ANIM_MS) {
        isStatic = true;
        drawStatic();
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const start = () => {
      const dpr = 1;
      w = canvas.clientWidth;
      h = canvas.clientHeight;

      if (!w || !h) {
        requestAnimationFrame(start);
        return;
      }

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      isStatic = false;
      startTime = 0;
      lastFrame = 0;

      buildParticles();

      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (isMobile || prefersReducedMotion) {
        isStatic = true;
        drawStatic();
      } else {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const onResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      start();
    };

    start();
    window.addEventListener('resize', onResize, {passive: true});

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [text, density, fontSize, strength]);

  return (
    <canvas
      ref={canvasRef}
      className="hero-particles pointer-events-none absolute inset-0 h-full w-full opacity-80"
    />
  );
}
