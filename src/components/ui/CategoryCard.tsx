import Image from "next/image";
import {
  ArrowRight,
  Footprints,
  Heart,
  Recycle,
  Scissors,
  Shirt,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { Category } from "@/types/product";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  scissors: Scissors,
  recycle: Recycle,
  sparkles: Sparkles,
  shirt: Shirt,
  heart: Heart,
  footprints: Footprints,
};

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  const Icon = iconMap[category.icon] ?? Sparkles;

  if (category.featured) {
    return (
      <a
        href={category.href}
        className={cn(
          "relative overflow-hidden rounded-[20px] group premium-shadow border border-surface-variant min-h-[320px] flex items-end",
          className,
        )}
      >
        <Image
          src={category.image}
          alt={category.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: category.objectPosition ?? "center bottom" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <div className="relative z-10 p-8 w-full">
          <div className="w-12 h-12 rounded-full bg-surface/20 backdrop-blur-sm flex items-center justify-center mb-4 text-surface border border-surface/30">
            <Icon className="size-5" aria-hidden />
          </div>
          <h3 className="font-display text-2xl text-surface mb-2">
            {category.name}
          </h3>
          <p className="text-surface/80 text-sm mb-3 max-w-xs">
            {category.description}
          </p>
          <span className="inline-flex items-center gap-1 text-secondary-fixed font-label tracking-widest">
            Shop Shoes <ArrowRight className="size-3.5" aria-hidden />
          </span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={category.href}
      className={cn(
        "bg-surface rounded-[20px] overflow-hidden border border-surface-variant hover:border-outline transition-colors group premium-shadow flex flex-col",
        className,
      )}
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={category.image}
          alt={category.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: category.objectPosition ?? "center center" }}
        />
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors" />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-surface transition-colors -mt-12 relative z-10 border-4 border-surface">
          <Icon className="size-6" aria-hidden />
        </div>
        <h3 className="font-display text-2xl text-primary mb-3">
          {category.name}
        </h3>
        <p className="font-body text-base text-on-surface-variant mb-6 flex-1 leading-relaxed">
          {category.description}
        </p>
        <span className="inline-flex items-center gap-1 text-secondary font-label tracking-widest group-hover:text-primary transition-colors">
          Explore <ArrowRight className="size-3.5" aria-hidden />
        </span>
      </div>
    </a>
  );
}
