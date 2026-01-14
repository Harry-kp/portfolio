"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent";
}

export default function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors",
        {
          "bg-surface border border-border text-text-secondary": variant === "default",
          "bg-accent/10 text-accent border border-accent/20": variant === "accent",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

