"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { MobileNav } from "./mobile-nav"
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { StatusIndicator } from "@/components/ui/status-indicator"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Directly update DOM for progress bar — avoids React re-render on every scroll
      if (progressRef.current) {
        const totalH = document.documentElement.scrollHeight - window.innerHeight
        const pct = totalH > 0 ? (window.scrollY / totalH) * 100 : 0
        progressRef.current.style.width = `${pct}%`
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        scrolled ? "glass nav-scrolled" : "bg-transparent"
      )}
    >
      {/* Scroll progress bar — updated via ref, zero re-renders */}
      <div
        ref={progressRef}
        className="absolute bottom-0 left-0 h-[2px] rounded-full pointer-events-none transition-none"
        style={{
          width: "0%",
          background: "linear-gradient(90deg, var(--primary), var(--secondary), var(--accent))",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px]">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Harish Kumar S - Home"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden shrink-0">
              {/* Spinning gradient ring */}
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, var(--primary), var(--secondary), var(--accent))",
                  animation: "spin-slow 12s linear infinite",
                }}
              />
              <div className="absolute inset-[2px] bg-(--bg-surface) rounded-[9px] flex items-center justify-center">
                <span className="text-xs font-black tracking-tight gradient-text select-none">HK</span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-bold text-sm text-(--text-primary) group-hover:text-(--primary) transition-colors">
                Harish Kumar S
              </span>
              <span className="text-[10px] text-(--text-muted) font-mono">Full-Stack Engineer</span>
            </div>
          </Link>

          {/* ── Desktop Nav pill ── */}
          <nav
            className="hidden md:flex items-center gap-0.5 p-1.5 rounded-2xl bg-(--bg-surface)/60 border border-(--border)/50 backdrop-blur-xl"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 select-none",
                    active
                      ? "text-white"
                      : "text-(--text-muted) hover:text-(--text-primary) hover:bg-(--bg-surface-hover)"
                  )}
                  style={
                    active
                      ? {
                          background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                          boxShadow: "0 2px 16px -4px var(--glow)",
                        }
                      : undefined
                  }
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* ── Right side ── */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-(--bg-surface)/50 border border-(--border)/40 backdrop-blur-sm">
              <StatusIndicator
                status="active"
                label={SITE_CONFIG.availabilityText}
              />
            </div>
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
