"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUpRight, Zap } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[var(--border)]/60 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-primary opacity-[0.06] w-96 h-96 -bottom-32 -left-16" />
        <div className="orb orb-accent opacity-[0.05] w-72 h-72 -bottom-20 right-20" />
      </div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left - branding */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]" />
                <div className="absolute inset-[2px] bg-[var(--bg-surface)] rounded-[9px] flex items-center justify-center">
                  <span className="text-xs font-black tracking-tight gradient-text">HK</span>
                </div>
              </div>
              <div>
                <p className="font-bold text-sm text-[var(--text-primary)]">Harish Kumar S</p>
                <p className="text-xs text-[var(--text-muted)] font-mono">Full-Stack Engineer</p>
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs">
              Building real-time systems &amp; dashboards that scale for enterprise clients worldwide.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
              <Zap size={11} className="text-[var(--accent)]" />
              Available for new projects
            </div>
          </div>

          {/* Center - nav links */}
          <div className="flex flex-col gap-3 md:items-center">
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1">Explore</p>
            {["About", "Projects", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="flex items-center gap-1 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors group w-fit"
              >
                {item}
                <ArrowUpRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ))}
          </div>

          {/* Right - social + meta */}
          <div className="flex flex-col gap-4 md:items-end">
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1">Connect</p>
            <div className="flex items-center gap-2">
              {[
                { href: SITE_CONFIG.github, icon: Github, label: "GitHub" },
                { href: SITE_CONFIG.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${SITE_CONFIG.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="group w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--border)] text-[var(--text-muted)] hover:text-white hover:border-transparent hover:bg-gradient-to-br hover:from-[var(--primary)] hover:to-[var(--secondary)] transition-all duration-300 hover:shadow-[0_4px_20px_-4px_var(--glow)]"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
            <div className="text-right">
              <p className="text-xs text-[var(--text-muted)]">
                &copy; {year} Harish Kumar S
              </p>
              <p className="text-[10px] text-[var(--text-muted)] mt-0.5 font-mono">
                Next.js &middot; Vercel &middot; 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
