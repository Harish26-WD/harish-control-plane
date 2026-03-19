import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Download, MapPin, Mail, Sparkles, ArrowRight } from "lucide-react"
import { ExperienceTimeline } from "@/features/about/components/experience-timeline"
import { SkillsVisualization } from "@/features/about/components/skills-visualization"
import { Certifications } from "@/features/about/components/certifications"
import { SITE_CONFIG } from "@/lib/constants"
import { FadeIn } from "@/components/animations/fade-in"
import { StatusIndicator } from "@/components/ui/status-indicator"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Harish Kumar S — a full-stack engineer specializing in real-time systems, IoT platforms, and high-performance dashboards.",
}

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] orb orb-primary opacity-[0.06] dark:opacity-[0.08] pointer-events-none" />
      <div className="absolute top-40 left-0 w-[350px] h-[350px] orb orb-accent opacity-[0.05] dark:opacity-[0.07] pointer-events-none" />
      <div className="absolute bottom-0 right-20 w-[400px] h-[400px] orb orb-secondary opacity-[0.04] dark:opacity-[0.06] pointer-events-none" />

      {/* Cosmic grid */}
      <div className="absolute inset-0 cosmic-grid opacity-[0.3] dark:opacity-[0.18] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* ── Hero Header ── */}
        <FadeIn className="mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-surface)]/80 mb-6 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest backdrop-blur-sm">
            <Sparkles size={11} className="text-[var(--gold)]" />
            About Me
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-[var(--text-primary)] mb-8 tracking-tight leading-[1.06]">
            Building systems that <span className="gradient-text-aurora">handle scale</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Bio tile */}
            <div className="lg:col-span-2 bento-tile p-7 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[var(--primary)]/30 via-[var(--accent)]/20 to-transparent" />

              {/* Avatar + text side by side */}
              <div className="flex gap-5 items-start mb-4">
                <div className="relative flex-shrink-0">
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-2 ring-[var(--border)]"
                    style={{ boxShadow: "0 0 24px -6px var(--glow)" }}
                  >
                    <Image
                      src="/images/avatar.jpg"
                      alt="Harish Kumar S"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                  </div>
                  {/* Online dot */}
                  <span
                    className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[var(--status-green)] border-2 border-[var(--bg-surface)]"
                    title="Available"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[var(--text-primary)]">Harish Kumar S</h2>
                  <p className="text-sm text-[var(--primary)] font-mono font-semibold">Full-Stack Engineer</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">@ Muthu Soft Labs · 5+ yrs</p>
                </div>
              </div>

              <p className="text-[var(--text-secondary)] leading-relaxed mb-4 text-base">
                I&apos;m a full-stack engineer specializing in real-time systems, IoT platforms, and
                high-performance dashboards. I work across banking, government, and industrial domains,
                building systems that handle thousands of live events reliably.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-base">
                Over 5+ years at Muthu Soft Labs, I&apos;ve delivered production systems for clients
                including Indian Overseas Bank and state government departments, with a consistent
                focus on performance, reliability, and clean code.
              </p>
            </div>

            {/* Info tile */}
            <div className="bento-tile p-7 flex flex-col justify-between relative overflow-hidden">
              {/* Inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent rounded-[1.5rem] pointer-events-none" />
              <div className="relative space-y-3 text-sm mb-5">
                <div className="flex items-center gap-2.5 text-[var(--text-secondary)]">
                  <div className="w-7 h-7 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={13} className="text-[var(--primary)]" />
                  </div>
                  Chennai, Tamil Nadu, India
                </div>
                <div className="flex items-center gap-2.5 text-[var(--text-secondary)]">
                  <div className="w-7 h-7 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={13} className="text-[var(--accent)]" />
                  </div>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[var(--primary)] transition-colors truncate">
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <StatusIndicator status="active" label={SITE_CONFIG.availabilityText} />
                </div>
              </div>
              <a
                href="/resume.pdf"
                download
                className="relative btn-primary justify-center"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </div>
        </FadeIn>

        {/* ── Experience ── */}
        <div className="mb-20">
          <ExperienceTimeline />
        </div>

        {/* ── Skills ── */}
        <div className="mb-20">
          <SkillsVisualization />
        </div>

        {/* ── Certifications ── */}
        <div className="mb-20">
          <Certifications />
        </div>

        {/* ── CTA ── */}
        <FadeIn>
          <div className="bento-tile glow-border p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/8 via-transparent to-[var(--accent)]/6 rounded-[1.5rem] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-surface)]/70 mb-4 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                <Sparkles size={11} className="text-[var(--gold)]" />
                Available Now
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mb-3">
                Want to work <span className="gradient-text">together?</span>
              </h3>
              <p className="text-[var(--text-secondary)] mb-7 max-w-sm mx-auto">
                I&apos;m open to full-time roles and freelance projects worldwide.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex group"
              >
                Get in touch
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
