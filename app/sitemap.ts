import type { MetadataRoute } from "next"
import { getAllBlogPosts } from "@/lib/mdx"
import { projects } from "@/features/projects/data/projects"
import { SITE_CONFIG } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url
  const now = new Date()

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: "monthly" as const, priority: 1 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.6 },
  ]

  const projectPages = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const blogPosts = getAllBlogPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...projectPages, ...blogPosts]
}
