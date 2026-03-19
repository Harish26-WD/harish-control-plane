import Link from "next/link"
import { ArrowUpRight, Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import type { BlogPost } from "@/types"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bento-tile glow-border overflow-hidden relative"
    >
      {/* Shine sweep */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
        <div className="absolute -inset-full top-0 h-full w-[40%] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
      </div>

      <div className="p-6 sm:p-7 relative">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="category">{tag}</Badge>
            ))}
          </div>
          <div className="w-8 h-8 rounded-xl border border-[var(--border)] flex items-center justify-center flex-shrink-0 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[var(--primary)] group-hover:to-[var(--secondary)] group-hover:text-white text-[var(--text-muted)] transition-all duration-300">
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary)] transition-colors leading-tight">
          {post.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mb-5 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] pt-4 border-t border-[var(--border)]/60">
          <span className="flex items-center gap-1.5">
            <Calendar size={11} className="text-[var(--primary)]" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={11} className="text-[var(--accent)]" />
            {post.readingTime}
          </span>
        </div>
      </div>
    </Link>
  )
}
