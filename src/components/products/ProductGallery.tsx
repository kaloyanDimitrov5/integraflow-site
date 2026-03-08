'use client';

import Image from 'next/image';
import {useMemo, useState} from 'react';

export default function ProductGallery({images, title}: {images: string[]; title: string}) {
  const safeImages = useMemo(() => images?.filter(Boolean) ?? [], [images]);
  const [idx, setIdx] = useState(0);

  const hasMany = safeImages.length > 1;
  const active = safeImages[idx] ?? safeImages[0];

  const prev = () => setIdx((v) => (v - 1 + safeImages.length) % safeImages.length);
  const next = () => setIdx((v) => (v + 1) % safeImages.length);

  if (!active) return null;

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="absolute inset-0 pointer-events-none opacity-80 [background:radial-gradient(900px_circle_at_20%_0%,rgba(99,102,241,.20),transparent_55%),radial-gradient(900px_circle_at_80%_10%,rgba(34,211,238,.14),transparent_55%)]" />

        <div className="relative aspect-[16/10] w-full">
          <Image
            src={active}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>

        {hasMany && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-white/90 backdrop-blur hover:bg-black/55"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-white/90 backdrop-blur hover:bg-black/55"
              aria-label="Next image"
            >
              →
            </button>
          </>
        )}
      </div>

      {hasMany && (
        <div className="mt-4 grid grid-cols-5 gap-2">
          {safeImages.slice(0, 10).map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setIdx(i)}
              className={[
                'relative aspect-[16/10] overflow-hidden rounded-2xl border bg-white/5',
                i === idx ? 'border-cyan-300/40 ring-1 ring-cyan-300/30' : 'border-white/10 hover:border-white/20'
              ].join(' ')}
              aria-label={`Open image ${i + 1}`}
            >
              <Image src={src} alt={`${title} thumbnail ${i + 1}`} fill className="object-cover" sizes="120px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
