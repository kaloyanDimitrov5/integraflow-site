'use client';

import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  const navItems = [
    {label: t('nav.products'), href: '#products'},
    {label: t('nav.solutions'), href: '#solutions'},
    {label: t('nav.roi'), href: '#roi'},
    {label: t('nav.caseStudies'), href: '#case-studies'},
    {label: t('nav.about'), href: '#about'}
  ];

  return (
    <footer className="relative mt-24 border-t border-white/10">
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-24 max-w-4xl bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr_.9fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-400 to-indigo-500 shadow-[0_0_25px_rgba(56,189,248,0.25)]" />
              <div>
                <div className="text-lg font-semibold tracking-wide text-white">INLEDDO</div>
                <div className="text-xs uppercase tracking-[0.24em] text-white/45">
                  LED Display Solutions
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              {t('description')}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:office@inleddo.com"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                office@inleddo.com
              </a>

              <a
                href="tel:+359000000000"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                +359 00 000 0000
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
              {t('navigationTitle')}
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-cyan-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA / Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
              {t('ctaTitle')}
            </h3>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <p className="text-sm leading-7 text-white/70">
                {t('ctaText')}
              </p>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                {t('ctaButton')}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>{t('copyright')}</p>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-white/70">
              {t('legal.privacy')}
            </a>
            <a href="#" className="transition hover:text-white/70">
              {t('legal.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
