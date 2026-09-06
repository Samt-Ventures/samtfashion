import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAMT Ventures Ltd | Elegance While Evolving",
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SAMT Ventures Ltd | Elegance While Evolving",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/products/vintage-floral-shirt.jpg",
        width: 768,
        height: 1024,
        alt: "SAMT curated vintage fashion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAMT Ventures Ltd | Elegance While Evolving",
    description: siteConfig.description,
    images: ["/images/products/vintage-floral-shirt.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: siteConfig.name,
  alternateName: siteConfig.brand,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/logo.png`,
  slogan: siteConfig.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.location.address,
    addressLocality: `${siteConfig.location.city}, ${siteConfig.location.area}`,
    addressRegion: siteConfig.location.state,
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    addressCountry: "NG",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  priceRange: "₦₦",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-surface text-on-surface font-body antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-surface">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
