"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react"
import { getFeaturedProjects } from "@/features/projects/data/projects"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/types"

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block bento-tile glow-border overflow-hidden relative h-full flex flex-col"
      >
        {/* Gradient accent bar */}
        <div className={`h-[3px] w-full bg-gradient-to-r ${project.gradient}`} />

        {/* Shine sweep on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
          <div className="absolute -inset-full top-0 h-full w-[40%] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
        </div>

        <div className="p-6 sm:p-8 relative flex flex-col flex-1">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.category.map((cat) => (
              <Badge key={cat} variant="category">{cat}</Badge>
            ))}
          </div>

          {/* Title + arrow */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors leading-tight">
              {project.title}
            </h3>
            <div className="w-9 h-9 rounded-xl border border-[var(--border)] flex items-center justify-center flex-shrink-0 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[var(--primary)] group-hover:to-[var(--secondary)] group-hover:text-white text-[var(--text-muted)] transition-all duration-300 shadow-sm">
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed line-clamp-2">
            {project.subtitle}
          </p>

          {/* Impact metrics */}
          <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-[var(--border)]/60">
            {project.impact.map((imp) => (
              <div key={imp.label} className="flex flex-col">
                <div className="flex items-center gap-1 mb-0.5">
                  <TrendingUp size={10} className="text-[var(--accent)] flex-shrink-0" />
                  <div className="text-base sm:text-lg font-black font-mono text-[var(--text-primary)] truncate">{imp.value}</div>
                </div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[var(--text-muted)] leading-tight whitespace-normal">{imp.label}</div>
              </div>
            ))}
          </div>

          {/* Tech stack — pushes to bottom */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.techStack.slice(0, 5).map((tech) => (
              <span key={tech} className="tag-glow">{tech}</span>
            ))}
            {project.techStack.length > 5 && (
              <span className="tag-glow">+{project.techStack.length - 5}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function FeaturedProjects() {
  const featured = getFeaturedProjects()

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      {/* Static ambient orbs — no scroll parallax to reduce jank */}
      <div className="absolute top-24 right-[-80px] w-[500px] h-[500px] orb orb-secondary opacity-[0.06] dark:opacity-[0.08]" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] orb orb-accent opacity-[0.05] dark:opacity-[0.07]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] mb-4 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] animate-pulse-dot" />
              Selected Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] leading-tight">
              Featured <span className="gradient-text-warm">Projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-[var(--primary)] font-semibold hover:gap-3 transition-all line-decoration group"
          >
            View all projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--primary)] font-semibold"
          >
            View all projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
