import { MapPin, Clock } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";

export function Contact() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.location.full)}`;

  return (
    <section
      id="contact"
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <FadeIn>
          <span className="inline-block font-label tracking-widest text-secondary mb-4">
            Visit Us
          </span>
          <h2 className="font-display text-3xl text-primary mb-6">
            Atelier &amp; Showroom
          </h2>
          <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
            Schedule a private fitting for custom wear or browse our curated
            collections in person.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <MapPin className="size-5 text-secondary mt-1 shrink-0" aria-hidden />
              <div>
                <h4 className="font-label tracking-widest text-primary mb-1">
                  Address
                </h4>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  {siteConfig.location.address}
                  <br />
                  {siteConfig.location.city}, {siteConfig.location.area}
                  <br />
                  {siteConfig.location.state}, {siteConfig.location.country}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="size-5 text-secondary mt-1 shrink-0" aria-hidden />
              <div>
                <h4 className="font-label tracking-widest text-primary mb-1">
                  Hours
                </h4>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  {siteConfig.hours.weekday}
                  <br />
                  {siteConfig.hours.sunday}
                </p>
              </div>
            </div>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-64 rounded-[20px] overflow-hidden border border-outline-variant premium-shadow relative group bg-surface-container-high"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 via-surface to-secondary-fixed/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <MapPin className="size-10 text-primary mb-3" aria-hidden />
              <p className="font-display text-xl text-primary mb-1">
                {siteConfig.location.city}, {siteConfig.location.area}
              </p>
              <p className="text-sm text-on-surface-variant mb-4">
                {siteConfig.location.state}, Nigeria
              </p>
              <span className="font-label tracking-widest text-secondary group-hover:text-primary transition-colors">
                Open in Google Maps
              </span>
            </div>
          </a>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
