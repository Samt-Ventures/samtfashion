import Image from "next/image";
import { Gem, Plus } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/products";

export function FeaturedCollections() {
  return (
    <section
      id="collections"
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface max-w-container-max mx-auto"
    >
      <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="font-display text-[40px] md:text-[32px] leading-tight text-primary mb-2 font-bold md:font-semibold">
            Featured Curations
          </h2>
          <p className="text-base text-on-surface-variant max-w-md leading-relaxed">
            Explore our latest arrivals and signature collections, where every
            piece tells a story of craftsmanship.
          </p>
        </div>
        <a
          href="#vintage"
          className="hidden md:inline-flex items-center gap-2 text-primary font-label tracking-widest border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors"
        >
          View Full Lookbook
        </a>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[280px] md:auto-rows-[300px] gap-6">
        <FadeIn className="md:col-span-8 md:row-span-2 relative rounded-[20px] overflow-hidden group cursor-pointer premium-shadow min-h-[360px]">
          <Image
            src={images.customCollection}
            alt="SAMT custom collection — bespoke fabrics and artisan tailoring tools"
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <span className="inline-block px-3 py-1 bg-surface/90 backdrop-blur text-primary font-label tracking-widest rounded-full self-start mb-4">
              Artisan Crafted
            </span>
            <h3 className="font-display text-3xl text-surface mb-2">
              The Custom Collection
            </h3>
            <p className="text-base text-surface/80 max-w-sm mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              Experience unparalleled fit and exclusive materials tailored
              precisely to your specifications.
            </p>
            <a
              href="#custom-wear"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-surface text-primary opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100"
              aria-label="Explore custom collection"
            >
              <Plus className="size-5" />
            </a>
          </div>
        </FadeIn>

        <FadeIn
          className="md:col-span-4 md:row-span-1 relative rounded-[20px] overflow-hidden group cursor-pointer premium-shadow min-h-[280px]"
          delay={0.08}
        >
          <Image
            src={images.luxuryThrift}
            alt="SAMT luxury thrift — curated vintage floral shirt"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="font-display text-2xl text-surface mb-1">
              Luxury Thrift
            </h3>
            <span className="text-secondary-fixed font-label tracking-widest">
              Vintage Outerwear
            </span>
          </div>
        </FadeIn>

        <FadeIn
          className="md:col-span-4 md:row-span-1 relative rounded-[20px] overflow-hidden group premium-shadow bg-surface-container-high flex flex-col justify-center items-center p-8 text-center border border-outline-variant min-h-[280px]"
          delay={0.12}
        >
          <Gem className="size-10 text-primary mb-4 fill-primary/20" aria-hidden />
          <h3 className="font-display text-2xl text-primary mb-2">New Arrivals</h3>
          <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
            Discover the latest curated additions to our ready-to-wear line.
          </p>
          <Button href="#vintage" variant="outline" className="px-6 py-2">
            Shop Now
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
