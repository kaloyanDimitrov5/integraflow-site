import {PRODUCTS, type Locale} from '@/data/products';
import {localizeProduct} from '@/data/localizeProduct';
import ProductDetail from '@/components/products/ProductDetail';

export default async function ProductPage({
  params
}: {
  params: Promise<{slug: string; locale: string}>;
}) {
  const {slug, locale} = await params;

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-5 pt-28 pb-24 text-white">
        {locale === 'bg' ? 'Продуктът не е намерен.' : 'Product not found.'}
      </div>
    );
  }

  const safeLocale: Locale = locale === 'bg' ? 'bg' : 'en';
  const localizedProduct = localizeProduct(product, safeLocale);

  return <ProductDetail product={localizedProduct} />;
}

export function generateStaticParams() {
  const locales = ['en', 'bg'];

  return locales.flatMap((locale) =>
    PRODUCTS.map((product) => ({
      locale,
      slug: product.slug
    }))
  );
}
