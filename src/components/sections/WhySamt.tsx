import { CheckCircle2, Gem, Scissors, Sparkles, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { whySamt } from "@/data/categories";

const icons: Record<string, LucideIcon> = {
  gem: Gem,
  "check-circle": CheckCircle2,
  sparkles: Sparkles,
  scissors: Scissors,
};

export function WhySamt() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto">
        <FadeIn className="max-w-2xl mb-14">
          <span className="inline-block font-label tracking-widest text-secondary mb-4">
            Why SAMT
          </span>
          <h2 className="font-display text-[36px] md:text-5xl leading-tight text-primary font-bold">
            Elegance Without the Unnecessary Price Tag.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whySamt.map((item, index) => {
            const Icon = icons[item.icon] ?? Gem;
            return (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="h-full p-6 rounded-[20px] border border-surface-variant bg-surface-container-lowest premium-shadow">
                  <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary mb-5">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="font-display text-xl text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
