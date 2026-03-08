import {PRODUCTS} from '@/data/products';
import ProductDetail from '@/components/products/ProductDetail';

export default async function ProductPage({
  params
}: {
  params: Promise<{slug: string; locale: string}>;
}) {
  const {slug} = await params;

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-5 pt-28 pb-24 text-white">
        Product not found.
      </div>
    );
  }

  return <ProductDetail product={product} />;
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({slug: p.slug}));
}
