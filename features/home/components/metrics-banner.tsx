"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { TrendingUp, Users, Clock, Activity, Zap } from "lucide-react"

const metrics = [
  {
    icon: Clock,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Enterprise production systems",
    gradient: "from-[var(--primary)] to-[var(--secondary)]",
    glow: "var(--glow)",
    bgFrom: "from-[var(--primary)]/15",
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "Users Served",
    description: "Across all platforms",
    gradient: "from-purple-500 to-pink-500",
    glow: "rgba(168,85,247,0.2)",
    bgFrom: "from-purple-500/15",
  },
  {
    icon: TrendingUp,
    value: 40,
    suffix: "%",
    label: "Faster APIs",
    description: "Average optimization gain",
    gradient: "from-emerald-500 to-cyan-500",
    glow: "rgba(16,185,129,0.2)",
    bgFrom: "from-emerald-500/15",
  },
  {
    icon: Activity,
    value: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Uptime",
    description: "AWS-deployed systems",
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.2)",
    bgFrom: "from-amber-500/15",
  },
]

export function MetricsBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const x = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <section ref={ref} className="py-16 sm:py-20 relative overflow-hidden">
      {/* Animated diagonal stripe */}
      <motion.div
        style={{ x }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[120px] bg-gradient-to-r from-transparent via-[var(--primary)]/[0.04] dark:via-[var(--primary)]/[0.07] to-transparent -rotate-2" />
      </motion.div>

      {/* Top + bottom gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
            <Zap size={11} className="text-[var(--accent)]" />
            Impact by the numbers
          </div>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 32, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bento-tile glow-border p-6 group relative overflow-hidden"
              >
                {/* Gradient background fill on hover */}
                <div className={`absolute inset-0 rounded-[1.5rem] bg-gradient-to-br ${m.bgFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none`} />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${m.gradient} flex items-center justify-center mb-5 shadow-[0_4px_20px_-6px_${m.glow}] group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>

                  {/* Value */}
                  <div className={`text-4xl lg:text-5xl font-black font-mono mb-2 bg-gradient-to-br ${m.gradient} bg-clip-text text-transparent`}>
                    <AnimatedCounter
                      target={m.value}
                      suffix={m.suffix}
                      decimals={(m as { decimals?: number }).decimals ?? 0}
                      duration={2200}
                    />
                  </div>

                  <div className="text-sm font-bold text-[var(--text-primary)] mb-0.5">{m.label}</div>
                  <div className="text-xs text-[var(--text-muted)]">{m.description}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
