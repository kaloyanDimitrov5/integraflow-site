import config from '@payload-config';
import {getPayload} from 'payload';

export type PayloadMedia = {
  id: string;
  url: string;
  alt: string;
  filename?: string;
  sizes?: {
    card?: {url: string};
    thumb?: {url: string};
  };
};

export type PayloadProduct = {
  id: string;
  slug: string;
  title: string;
  tag?: string;
  subtitle: string;
  short: string;
  images: Array<{image: PayloadMedia | string}>;
  highlights: Array<{text: string; id?: string}>;
  specs: Array<{label: string; value: string; id?: string}>;
  sections: Array<{
    title: string;
    body?: string;
    bullets?: Array<{text: string; id?: string}>;
    id?: string;
  }>;
  meta?: {title?: string; description?: string};
};

type SupportedLocale = 'en' | 'bg';

export async function getProducts(locale: SupportedLocale): Promise<PayloadProduct[]> {
  const payload = await getPayload({config});
  const result = await payload.find({
    collection: 'products',
    locale,
    draft: false,
    limit: 100,
    overrideAccess: true,
  });
  return result.docs as unknown as PayloadProduct[];
}

export async function getProductBySlug(
  slug: string,
  locale: SupportedLocale
): Promise<PayloadProduct | null> {
  const payload = await getPayload({config});
  const result = await payload.find({
    collection: 'products',
    locale,
    draft: false,
    limit: 1,
    overrideAccess: true,
    where: {slug: {equals: slug}},
  });
  return (result.docs[0] as unknown as PayloadProduct) ?? null;
}

export async function getProductSlugs(): Promise<string[]> {
  const payload = await getPayload({config});
  const result = await payload.find({
    collection: 'products',
    draft: false,
    limit: 100,
    overrideAccess: true,
  });
  return result.docs.map((doc) => (doc as unknown as {slug: string}).slug);
}
