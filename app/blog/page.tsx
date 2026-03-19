import type { Metadata } from "next"
import { getAllBlogPosts } from "@/lib/mdx"
import { BlogCard } from "@/features/blog/components/blog-card"
import { FadeIn } from "@/components/animations/fade-in"
import { BookOpen, PenTool } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles on real-time systems, SQL optimization, IoT architecture, and full-stack development.",
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="relative overflow-hidden">
      {/* BG elements */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] orb orb-primary opacity-[0.06] dark:opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[350px] h-[350px] orb orb-secondary opacity-[0.05] dark:opacity-[0.07] pointer-events-none" />
      <div className="absolute inset-0 cosmic-grid opacity-[0.25] dark:opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <FadeIn className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-surface)]/80 mb-6 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest backdrop-blur-sm">
            <PenTool size={11} className="text-[var(--primary)]" />
            Writing
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-4 tracking-tight leading-[1.04]">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
            Technical deep-dives on real-time systems, performance optimization, and lessons from
            building enterprise applications.
          </p>
        </FadeIn>

        {posts.length === 0 ? (
          <div className="bento-tile glow-border p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/6 to-transparent rounded-[1.5rem] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mx-auto mb-5 shadow-[0_8px_32px_-8px_var(--glow)]">
                <BookOpen size={24} className="text-white" />
              </div>
              <p className="text-[var(--text-primary)] font-bold text-xl mb-2">Coming Soon</p>
              <p className="text-[var(--text-muted)] font-mono text-sm">
                Technical posts are being drafted...
              </p>
              <div className="flex justify-center gap-1.5 mt-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse-dot"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.06}>
                <BlogCard post={post} />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
