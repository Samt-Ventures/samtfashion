import type { Product } from "@/types/product";

/** Real SAMT product photography for men's / vintage. */
export const products: Product[] = [
  {
    id: "vintage-floral-shirt",
    name: "Vintage Floral Camp Shirt",
    category: "Vintage & Thrift",
    price: 18500,
    currency: "NGN",
    image: "/images/products/vintage-floral-shirt.jpg",
    description:
      "Curated vintage short-sleeve camp shirt with a vibrant meadow print at the hem and sleeves. A one-of-a-kind thrift find styled for modern everyday elegance.",
    available: true,
    featured: true,
    alt: "SAMT curated vintage floral camp shirt on mannequin in boutique showroom with forest green and gold brand signage",
  },
  {
    id: "vintage-grid-shirt",
    name: "Metallic Grid Camp Shirt",
    category: "Men's Wear",
    price: 16500,
    currency: "NGN",
    image: "/images/products/vintage-grid-shirt.jpg",
    description:
      "Black short-sleeve camp collar shirt with a subtle metallic grid texture. Lightweight and versatile for confident everyday style.",
    available: true,
    featured: true,
    alt: "SAMT metallic grid patterned black camp shirt on mannequin beside folded inventory and brand plaque",
  },
];

export const featuredProducts = products.filter((p) => p.featured);

/**
 * Category & section imagery.
 * Men's / vintage use real SAMT photos; other categories use dedicated generated assets.
 */
export const images = {
  logo: "/images/logo.png",
  hero: "/images/products/vintage-floral-shirt.jpg",
  brandStory: "/images/products/custom-made.jpg",
  customCollection: "/images/products/custom-made.jpg",
  luxuryThrift: "/images/products/vintage-floral-shirt.jpg",
  mensWear: "/images/products/vintage-grid-shirt.jpg",
  ladiesWear: "/images/products/ladies-wear.jpg",
  babyWear: "/images/products/baby-wear.jpg",
  footwear: "/images/products/footwear.jpg",
  editorialA: "/images/products/vintage-floral-shirt.jpg",
  editorialB: "/images/products/vintage-grid-shirt.jpg",
} as const;
