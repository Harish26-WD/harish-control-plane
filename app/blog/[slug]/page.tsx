import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/mdx"
import { mdxComponents } from "@/features/blog/components/mdx-components"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animations/fade-in"
import { JsonLd } from "@/components/seo/json-ld"
import { formatDate } from "@/lib/utils"
import { SITE_CONFIG } from "@/lib/constants"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = getBlogPostBySlug(slug)
  if (!data) return {}
  const { frontmatter: fm } = data
  const canonicalUrl = `${SITE_CONFIG.url}/blog/${slug}`
  return {
    title: fm.title,
    description: fm.description,
    alternates: { canonical: canonicalUrl },
    keywords: fm.tags ?? [],
    openGraph: {
      type: "article",
      title: `${fm.title} | ${SITE_CONFIG.name}`,
      description: fm.description,
      url: canonicalUrl,
      publishedTime: fm.date,
      authors: [SITE_CONFIG.name],
      tags: fm.tags,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const data = getBlogPostBySlug(slug)
  if (!data) notFound()

  const { frontmatter: fm, content } = data

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: fm.title,
    description: fm.description,
    author: { "@type": "Person", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    datePublished: fm.date,
    dateModified: fm.date,
    url: `${SITE_CONFIG.url}/blog/${slug}`,
    keywords: fm.tags?.join(", "),
    publisher: {
      "@type": "Person",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <JsonLd data={blogPostingSchema} />
      <FadeIn>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors mb-10 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to blog
        </Link>
      </FadeIn>

      {/* Header */}
      <FadeIn className="mb-10">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {fm.tags?.map((tag: string) => (
            <Badge key={tag} variant="category">{tag}</Badge>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-5">
          {fm.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] p-4 bento-tile">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {formatDate(fm.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {fm.readingTime}
          </span>
        </div>
      </FadeIn>

      {/* Content */}
      <FadeIn delay={0.1}>
        <article className="prose max-w-none">
          <MDXRemote source={content} components={mdxComponents} />
        </article>
      </FadeIn>

      {/* Footer */}
      <FadeIn delay={0.2} className="mt-14 pt-8 border-t border-[var(--border)]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to all posts
          </Link>
          <Link
            href="/contact"
            className="text-sm text-[var(--primary)] font-medium line-decoration"
          >
            Have questions? Get in touch
          </Link>
        </div>
      </FadeIn>
    </div>
  )
}
