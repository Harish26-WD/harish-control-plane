"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { NAV_LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
      >
        <Menu size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed right-0 top-0 h-full w-72 z-50 bg-[var(--bg-surface)] border-l border-[var(--border)] p-6 flex flex-col md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold text-lg text-[var(--text-primary)]">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <ul className="space-y-1">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                          active
                            ? "bg-[var(--primary-muted)] text-[var(--primary)]"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
