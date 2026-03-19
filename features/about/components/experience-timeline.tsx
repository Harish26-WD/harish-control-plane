"use client"

import { motion } from "framer-motion"
import { StatusIndicator } from "@/components/ui/status-indicator"
import { experiences } from "@/features/about/data/experience"
import { GraduationCap, Briefcase, ChevronRight } from "lucide-react"

export function ExperienceTimeline() {
  return (
    <section className="relative">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-10"
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center flex-shrink-0">
          <Briefcase size={15} className="text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">Experience</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--border)] to-transparent" />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)]/60 via-[var(--border)] to-transparent hidden sm:block" />

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-4 sm:gap-6 group"
            >
              {/* Timeline node */}
              <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center z-10 transition-all duration-300 ${
                  exp.current
                    ? "bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] shadow-[0_0_20px_-4px_var(--glow)]"
                    : "bg-[var(--bg-surface)] border border-[var(--border)] group-hover:border-[var(--primary)]/40"
                }`}>
                  <Briefcase size={16} className={exp.current ? "text-white" : "text-[var(--text-muted)]"} />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 bento-tile glow-border p-6 sm:p-7 group-hover:border-[var(--primary)]/30 transition-all">
                {/* Inner gradient glow */}
                {exp.current && (
                  <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-[var(--primary)]/5 to-transparent pointer-events-none" />
                )}

                <div className="relative flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">{exp.role}</h3>
                      {exp.current && <StatusIndicator status="active" label="Current" />}
                    </div>
                    <p className="text-[var(--primary)] font-semibold text-sm">{exp.company}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{exp.location}</p>
                  </div>
                  <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-surface-hover)] px-3 py-1.5 rounded-lg border border-[var(--border)] whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="relative text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">{exp.description}</p>

                <ul className="relative space-y-2">
                  {exp.achievements.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                      <ChevronRight size={13} className="mt-0.5 text-[var(--primary)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-4 sm:gap-6 group"
          >
            {/* Timeline node */}
            <div className="hidden sm:flex flex-col items-center flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center z-10 group-hover:border-[var(--accent)]/40 transition-colors">
                <GraduationCap size={16} className="text-[var(--accent)]" />
              </div>
            </div>

            {/* Card */}
            <div className="flex-1 bento-tile p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="sm:hidden w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-0.5">
                      Bachelor of Computer Applications
                    </h3>
                    <p className="text-[var(--accent)] font-semibold text-sm">St. Thomas College of Arts and Science</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">Chennai, India</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-surface-hover)] px-3 py-1.5 rounded-lg border border-[var(--border)]">
                  2020
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
