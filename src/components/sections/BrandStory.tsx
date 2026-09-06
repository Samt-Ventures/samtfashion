import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/data/products";

export function BrandStory() {
  return (
    <section
      id="about"
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <FadeIn className="md:col-span-5 order-2 md:order-1 mt-12 md:mt-0 relative">
          <div className="absolute -inset-4 bg-surface-container-low rounded-[24px] z-0 -rotate-2" />
          <div className="relative z-10 w-full aspect-[4/5] rounded-[20px] overflow-hidden premium-shadow">
            <Image
              src={images.brandStory}
              alt="Bespoke fabrics, measuring tape, and gold scissors in the SAMT custom atelier"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn className="md:col-span-6 md:col-start-7 order-1 md:order-2" delay={0.1}>
          <span className="inline-block font-label tracking-widest text-secondary mb-4">
            Our Ethos
          </span>
          <h2 className="font-display text-[40px] md:text-[64px] leading-[1.15] tracking-tight text-primary mb-8 font-bold">
            Fashion Without Compromise
          </h2>
          <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
            <p>
              At SAMT Ventures, we believe that prestige and cultural depth
              should not be exclusive. We curate an aesthetic that marries the
              structural clarity of modern minimalism with the rich, sensory
              tactility of contemporary African luxury.
            </p>
            <p>
              Every piece in our collection — whether a meticulously sourced
              thrift garment or a bespoke custom creation — is selected with
              intentionality. We avoid decorative clutter, focusing instead on
              high-fidelity materials, effortless sophistication, and an
              unwavering commitment to accessible luxury.
            </p>
          </div>
          <a
            href="#custom-wear"
            className="inline-flex items-center gap-2 mt-10 text-primary font-label tracking-widest group"
          >
            Discover Our Process
            <ArrowRight className="size-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
