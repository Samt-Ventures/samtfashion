import type { Category } from "@/types/product";
import { images } from "./products";

export const categories: Category[] = [
  {
    id: "custom-made",
    name: "Custom-Made Fashion",
    description:
      "Bespoke tailoring that honors your unique silhouette, utilizing premium fabrics and precise craftsmanship.",
    href: "#custom-wear",
    image: images.customCollection,
    alt: "Bespoke tailoring fabrics, measuring tape, and gold scissors in the SAMT custom atelier",
    icon: "scissors",
    objectPosition: "center center",
  },
  {
    id: "thrift",
    name: "Premium Thrift Collection",
    description:
      "Meticulously curated pre-loved luxury pieces, inspected for quality and timeless appeal.",
    href: "#vintage",
    image: images.luxuryThrift,
    alt: "Curated SAMT vintage floral shirt displayed in the luxury thrift showroom",
    icon: "recycle",
    objectPosition: "center center",
  },
  {
    id: "ladies",
    name: "Ladies Collection",
    description:
      "Elegant ready-to-wear garments designed to evoke confidence and effortless sophistication.",
    href: "#collections",
    image: images.ladiesWear,
    alt: "Elegant cream and forest green ladies silk dress in a warm boutique setting",
    icon: "sparkles",
    objectPosition: "center center",
  },
  {
    id: "mens",
    name: "Men's Fashion",
    description:
      "Sharp, architectural menswear staples that balance classic tailoring with modern minimalism.",
    href: "#collections",
    image: images.mensWear,
    alt: "SAMT men's fashion — metallic grid camp shirt styled with distressed denim",
    icon: "shirt",
    objectPosition: "center 30%",
  },
  {
    id: "baby",
    name: "Baby Collection",
    description:
      "Soft, premium natural fibers crafted into beautiful, comfortable garments for the littlest ones.",
    href: "#collections",
    image: images.babyWear,
    alt: "Soft cream and sage baby knitwear displayed in a warm boutique setting",
    icon: "heart",
    objectPosition: "center center",
  },
  {
    id: "footwear",
    name: "Footwear",
    description:
      "Footwear selected to complement your personal style and complete every look.",
    href: "#collections",
    image: images.footwear,
    alt: "Premium cognac and black leather footwear styled for the SAMT collection",
    icon: "footprints",
    featured: true,
    objectPosition: "center center",
  },
];

export const whySamt = [
  {
    title: "Affordable Luxury",
    description: "Quality fashion priced with real people in mind.",
    icon: "gem",
  },
  {
    title: "Curated Quality",
    description: "Every thrift piece is selected with care.",
    icon: "check-circle",
  },
  {
    title: "Unique Finds",
    description: "Discover pieces that stand apart from mass-produced fashion.",
    icon: "sparkles",
  },
  {
    title: "Custom Craftsmanship",
    description: "Get clothing made around your style and measurements.",
    icon: "scissors",
  },
] as const;
