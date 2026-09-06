import Image from "next/image";
import { siteConfig } from "@/data/site";

const exploreLinks = [
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Luxury Thrift", href: "#vintage" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Custom Clothing", href: "#custom-wear" },
  { label: "Ladies Wear", href: "#services" },
  { label: "Men Collection", href: "#services" },
  { label: "Baby Collection", href: "#services" },
  { label: "Footwear", href: "#services" },
];

export function Footer() {
  return (
    <footer className="bg-primary-container w-full">
      <div className="py-section-gap grid grid-cols-1 md:grid-cols-3 px-margin-mobile md:px-margin-desktop gap-16 max-w-container-max mx-auto">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <Image
              src={siteConfig.logo}
              alt="SAMT Ventures Ltd logo"
              width={88}
              height={104}
              className="h-14 w-auto object-contain bg-transparent brightness-0 invert"
            />
            <span className="font-display text-xl text-surface">SAMT VENTURES</span>
          </div>
          <p className="text-base text-surface/80 mb-4 max-w-xs leading-relaxed">
            {siteConfig.tagline}. Curated thrift and bespoke fashion for the
            discerning eye.
          </p>
          <p className="text-sm text-surface-container-high/70 mb-8">
            {siteConfig.location.full}
          </p>
          <p className="text-base text-surface-container-high/70">
            © {new Date().getFullYear()} SAMT Ventures Ltd. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="font-label tracking-widest text-secondary-fixed mb-6">
            Explore
          </h4>
          <ul className="space-y-4 text-base text-surface-container-high">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-secondary-fixed transition-colors duration-200 block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-label tracking-widest text-secondary-fixed mb-6">
            Services
          </h4>
          <ul className="space-y-4 text-base text-surface-container-high">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-secondary-fixed transition-colors duration-200 block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
