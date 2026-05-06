import { getPayload } from 'payload';
import config from '@payload-config';
import { PRODUCTS } from '@/data/products';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not available in production' }, { status: 403 });
  }

  const url = new URL(req.url);
  if (url.searchParams.get('secret') !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = await getPayload({ config });
  const results: string[] = [];

  for (const product of PRODUCTS) {
    const existing = await payload.find({
      collection: 'products',
      where: { slug: { equals: product.slug } },
      limit: 1,
    });

    if (existing.docs.length > 0) {
      results.push(`skip: ${product.slug}`);
      continue;
    }

    const created = await payload.create({
      collection: 'products',
      locale: 'en',
      data: {
        slug: product.slug,
        title: product.title.en,
        subtitle: product.subtitle.en,
        short: product.short.en,
        highlights: product.highlights.map(h => ({ text: h.en })),
        specs: product.specs.map(s => ({ label: s.label.en, value: s.value.en })),
        sections: product.sections.map(s => ({
          title: s.title.en,
          body: s.body?.en,
          bullets: s.bullets?.map(b => ({ text: b.en })),
        })),
      },
    });

    await payload.update({
      collection: 'products',
      id: created.id,
      locale: 'bg',
      data: {
        title: product.title.bg,
        subtitle: product.subtitle.bg,
        short: product.short.bg,
        highlights: product.highlights.map(h => ({ text: h.bg })),
        specs: product.specs.map(s => ({ label: s.label.bg, value: s.value.bg })),
        sections: product.sections.map(s => ({
          title: s.title.bg,
          body: s.body?.bg,
          bullets: s.bullets?.map(b => ({ text: b.bg })),
        })),
      },
    });

    results.push(`created: ${product.slug}`);
  }

  return NextResponse.json({ results });
}
