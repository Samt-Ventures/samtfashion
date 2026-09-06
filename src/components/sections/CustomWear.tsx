import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/data/products";

export function CustomWear() {
  return (
    <section
      id="custom-wear"
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <span className="inline-block font-label tracking-widest text-secondary mb-4">
            Bespoke Tailoring
          </span>
          <h2 className="font-display text-[40px] md:text-[56px] leading-tight text-primary mb-6 font-bold">
            Made For You.
          </h2>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed max-w-lg">
            For moments that deserve something personal, SAMT creates
            custom-made pieces tailored to your measurements, preferences, and
            style.
          </p>
          <Button href="#contact">Start a Custom Order</Button>
        </FadeIn>

        <FadeIn delay={0.1} className="relative">
          <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden premium-shadow">
            <Image
              src={images.customCollection}
              alt="Premium fabrics and tailoring tools for SAMT custom-made clothing"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-surface-container-lowest p-6 rounded-2xl premium-shadow border border-surface-variant max-w-[240px]">
            <p className="font-label text-secondary mb-2">Private Fitting</p>
            <p className="font-display text-xl text-primary leading-snug">
              Book a showroom appointment in Ogijo
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
