'use client';

import {useEffect, useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale(); // ✅ current locale
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const L = (path: string) => `/${locale}${path}`; // ✅ helper

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={[
          'relative',
          'border-b border-white/10',
          'bg-black/40 backdrop-blur-2xl',
          scrolled ? 'bg-black/65 shadow-[0_20px_60px_rgba(0,0,0,.55)]' : ''
        ].join(' ')}
      >
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(900px_circle_at_20%_0%,rgba(99,102,241,.20),transparent_55%),radial-gradient(900px_circle_at_80%_10%,rgba(34,211,238,.14),transparent_55%)]" />

        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href={L('')} className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500/90 to-cyan-400/90 shadow-[0_0_40px_rgba(34,211,238,.25)]" />
            <span className="text-lg font-semibold tracking-tight text-white">INLEDDO</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href={L('/products')}>{t('products')}</a>
            <a className="hover:text-white" href={L('/#solutions')}>{t('solutions')}</a>
            <a className="hover:text-white" href={L('/#roi')}>ROI</a>
            <a className="hover:text-white" href={L('/#cases')}>{t('caseStudies')}</a>
            <a className="hover:text-white" href={L('/#about')}>{t('about')}</a>
            <a className="hover:text-white" href={L('/#contact')}>{t('contact')}</a>
          </nav>

          <div className="flex items-center gap-3">
            <LocaleSwitcher />
            <a
              href={L('/#contact')}
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black md:inline-flex"
            >
              Book a call
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-white/0 via-white/18 to-white/0" />
      </div>
    </header>
  );
}
