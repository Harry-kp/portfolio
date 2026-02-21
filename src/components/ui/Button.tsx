"use client";

import { cn } from "@/lib/utils";
import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const buttonStyles = (variant: string, size: string) =>
  cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none",
    {
      "bg-accent text-black hover:bg-accent-hover shadow-sm hover:shadow-md":
        variant === "primary",
      "border border-border text-text-primary hover:border-accent/40 hover:text-accent":
        variant === "secondary",
      "text-text-secondary hover:text-text-primary":
        variant === "ghost",
    },
    {
      "px-3.5 py-1.5 text-sm": size === "sm",
      "px-5 py-2.5 text-sm": size === "md",
      "px-7 py-3 text-base": size === "lg",
    }
  );

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    const styles = cn(buttonStyles(variant, size), className);

    if ("href" in props && props.href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={styles}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={styles}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
