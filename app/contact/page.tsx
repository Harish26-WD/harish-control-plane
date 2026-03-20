import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Linkedin, Github, MapPin, Sparkles, ArrowUpRight, Phone } from "lucide-react"
import { ContactForm } from "@/features/contact/components/contact-form"
import { StatusIndicator } from "@/components/ui/status-indicator"
import { FadeIn } from "@/components/animations/fade-in"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Harish Kumar S for hiring, freelance, or collaboration inquiries.",
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
  keywords: ["hire full-stack engineer", "contact Harish Kumar", "freelance developer India", "software engineer for hire"],
}

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-10 right-0 w-[450px] h-[450px] orb orb-primary opacity-[0.06] dark:opacity-[0.09] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] orb orb-accent opacity-[0.05] dark:opacity-[0.07] pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-[0.3] dark:opacity-[0.18] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* Header */}
        <FadeIn className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-surface)]/80 mb-6 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest backdrop-blur-sm">
            <Sparkles size={11} className="text-[var(--gold)]" />
            Contact
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-4 tracking-tight leading-[1.04]">
            Let&apos;s work{" "}
            <span className="gradient-text-aurora">together</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact info */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="space-y-4 sticky top-24">
              {/* Status tile */}
              <div className="bento-tile p-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--status-green)]/8 to-transparent rounded-[1.5rem] pointer-events-none" />
                <div className="relative flex items-center gap-3 mb-2">
                  <StatusIndicator status="active" />
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    {SITE_CONFIG.availabilityText}
                  </span>
                </div>
                <p className="relative text-xs text-[var(--text-muted)] pl-5">
                  Typically responds within 24 hours
                </p>
              </div>

              {/* Direct contact */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider px-1">Direct contact</p>

                {[
                  {
                    href: `mailto:${SITE_CONFIG.email}`,
                    icon: Mail,
                    label: "Email",
                    value: SITE_CONFIG.email,
                    gradient: "from-[var(--primary)] to-[var(--secondary)]",
                    glow: "var(--glow)",
                  },
                  {
                    href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`,
                    icon: Phone,
                    label: "Phone",
                    value: SITE_CONFIG.phone,
                    gradient: "from-emerald-500 to-teal-600",
                    glow: "rgba(16,185,129,0.3)",
                  },
                  {
                    href: SITE_CONFIG.linkedin,
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "harishkumar-s",
                    gradient: "from-blue-500 to-blue-600",
                    glow: "rgba(59,130,246,0.3)",
                    external: true,
                  },
                  {
                    href: SITE_CONFIG.github,
                    icon: Github,
                    label: "GitHub",
                    value: "harishkumar-s",
                    gradient: "from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-500",
                    glow: "rgba(100,116,139,0.2)",
                    external: true,
                  },
                ].map(({ href, icon: Icon, label, value, gradient, external }) => (
                  <Link
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 p-4 bento-tile glow-border group"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={16} className="text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors truncate">
                        {value}
                      </p>
                    </div>
                    <ArrowUpRight size={14} className="text-[var(--text-muted)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  </Link>
                ))}

                {/* Location */}
                <div className="flex items-center gap-3 p-4 bento-tile">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent)] to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Location</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Chennai, India</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.2} className="lg:col-span-3">
            <div className="bento-tile p-7 sm:p-9 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]" />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/4 to-transparent rounded-[1.5rem] pointer-events-none" />
              <div className="relative">
                <div className="mb-6">
                  <h2 className="text-2xl font-black text-[var(--text-primary)]">Send a message</h2>
                  <p className="text-sm text-[var(--text-muted)] mt-1">I&apos;ll reply within 24 hours</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
