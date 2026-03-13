import type {Locale, Product} from './products';

export type LocalizedProduct = {
  slug: string;
  title: string;
  subtitle: string;
  short: string;
  images: string[];
  highlights: string[];
  specs: {
    label: string;
    value: string;
  }[];
  sections: {
    title: string;
    body?: string;
    bullets?: string[];
  }[];
};

export function localizeProduct(product: Product, locale: Locale): LocalizedProduct {
  return {
    slug: product.slug,
    title: product.title[locale],
    subtitle: product.subtitle[locale],
    short: product.short[locale],
    images: product.images,
    highlights: product.highlights.map((item) => item[locale]),
    specs: product.specs.map((spec) => ({
      label: spec.label[locale],
      value: spec.value[locale]
    })),
    sections: product.sections.map((section) => ({
      title: section.title[locale],
      body: section.body?.[locale],
      bullets: section.bullets?.map((bullet) => bullet[locale])
    }))
  };
}
