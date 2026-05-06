import {setRequestLocale} from 'next-intl/server';
import {getProducts} from '@/lib/payload';
import {mapPayloadProduct} from '@/data/localizeProduct';
import ProductsGrid from '@/components/products/ProductsGrid';

export default async function ProductsPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const safeLocale = locale === 'bg' ? 'bg' : 'en';

  setRequestLocale(locale);

  const rawProducts = await getProducts(safeLocale);
  const products = rawProducts.map(mapPayloadProduct);

  return <ProductsGrid products={products} />;
}
