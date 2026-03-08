'use client';

import {useEffect, useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const L = (path: string) => `/${locale}${path}`;

  const closeMenu = () => setMobileOpen(false);

  const navLinks = [
    {label: t('products'), href: L('/products')},
    {label: t('solutions'), href: L('/#solutions')},
    {label: 'ROI', href: L('/#roi')},
    {label: t('caseStudies'), href: L('/#cases')},
    {label: t('about'), href: L('/#about')},
    {label: t('contact'), href: L('/#contact')}
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={[
          'relative border-b border-white/10 bg-black/40 backdrop-blur-2xl',
          scrolled ? 'bg-black/65 shadow-[0_20px_60px_rgba(0,0,0,.55)]' : ''
        ].join(' ')}
      >
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(900px_circle_at_20%_0%,rgba(99,102,241,.20),transparent_55%),radial-gradient(900px_circle_at_80%_10%,rgba(34,211,238,.14),transparent_55%)]" />

        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href={L('')} className="flex items-center gap-3" onClick={closeMenu}>
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500/90 to-cyan-400/90 shadow-[0_0_40px_rgba(34,211,238,.25)]" />
            <span className="text-lg font-semibold tracking-tight text-white">INLEDDO</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} className="hover:text-white" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <LocaleSwitcher />
            </div>

            <a
              href={L('/#contact')}
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black md:inline-flex"
            >
              Book a call
            </a>

            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur md:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={[
                    'absolute left-0 top-0 h-[2px] w-5 rounded-full bg-white transition-all duration-300',
                    mobileOpen ? 'top-[7px] rotate-45' : ''
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-white transition-all duration-300',
                    mobileOpen ? 'opacity-0' : 'opacity-100'
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-white transition-all duration-300',
                    mobileOpen ? 'top-[7px] -rotate-45' : ''
                  ].join(' ')}
                />
              </span>
            </button>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-white/0 via-white/18 to-white/0" />
      </div>

      {mobileOpen && (
        <>
          <button
            type="button"
            aria-label="Close mobile menu"
            onClick={closeMenu}
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px] md:hidden"
          />

          <div className="fixed inset-x-4 top-[76px] z-50 rounded-3xl border border-white/10 bg-black/75 p-4 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl md:hidden">
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-70 [background:radial-gradient(800px_circle_at_20%_0%,rgba(99,102,241,.18),transparent_55%),radial-gradient(800px_circle_at_80%_10%,rgba(34,211,238,.12),transparent_55%)]" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm font-semibold text-white/85">Menu</span>
                <LocaleSwitcher />
              </div>

              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <a
                href={L('/#contact')}
                onClick={closeMenu}
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black"
              >
                Book a call
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
