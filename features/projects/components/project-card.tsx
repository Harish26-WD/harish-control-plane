"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/types"

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, scale: 1.01 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block h-full bento-tile glow-border overflow-hidden relative"
      >
        {/* Gradient accent bar */}
        <div className={`h-[3px] w-full bg-gradient-to-r ${project.gradient}`} />

        {/* Sweep shine */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
          <div className="absolute -inset-full top-0 h-full w-[45%] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
        </div>

        <div className="p-6 sm:p-7 relative">
          {/* Category badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.category.map((cat) => (
              <Badge key={cat} variant="category">{cat}</Badge>
            ))}
          </div>

          {/* Title + arrow */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors leading-tight">
              {project.title}
            </h3>
            <div className="w-8 h-8 rounded-xl border border-[var(--border)] flex items-center justify-center flex-shrink-0 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[var(--primary)] group-hover:to-[var(--secondary)] group-hover:text-white text-[var(--text-muted)] transition-all duration-300">
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <p className="text-sm text-[var(--text-secondary)] mb-5 line-clamp-2 leading-relaxed">
            {project.subtitle}
          </p>

          {/* Impact metrics strip */}
          <div className="flex gap-4 mb-5 pb-5 border-b border-[var(--border)]/60">
            {project.impact.map((imp) => (
              <div key={imp.label} className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-0.5">
                  <TrendingUp size={10} className="text-[var(--accent)] flex-shrink-0" />
                  <div className="text-base font-black font-mono text-[var(--text-primary)]">{imp.value}</div>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] truncate">{imp.label}</div>
              </div>
            ))}
          </div>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="tag-glow">{tech}</span>
            ))}
            {project.techStack.length > 4 && (
              <span className="tag-glow">+{project.techStack.length - 4}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
