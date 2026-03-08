'use client';

import {usePathname} from 'next/navigation';
import Link from 'next/link';

export default function LocaleSwitcher() {
  const pathname = usePathname(); // e.g. /en or /bg/...
  const isBg = pathname.startsWith('/bg');

  const toLocale = (locale: 'en' | 'bg') => {
    const parts = pathname.split('/');
    parts[1] = locale;
    return parts.join('/') || `/${locale}`;
  };

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1">
      <Link
        href={toLocale('en')}
        className={`px-2 py-1 text-sm ${!isBg ? 'text-white' : 'text-white/60'}`}
      >
        EN
      </Link>
      <span className="text-white/20">|</span>
      <Link
        href={toLocale('bg')}
        className={`px-2 py-1 text-sm ${isBg ? 'text-white' : 'text-white/60'}`}
      >
        BG
      </Link>
    </div>
  );
}
