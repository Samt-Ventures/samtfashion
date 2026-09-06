import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[20px] bg-surface-container-lowest border border-surface-variant premium-shadow",
        className,
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="p-5 md:p-6">
        <p className="font-label text-secondary mb-2">{product.category}</p>
        <h3 className="font-display text-xl text-primary mb-2 leading-snug">
          {product.name}
        </h3>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-on-surface font-medium">
              {formatPrice(product.price, product.currency)}
            </p>
            <p className="text-sm text-on-surface-variant mt-0.5">
              {product.available ? "Available" : "Sold out"}
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 font-label text-secondary group-hover:text-primary transition-colors"
          >
            View
            <ArrowRight className="size-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}
