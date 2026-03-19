"use client"

import { motion } from "framer-motion"
import { TECH_STACK } from "@/lib/constants"
import { Code2 } from "lucide-react"

const colorMap: Record<string, { dot: string; text: string; badge: string; glow: string }> = {
  blue:   { dot: "from-blue-400 to-blue-600",    text: "text-blue-400",    badge: "bg-blue-500/10 border-blue-500/20 text-blue-400",    glow: "from-blue-500/10" },
  purple: { dot: "from-purple-400 to-purple-600", text: "text-purple-400",  badge: "bg-purple-500/10 border-purple-500/20 text-purple-400", glow: "from-purple-500/10" },
  green:  { dot: "from-emerald-400 to-emerald-600", text: "text-emerald-400", badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400", glow: "from-emerald-500/10" },
  orange: { dot: "from-orange-400 to-orange-600", text: "text-orange-400",  badge: "bg-orange-500/10 border-orange-500/20 text-orange-400", glow: "from-orange-500/10" },
  cyan:   { dot: "from-cyan-400 to-cyan-600",    text: "text-cyan-400",    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",    glow: "from-cyan-500/10" },
  pink:   { dot: "from-pink-400 to-pink-600",    text: "text-pink-400",    badge: "bg-pink-500/10 border-pink-500/20 text-pink-400",    glow: "from-pink-500/10" },
}

export function SkillsVisualization() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-10"
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--primary)] flex items-center justify-center flex-shrink-0">
          <Code2 size={15} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">Skills</h2>
          <p className="text-sm text-[var(--text-secondary)] mt-0.5">Technologies across the full stack</p>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--border)] to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TECH_STACK.map((group, i) => {
          const c = colorMap[group.color]
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="bento-tile glow-border p-5 group relative"
            >
              {/* Gradient glow fill on hover */}
              <div className={`absolute inset-0 rounded-[1.5rem] bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

              {/* Category label */}
              <div className="relative flex items-center gap-2.5 mb-4">
                <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${c.dot} shadow-[0_2px_8px_-2px_currentColor] flex-shrink-0`} />
                <span className={`text-[10px] font-bold uppercase tracking-wider border rounded-md px-2 py-0.5 ${c.badge}`}>
                  {group.category}
                </span>
              </div>

              {/* Skills */}
              <div className="relative flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 + j * 0.03 + 0.1 }}
                    className="text-sm text-[var(--text-secondary)] px-2.5 py-1 rounded-lg bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--primary)]/40 hover:text-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
