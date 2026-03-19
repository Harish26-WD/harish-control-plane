"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
}

export function Card({ children, className, hover = true, glass = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -2, scale: 1.005 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-xl border border-[var(--border)] p-6 transition-shadow duration-200",
        glass ? "glass" : "bg-[var(--bg-surface)]",
        hover && "hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30 cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
