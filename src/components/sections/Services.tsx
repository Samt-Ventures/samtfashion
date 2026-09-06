import { FadeIn } from "@/components/ui/FadeIn";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { categories } from "@/data/categories";

export function Services() {
  return (
    <section
      id="services"
      className="py-section-gap bg-surface-container-lowest px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-container-max mx-auto">
        <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block font-label tracking-widest text-secondary mb-4">
            Our Expertise
          </span>
          <h2 className="font-display text-3xl md:text-[32px] text-primary mb-4">
            Curated Offerings
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed">
            A comprehensive suite of fashion services designed for the
            discerning individual.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 0.06}>
              <CategoryCard category={category} className="h-full" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
