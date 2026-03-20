import type { Metadata } from "next"
import { SITE_CONFIG } from "@/lib/constants"
import { projects } from "@/features/projects/data/projects"
import { ProjectCard } from "@/features/projects/components/project-card"
import { FadeIn } from "@/components/animations/fade-in"
import { Layers, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies of enterprise systems I've built — real-time IoT platforms, analytics dashboards, and cloud-native applications.",
  alternates: { canonical: `${SITE_CONFIG.url}/projects` },
  keywords: ["IoT projects", "real-time dashboard", "SaaS platform", "enterprise software", "Next.js projects"],
}

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] orb orb-primary opacity-[0.06] dark:opacity-[0.09] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[380px] h-[380px] orb orb-secondary opacity-[0.05] dark:opacity-[0.07] pointer-events-none" />
      <div className="absolute inset-0 cosmic-grid opacity-[0.3] dark:opacity-[0.18] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <FadeIn className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-surface)]/80 mb-6 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest backdrop-blur-sm">
            <Layers size={11} className="text-[var(--primary)]" />
            My Work
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-4 tracking-tight leading-[1.04]">
            <span className="gradient-text-warm">Projects</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Production systems built for enterprise clients across banking, government, and industrial
            sectors. Each project showcases real-world problems solved at scale.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { label: "Total Projects", value: `${projects.length}` },
              { label: "Industries", value: "3+" },
              { label: "Uptime", value: "99.9%" },
            ].map(({ label, value }) => (
              <div key={label} className="bento-tile px-5 py-3 flex items-center gap-3">
                <Sparkles size={13} className="text-[var(--primary)]" />
                <span className="text-lg font-black font-mono gradient-text">{value}</span>
                <span className="text-xs text-[var(--text-muted)]">{label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
