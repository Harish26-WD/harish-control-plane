"use client"

import { motion } from "framer-motion"
import { certifications } from "@/features/about/data/experience"
import { Award, CheckCircle2, ShieldCheck } from "lucide-react"

// Rotate icons for variety
const certIcons = [ShieldCheck, Award, CheckCircle2, ShieldCheck]

export function Certifications() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-10"
      >
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "linear-gradient(135deg, var(--gold), var(--pink))" }}
        >
          <Award size={15} className="text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-(--text-primary)">Certifications</h2>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, var(--border), transparent)" }} />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {certifications.map((cert, i) => {
          const Icon = certIcons[i % certIcons.length]
          return (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2 }}
              className="flex items-start gap-3 p-4 bento-tile glow-border group relative"
            >
              {/* Hover gradient fill */}
              <div
                className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--gold) 6%, transparent), transparent)" }}
              />
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative"
                style={{ background: "linear-gradient(135deg, var(--gold), var(--pink))", boxShadow: "0 4px 16px -4px rgba(245,158,11,0.35)" }}
              >
                <Icon size={16} className="text-white" />
              </div>
              <div className="min-w-0 relative">
                <h3 className="text-sm font-semibold text-(--text-primary) leading-tight mb-0.5">
                  {cert.name}
                </h3>
                <p className="text-xs text-(--text-muted)">{cert.issuer} &middot; {cert.year}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
