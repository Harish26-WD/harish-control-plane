"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Sparkles, Zap, Globe } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative bento-tile glow-border overflow-hidden"
        >
          {/* Static orbs inside CTA */}
          <div className="absolute -top-24 -left-24 w-[350px] h-[350px] orb orb-primary opacity-[0.12] dark:opacity-[0.15]" />
          <div className="absolute -bottom-24 -right-16 w-[300px] h-[300px] orb orb-accent opacity-[0.10] dark:opacity-[0.12]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] orb orb-secondary opacity-[0.07] dark:opacity-[0.10]" />

          {/* Cosmic grid overlay */}
          <div className="absolute inset-0 cosmic-grid opacity-[0.3] dark:opacity-[0.2] pointer-events-none" />

          {/* Gradient border top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]" />

          {/* Content */}
          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-surface)]/80 border border-[var(--border)] mb-6 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest backdrop-blur-sm"
            >
              <Sparkles size={11} className="text-[var(--gold)]" />
              Open to Opportunities
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-5 leading-[1.05] tracking-tight"
            >
              Let&apos;s build something
              <br />
              <span className="gradient-text-aurora">extraordinary</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[var(--text-secondary)] max-w-xl mx-auto mb-10 text-lg leading-relaxed"
            >
              Looking for a developer who specializes in real-time systems, dashboards, and
              enterprise applications? I&apos;d love to hear about your project.
            </motion.p>

            {/* Stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="flex items-center justify-center gap-8 mb-10 flex-wrap"
            >
              {[
                { icon: Globe, label: "Remote-Ready", color: "text-[var(--accent)]" },
                { icon: Zap, label: "Fast Delivery", color: "text-[var(--gold)]" },
                { icon: Sparkles, label: "Clean Code", color: "text-[var(--secondary)]" },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                  <Icon size={14} className={color} />
                  {label}
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact" className="btn-primary group">
                <Mail size={16} />
                Get in touch
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/projects" className="btn-ghost group">
                View my work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
