import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "gold";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-container text-surface hover:bg-primary premium-shadow",
  secondary:
    "border-2 border-secondary-fixed-dim text-secondary hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-surface",
  ghost: "text-primary hover:text-secondary",
  gold: "bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary premium-shadow",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    variant = "primary",
    className,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-label tracking-widest transition-all duration-300",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...linkRest}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
