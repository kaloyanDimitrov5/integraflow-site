'use client';

import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import Glow from '@/components/Glow';
import {useTranslations, useLocale} from 'next-intl';

type Product = {
  slug: string;
  titleKey: string;
  descKey: string;
  tagKey: string;
  image: string; // put images in /public/products/...
  highlights: string[]; // short chips
};

const container = {
  hidden: {opacity: 0},
  show: {opacity: 1, transition: {staggerChildren: 0.06}}
};

const item = {
  hidden: {opacity: 0, y: 16},
  show: {opacity: 1, y: 0}
};

export default function ProductsGrid() {
  const t = useTranslations('products');
  const locale = useLocale();

  const products: Product[] = [
    {
      slug: 'transparent-led-film',
      titleKey: 'items.transparentFilm.title',
      descKey: 'items.transparentFilm.desc',
      tagKey: 'items.transparentFilm.tag',
      image: '/products/transparent-film.jpg',
      highlights: ['70–95% transparency', 'Ultra thin', 'Glass-ready']
    },
    {
      slug: 'holographic-led-screen',
      titleKey: 'items.holographic.title',
      descKey: 'items.holographic.desc',
      tagKey: 'items.holographic.tag',
      image: '/products/holographic.jpg',
      highlights: ['Floating effect', 'High impact', 'Retail & events']
    },
    {
      slug: 'transparent-led-screen',
      titleKey: 'items.transparentScreen.title',
      descKey: 'items.transparentScreen.desc',
      tagKey: 'items.transparentScreen.tag',
      image: '/products/transparent-screen.jpg',
      highlights: ['Bright in daylight', 'Doesn’t block light', 'Modular']
    },
    {
      slug: 'smart-dimming-film',
      titleKey: 'items.smartFilm.title',
      descKey: 'items.smartFilm.desc',
      tagKey: 'items.smartFilm.tag',
      image: '/products/smart-film.jpg',
      highlights: ['ON/OFF privacy', 'Instant switch', 'Modern glass']
    },
    {
      slug: 'indoor-led-screens',
      titleKey: 'items.indoor.title',
      descKey: 'items.indoor.desc',
      tagKey: 'items.indoor.tag',
      image: '/products/indoor.jpg',
      highlights: ['Fine pixel pitch', 'Color accuracy', 'Silent operation']
    },
    {
      slug: 'outdoor-led-screens',
      titleKey: 'items.outdoor.title',
      descKey: 'items.outdoor.desc',
      tagKey: 'items.outdoor.tag',
      image: '/products/outdoor.jpg',
      highlights: ['High nits', 'Weather-ready', 'Long lifespan']
    },
    {
      slug: 'rental-indoor',
      titleKey: 'items.rentalIndoor.title',
      descKey: 'items.rentalIndoor.desc',
      tagKey: 'items.rentalIndoor.tag',
      image: '/products/rental-indoor.jpg',
      highlights: ['Fast setup', 'Lightweight', 'Events-ready']
    },
    {
      slug: 'rental-outdoor',
      titleKey: 'items.rentalOutdoor.title',
      descKey: 'items.rentalOutdoor.desc',
      tagKey: 'items.rentalOutdoor.tag',
      image: '/products/rental-outdoor.jpg',
      highlights: ['Stage-grade', 'High brightness', 'Quick service']
    }
  ];

  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-5 pt-28 pb-24">
      <Glow className="opacity-70" />

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
              {/* subtle gradient */}
              <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(900px_circle_at_20%_10%,rgba(99,102,241,.18),transparent_55%),radial-gradient(900px_circle_at_85%_30%,rgba(34,211,238,.12),transparent_55%)]" />

              {/* top image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={t(p.titleKey)}
                  fill
                  className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {/* image fade */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/0" />

                {/* tag pill */}
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs text-white/80 backdrop-blur">
                  {t(p.tagKey)}
                </div>

                {/* corner chip */}
                <div className="absolute right-4 top-4 h-9 w-9 rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_70px_rgba(34,211,238,.10)]" />
              </div>

              {/* content */}
              <div className="p-6">
                <div className="text-xl font-semibold text-white">{t(p.titleKey)}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{t(p.descKey)}</p>

                {/* chips */}
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

                {/* bottom row */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-white/55">{t('ctaHint')}</span>
                  <span className="text-sm font-semibold text-white/80 transition group-hover:text-white">
                    {t('cta')} →
                  </span>
                </div>
              </div>

              {/* hover glow */}
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
