"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Home, Sparkles, Scissors, Recycle, Info, Mail } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const mobileIcons = {
  home: Home,
  sparkles: Sparkles,
  scissors: Scissors,
  recycle: Recycle,
  info: Info,
  mail: Mail,
} as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        id="main-header"
        className={cn(
          "fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300",
          scrolled ? "bg-surface/95 shadow-sm" : "bg-surface/80",
        )}
      >
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-5 w-full max-w-container-max mx-auto">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            className="md:hidden text-primary opacity-80 hover:opacity-100 transition-opacity"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-7" />
          </button>

          <a href="#" className="flex items-center gap-3">
            <Image
              src={siteConfig.logo}
              alt="SAMT Ventures Ltd logo"
              width={88}
              height={104}
              className="h-12 w-auto object-contain bg-transparent"
              priority
            />
            <span className="font-display text-xl text-primary tracking-tighter hidden md:block">
              SAMT VENTURES
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navigation.desktop.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "font-label tracking-widest py-2 transition-colors duration-300",
                  index === 0
                    ? "text-primary border-b-2 border-secondary"
                    : "text-on-surface-variant hover:text-secondary-fixed-dim",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            href={navigation.primaryCta.href}
            className="hidden md:inline-flex px-6 py-3"
          >
            {navigation.primaryCta.label}
          </Button>

          <div className="w-7 md:hidden" aria-hidden />
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[55] bg-primary/40 backdrop-blur-sm transition-opacity md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-surface border-r border-outline-variant shadow-xl transition-transform duration-300 ease-in-out z-[60] flex flex-col p-8 gap-6 md:hidden rounded-r-xl",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="font-display text-2xl text-primary">SAMT VENTURES</span>
          <button
            type="button"
            aria-label="Close menu"
            className="text-on-surface-variant hover:text-primary"
            onClick={() => setOpen(false)}
          >
            <X className="size-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-2 flex-grow" aria-label="Mobile">
          {navigation.mobile.map((item) => {
            const Icon = mobileIcons[item.icon];
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all duration-300 font-display text-xl py-3 rounded-lg px-2 -mx-2"
              >
                <Icon className="size-5 shrink-0" aria-hidden />
                {item.label}
              </a>
            );
          })}
        </nav>

        <Button href="#collections" onClick={() => setOpen(false)} className="w-full">
          Shop Now
        </Button>
      </div>
    </>
  );
}
