import {setRequestLocale} from 'next-intl/server';
import {getProductBySlug, getProductSlugs} from '@/lib/payload';
import {mapPayloadProduct} from '@/data/localizeProduct';
import ProductDetail from '@/components/products/ProductDetail';

export default async function ProductPage({
  params,
}: {
  params: Promise<{slug: string; locale: string}>;
}) {
  const {slug, locale} = await params;
  const safeLocale = locale === 'bg' ? 'bg' : 'en';

  setRequestLocale(locale);

  const raw = await getProductBySlug(slug, safeLocale);

  if (!raw) {
    return (
      <div className="mx-auto max-w-6xl px-5 pt-28 pb-24 text-white">
        {locale === 'bg' ? 'Продуктът не е намерен.' : 'Product not found.'}
      </div>
    );
  }

  return <ProductDetail product={mapPayloadProduct(raw)} />;
}

export async function generateStaticParams() {
  const locales = ['en', 'bg'];

  let slugs: string[] = [];
  try {
    slugs = await getProductSlugs();
  } catch {
    // DB may not be available at build time; pages will be generated on demand
  }

  return locales.flatMap((locale) => slugs.map((slug) => ({locale, slug})));
}
