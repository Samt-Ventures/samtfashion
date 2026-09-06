import { FadeIn } from "@/components/ui/FadeIn";
import { ProductCard } from "@/components/ui/ProductCard";
import { featuredProducts } from "@/data/products";

export function VintageCollection() {
  return (
    <section
      id="vintage"
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low"
    >
      <div className="max-w-container-max mx-auto">
        <FadeIn className="max-w-2xl mb-12">
          <span className="inline-block font-label tracking-widest text-secondary mb-4">
            Curated Vintage
          </span>
          <h2 className="font-display text-[40px] md:text-5xl leading-tight text-primary mb-4 font-bold">
            One-of-a-kind pieces. Carefully selected.
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Explore SAMT&apos;s curated selection of vintage and thrift fashion,
            chosen for individuality, quality, and timeless style.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
          {featuredProducts.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.08}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
