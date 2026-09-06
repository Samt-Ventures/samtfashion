export type ProductCategory =
  | "Vintage & Thrift"
  | "Ladies Wear"
  | "Men's Wear"
  | "Baby Wear"
  | "Shoes"
  | "Custom Made";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number | null;
  currency: "NGN";
  image: string;
  description: string;
  available: boolean;
  featured: boolean;
  alt: string;
}

export interface Category {
  id: string;
  name: ProductCategory | string;
  description: string;
  href: string;
  image: string;
  alt: string;
  icon: string;
  featured?: boolean;
  /** CSS object-position for varied crops of the same asset */
  objectPosition?: string;
}
