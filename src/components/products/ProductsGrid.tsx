'use client';

import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {useTranslations, useLocale} from 'next-intl';
import type {LocalizedProduct} from '@/data/localizeProduct';

const container = {
  hidden: {opacity: 0},
  show: {opacity: 1, transition: {staggerChildren: 0.06}},
};

const item = {
  hidden: {opacity: 0, y: 16},
  show: {opacity: 1, y: 0},
};

export default function ProductsGrid({products}: {products: LocalizedProduct[]}) {
  const t = useTranslations('products');
  const locale = useLocale();

  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-5 pt-28 pb-24">
      <div className="relative z-10">
        <p className="text-sm font-semibold tracking-wide text-white/60">{t('kicker')}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {t('title')}
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">{t('subtitle')}</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((p) => (
          <motion.div key={p.slug} variants={item}>
            <Link
              href={`/${locale}/products/${p.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(900px_circle_at_20%_10%,rgba(99,102,241,.18),transparent_55%),radial-gradient(900px_circle_at_85%_30%,rgba(34,211,238,.12),transparent_55%)]" />

              <div className="relative h-44 w-full overflow-hidden">
                {p.images[0] ? (
                  <Image
                    src={p.images[0].url}
                    alt={p.images[0].alt || p.title}
                    fill
                    className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                ) : (
                  <div className="h-full w-full bg-white/5" />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/0" />

                {p.tag && (
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs text-white/80 backdrop-blur">
                    {p.tag}
                  </div>
                )}

                <div className="absolute right-4 top-4 h-9 w-9 rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_70px_rgba(34,211,238,.10)]" />
              </div>

              <div className="p-6">
                <div className="text-xl font-semibold text-white">{p.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.short}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-white/55">{t('ctaHint')}</span>
                  <span className="text-sm font-semibold text-white/80 transition group-hover:text-white">
                    {t('cta')} →
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute -inset-24 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100">
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,.18),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,.14),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(168,85,247,.10),transparent_60%)]" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
