import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { BlogPost } from "@/types"

const BLOG_DIR = path.join(process.cwd(), "features/blog/content")

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "")
    const filepath = path.join(BLOG_DIR, filename)
    const raw = fs.readFileSync(filepath, "utf-8")
    const { data } = matter(raw)
    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      readingTime: data.readingTime || "5 min read",
      tags: data.tags || [],
      excerpt: data.excerpt || "",
    } as BlogPost
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostBySlug(slug: string) {
  const filepath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filepath)) return null
  const raw = fs.readFileSync(filepath, "utf-8")
  const { data, content } = matter(raw)
  return { frontmatter: data, content }
}
