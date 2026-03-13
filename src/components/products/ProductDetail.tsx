'use client';

import ProductGallery from './ProductGallery';
import type {LocalizedProduct} from '@/data/localizeProduct';

export default function ProductDetail({product}: {product: LocalizedProduct}) {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-28 pb-24">
      {/* top header */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-wide text-white/60">Продукти</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {product.title}
        </h1>

        <p className="mt-4 text-white/70 md:text-lg">
          {product.subtitle}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {product.highlights.map((x) => (
            <span
              key={x}
              className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur"
            >
              {x}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
        {/* gallery */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <ProductGallery images={product.images} title={product.title} />
        </div>

        {/* right column */}
        <div className="space-y-6">
          {/* short description */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm leading-relaxed text-white/75">
              {product.short}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
              >
                Заяви оферта
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
              >
                Всички продукти
              </a>
            </div>
          </div>

          {/* specs */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Технически параметри</h2>
              <span className="text-xs text-white/55">* спрямо модел</span>
            </div>

            <div className="mt-5 grid gap-3">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                >
                  <div className="text-sm text-white/65">{s.label}</div>
                  <div className="text-sm font-semibold text-white text-right">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* sections */}
          <div className="space-y-4">
            {product.sections.map((sec) => (
              <div key={sec.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">{sec.title}</h3>

                {sec.body && (
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {sec.body}
                  </p>
                )}

                {sec.bullets?.length ? (
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {sec.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>

          {/* final CTA */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/6 via-white/0 to-white/6 p-6 backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold text-white">Искате точна конфигурация?</div>
                <div className="mt-1 text-sm text-white/70">
                  Кажете размер, монтаж и локация — ще предложим модел, пиксел и контролер.
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
              >
                Свържи се с нас
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
