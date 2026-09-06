import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function CtaBanner() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop relative overflow-hidden my-section-gap">
      <div className="absolute inset-0 bg-primary-container" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(252,251,249,0.35)_1px,transparent_1px)] bg-[length:20px_20px]" />
      <FadeIn className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-[40px] md:text-[64px] leading-tight text-surface mb-8 font-bold text-shadow-sm">
          Experience Affordable Luxury Today.
        </h2>
        <p className="text-lg text-surface/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of discerning clients who have elevated their personal
          style with SAMT Ventures.
        </p>
        <Button href="#contact" variant="gold" className="px-10 py-5">
          Begin Your Journey
        </Button>
      </FadeIn>
    </section>
  );
}
