import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  variant?: "default" | "outline" | "accent" | "category"
  className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors",
        variant === "default" &&
          "bg-[var(--primary-muted)] text-[var(--primary)]",
        variant === "outline" &&
          "border border-[var(--border)] text-[var(--text-secondary)] bg-transparent",
        variant === "accent" &&
          "bg-[var(--accent-muted)] text-[var(--accent)]",
        variant === "category" &&
          "bg-[var(--bg-surface-hover)] text-[var(--text-muted)] border border-[var(--border)]",
        className
      )}
    >
      {children}
    </span>
  )
}
