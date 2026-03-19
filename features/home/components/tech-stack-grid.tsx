"use client"

import { motion } from "framer-motion"
import { TECH_STACK } from "@/lib/constants"


const categoryGradients: Record<string, { border: string; text: string; glow: string; badge: string }> = {
  blue:   { border: "hover:border-blue-500/40",    text: "text-blue-400",    glow: "from-blue-500/10",    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  purple: { border: "hover:border-purple-500/40",  text: "text-purple-400",  glow: "from-purple-500/10",  badge: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  green:  { border: "hover:border-emerald-500/40", text: "text-emerald-400", glow: "from-emerald-500/10", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  orange: { border: "hover:border-orange-500/40",  text: "text-orange-400",  glow: "from-orange-500/10",  badge: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  cyan:   { border: "hover:border-cyan-500/40",    text: "text-cyan-400",    glow: "from-cyan-500/10",    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  pink:   { border: "hover:border-pink-500/40",    text: "text-pink-400",    glow: "from-pink-500/10",    badge: "bg-pink-500/10 text-pink-400 border-pink-500/20" },
}

export function TechStackGrid() {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      {/* Static ambient orbs */}
      <div className="orb orb-primary absolute w-[600px] h-[600px] top-1/4 -left-32 opacity-[0.07] dark:opacity-[0.09]" />
      <div className="orb orb-accent absolute w-[400px] h-[400px] bottom-0 right-0 opacity-[0.06] dark:opacity-[0.08]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] mb-5 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse-dot" />
            Technology Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] mb-4 leading-tight">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            Technologies I use to build performant, scalable systems from IoT to cloud
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_STACK.map((group, i) => {
            const c = categoryGradients[group.color]
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className={`bento-tile glow-border p-6 group relative ${c.border} transition-all duration-350`}
              >
                {/* Top inner gradient on hover */}
                <div className={`absolute inset-0 rounded-[1.5rem] bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none`} />

                {/* Header */}
                <div className="relative flex items-center gap-3 mb-5">
                  <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${c.badge}`}>
                    {group.category}
                  </div>
                </div>

                {/* Items */}
                <div className="relative flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 + j * 0.03 + 0.1 }}
                      className="text-sm text-[var(--text-secondary)] px-3 py-1.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--primary)]/40 hover:text-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
