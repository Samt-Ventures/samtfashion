import Image from "next/image";
import { Gem } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/data/products";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row pt-24 md:pt-0">
      <div className="w-full md:w-1/2 flex items-center px-margin-mobile md:px-margin-desktop py-20 bg-surface z-10">
        <FadeIn className="max-w-xl">
          <span className="inline-block py-1 px-3 border border-outline-variant rounded-full font-label tracking-widest text-primary mb-6 bg-surface-container-lowest">
            {siteConfig.eyebrow}
          </span>
          <h1 className="font-display text-[40px] md:text-[64px] leading-[1.15] md:leading-[1.1] tracking-tight text-primary mb-6 font-bold">
            Luxury Fashion That Everyone Can Afford.
          </h1>
          <p className="text-lg text-on-surface-variant mb-10 max-w-md leading-relaxed">
            Discover curated vintage pieces, elegant ready-to-wear fashion,
            custom-made outfits, footwear, and more — all under the SAMT
            elegance umbrella.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button href="#collections">Explore Collection</Button>
            <Button href="#custom-wear" variant="secondary">
              Custom Order
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-6 border-t border-surface-variant pt-8">
            <div>
              <p className="font-display text-3xl text-primary mb-1">1000+</p>
              <p className="font-label text-on-surface-variant tracking-wider">
                Happy
                <br />
                Customers
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-primary mb-1">500+</p>
              <p className="font-label text-on-surface-variant tracking-wider">
                Premium
                <br />
                Pieces
              </p>
            </div>
            <div>
              <Gem
                className="size-8 text-secondary mb-2 fill-secondary"
                aria-hidden
              />
              <p className="font-label text-on-surface-variant tracking-wider">
                Affordable
                <br />
                Luxury
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-dim mix-blend-multiply z-10 opacity-20 pointer-events-none" />
        <Image
          src={images.hero}
          alt="SAMT Ventures curated vintage floral shirt editorial in boutique showroom"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center scale-105"
        />
      </div>
    </section>
  );
}
