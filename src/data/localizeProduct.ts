import type {Locale, Product} from './products';
import type {PayloadProduct, PayloadMedia} from '@/lib/payload';

export type LocalizedProduct = {
  slug: string;
  title: string;
  tag?: string;
  subtitle: string;
  short: string;
  images: Array<{url: string; alt: string}>;
  highlights: string[];
  specs: Array<{label: string; value: string}>;
  sections: Array<{
    title: string;
    body?: string;
    bullets?: string[];
  }>;
  meta?: {title?: string; description?: string};
};

export function localizeProduct(product: Product, locale: Locale): LocalizedProduct {
  return {
    slug: product.slug,
    title: product.title[locale],
    subtitle: product.subtitle[locale],
    short: product.short[locale],
    images: product.images.map((src) => ({url: src, alt: product.title[locale]})),
    highlights: product.highlights.map((item) => item[locale]),
    specs: product.specs.map((spec) => ({
      label: spec.label[locale],
      value: spec.value[locale],
    })),
    sections: product.sections.map((section) => ({
      title: section.title[locale],
      body: section.body?.[locale],
      bullets: section.bullets?.map((bullet) => bullet[locale]),
    })),
  };
}

export function mapPayloadProduct(product: PayloadProduct): LocalizedProduct {
  return {
    slug: product.slug,
    title: product.title,
    tag: product.tag,
    subtitle: product.subtitle,
    short: product.short,
    images:
      product.images?.map(({image}) => {
        const media = image as PayloadMedia;
        return {
          url: media?.url ?? '',
          alt: media?.alt ?? product.title,
        };
      }) ?? [],
    highlights: product.highlights?.map((h) => h.text) ?? [],
    specs: product.specs?.map((s) => ({label: s.label, value: s.value})) ?? [],
    sections:
      product.sections?.map((sec) => ({
        title: sec.title,
        body: sec.body,
        bullets: sec.bullets?.map((b) => b.text),
      })) ?? [],
    meta: product.meta,
  };
}
