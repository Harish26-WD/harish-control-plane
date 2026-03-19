"use client"

import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: ReactNode
  asChild?: boolean
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        // variants
        variant === "primary" &&
          "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] active:scale-[0.98] shadow-sm",
        variant === "outline" &&
          "border border-[var(--border)] text-[var(--text-primary)] bg-transparent hover:bg-[var(--bg-surface-hover)] active:scale-[0.98]",
        variant === "ghost" &&
          "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] active:scale-[0.98]",
        // sizes
        size === "sm" && "text-sm px-3 py-1.5",
        size === "md" && "text-sm px-4 py-2",
        size === "lg" && "text-base px-6 py-3",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
