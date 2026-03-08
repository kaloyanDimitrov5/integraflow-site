'use client';

import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';
import HeroTextParticles from '@/components/HeroTextParticles';
import Glow from "@/components/Glow";

const floatA = {y: [0, -8, 0]};
const floatB = {y: [0, -10, 0]};
const floatC = {y: [0, -6, 0]};

export default function Hero() {
  const t = useTranslations('hero');

  const stats = [
    {
      k: t('stats.workflows'),
      v: '24+',
      shape: 'rounded-[28px]',
      anim: floatA,
      accent: 'shadow-[0_0_70px_rgba(99,102,241,.16)]'
    },
    {
      k: t('stats.hours'),
      v: '120+',
      shape: 'rounded-[22px] rotate-[-1deg]',
      anim: floatB,
      accent: 'shadow-[0_0_70px_rgba(34,211,238,.14)]'
    },
    {
      k: t('stats.systems'),
      v: '15+',
      shape: 'rounded-[32px] rotate-[1deg]',
      anim: floatC,
      accent: 'shadow-[0_0_70px_rgba(168,85,247,.14)]'
    }
  ];

  return (
    <section className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center overflow-hidden px-5 pt-24 pb-10 md:min-h-[82vh] md:pt-28 md:pb-12">
      {/* background particle text */}
      <HeroTextParticles text="INLEDDO" fontSize={160} density={5} strength={0.08} />

      <motion.div
        initial={{opacity: 0, y: 18}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.7, ease: 'easeOut'}}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="text-balance">
          {/* supporting line */}
          <span className="block text-3xl font-semibold tracking-tight text-white/90 md:text-5xl">
            {t('titleLine1')}
          </span>

          {/* main brand line */}
          <span className="relative mt-3 block text-5xl font-semibold tracking-tight md:text-7xl">
            <span className="bg-gradient-to-br from-indigo-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(34,211,238,.22)]">
              INLEDDO
            </span>
            <span className="text-white"> </span>

            {/* futuristic underline */}
            <span className="pointer-events-none absolute -bottom-2 left-0 h-[2px] w-[62%] bg-gradient-to-r from-indigo-400/0 via-cyan-300/70 to-indigo-400/0" />
            <span className="pointer-events-none absolute -bottom-3 left-6 h-[10px] w-[36%] blur-lg bg-cyan-300/20" />
          </span>

          {/* supporting line */}
          <span className="mt-4 block text-3xl font-semibold tracking-tight text-white/90 md:text-5xl">
            {t('titleLine2')}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
          {t('subtitle')}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
          >
            {t('ctaPrimary')}
          </a>

          <a
            href="#solutions"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
          >
            {t('ctaSecondary')}
          </a>
        </div>
      </motion.div>

      {/* upgraded stats cards */}
      <div className="relative z-10 mt-14 grid gap-4 md:grid-cols-3">
        {stats.map((x, idx) => (
          <motion.div
            key={x.k}
            initial={{opacity: 0, y: 14}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.55, ease: 'easeOut', delay: 0.15 + idx * 0.08}}
            whileHover={{scale: 1.03, rotate: 0}}
            className={[
              'group relative overflow-hidden border border-white/10 bg-white/5 p-5 backdrop-blur',
              x.shape,
              x.accent
            ].join(' ')}
          >
            <div className="pointer-events-none absolute -inset-24 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100">
              <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,.22),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(34,211,238,.18),transparent_55%),radial-gradient(circle_at_40%_80%,rgba(168,85,247,.14),transparent_60%)]" />
            </div>

            <motion.div
              animate={x.anim}
              transition={{duration: 3.2 + idx * 0.25, repeat: Infinity, ease: 'easeInOut'}}
              className="relative"
            >
              <div className="text-sm text-white/60">{x.k}</div>
              <div className="mt-2 text-3xl font-semibold text-white">{x.v}</div>
              <div className="mt-2 text-xs text-white/55">{t('stats.note')}</div>
            </motion.div>

            <div className="absolute right-4 top-4 h-8 w-8 rounded-xl border border-white/10 bg-white/5" />
          </motion.div>
        ))}
      </div>
      <Glow className="opacity-80" />
    </section>

  );
}
