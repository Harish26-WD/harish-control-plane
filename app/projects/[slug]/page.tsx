import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { projects, getProjectBySlug } from "@/features/projects/data/projects"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animations/fade-in"
import { SITE_CONFIG } from "@/lib/constants"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${SITE_CONFIG.name}`,
      description: project.description,
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Back */}
      <FadeIn>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors mb-10 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to projects
        </Link>
      </FadeIn>

      {/* Header */}
      <FadeIn className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.category.map((cat) => (
            <Badge key={cat} variant="default">{cat}</Badge>
          ))}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-5 leading-tight">
          {project.title}
        </h1>
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          {project.description}
        </p>
      </FadeIn>

      {/* Impact Metrics — bento style */}
      <FadeIn delay={0.1} className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.impact.map((imp, i) => (
            <div key={imp.label} className={`bento-tile p-6 text-center bg-gradient-to-br ${i === 0 ? project.gradient : ''}`}>
              <div className="text-3xl font-bold font-mono text-[var(--primary)] mb-1">{imp.value}</div>
              <div className="text-sm text-[var(--text-secondary)]">{imp.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Tech Stack */}
      <FadeIn delay={0.15} className="mb-12">
        <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag-glow">{tech}</span>
          ))}
        </div>
      </FadeIn>

      {/* Problem / Solution — side by side bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <FadeIn delay={0.2}>
          <div className="bento-tile p-7 h-full">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-6 rounded-lg bg-red-500/10 flex items-center justify-center">
                <span className="text-red-500 text-xs font-bold">!</span>
              </div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">The Problem</h2>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{project.problem}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="bento-tile p-7 h-full">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-6 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-[var(--accent)]" />
              </div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">The Solution</h2>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{project.solution}</p>
          </div>
        </FadeIn>
      </div>

      {/* Features */}
      <FadeIn delay={0.3} className="mb-14">
        <h2 className="text-lg font-bold text-[var(--text-primary)] mb-6">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--primary)]/20 transition-all"
            >
              <CheckCircle2 size={15} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.35}>
        <div className="bento-tile p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-[var(--text-primary)] mb-1">Interested in similar work?</p>
            <p className="text-sm text-[var(--text-muted)]">Let&apos;s discuss your project requirements.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors whitespace-nowrap active:scale-[0.97]"
          >
            Get in touch
          </Link>
        </div>
      </FadeIn>
    </div>
  )
}
