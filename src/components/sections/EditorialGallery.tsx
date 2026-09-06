import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/data/products";

export function EditorialGallery() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto">
        <FadeIn className="mb-12 max-w-xl">
          <span className="inline-block font-label tracking-widest text-secondary mb-4">
            Editorial
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-primary">
            The SAMT Experience
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeIn className="relative aspect-[3/4] rounded-[20px] overflow-hidden premium-shadow">
            <Image
              src={images.editorialA}
              alt="SAMT vintage floral shirt editorial in boutique"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="relative aspect-[3/4] rounded-[20px] overflow-hidden premium-shadow md:mt-16"
          >
            <Image
              src={images.editorialB}
              alt="SAMT metallic grid shirt editorial with brand plaque"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
