export const siteConfig = {
  name: "SAMT Ventures Ltd",
  brand: "SAMT",
  tagline: "Elegance While Evolving",
  motto: "Growing Dreams, Creating Value",
  eyebrow: "Contemporary African Luxury",
  description:
    "Discover affordable luxury fashion at SAMT Ventures Ltd. Shop curated vintage and thrift clothing, ready-to-wear fashion, custom-made outfits, baby wear, ladies wear, men's fashion, shoes and more in Ogijo, Ikorodu, Lagos.",
  mission: "Make quality fashion affordable to everyone.",
  valueDriver:
    "Drives modern fashion retail through curated unisex thrift apparel, delivering accessible luxury under the SAMT elegance umbrella.",
  url: "https://samtventures.com",
  location: {
    address: "7 Mujibat Bada, Agodo Cele 2",
    city: "Ogijo",
    area: "Ikorodu",
    state: "Lagos",
    country: "Nigeria",
    full: "7 Mujibat Bada, Agodo Cele 2, Ogijo, Ikorodu, Lagos, Nigeria",
  },
  hours: {
    weekday: "Mon – Sat: 10:00 AM – 7:00 PM",
    sunday: "Sunday: By Appointment Only",
  },
  logo: "/images/logo.png",
  keywords: [
    "SAMT Ventures",
    "SAMT fashion",
    "Ogijo fashion",
    "Ikorodu fashion",
    "Lagos thrift clothes",
    "vintage clothing Nigeria",
    "affordable luxury Nigeria",
    "custom clothing Lagos",
    "unisex fashion Nigeria",
    "thrift fashion Nigeria",
  ],
} as const;

export const navigation = {
  desktop: [
    { label: "Home", href: "#" },
    { label: "Collections", href: "#collections" },
    { label: "Custom Wear", href: "#custom-wear" },
    { label: "Vintage", href: "#vintage" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  mobile: [
    { label: "Home", href: "#", icon: "home" },
    { label: "Collections", href: "#collections", icon: "sparkles" },
    { label: "Custom Wear", href: "#custom-wear", icon: "scissors" },
    { label: "Vintage", href: "#vintage", icon: "recycle" },
    { label: "About", href: "#about", icon: "info" },
    { label: "Contact", href: "#contact", icon: "mail" },
  ],
  primaryCta: { label: "Shop Now", href: "#collections" },
} as const;
