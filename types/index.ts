export interface Project {
  slug: string
  title: string
  subtitle: string
  description: string
  problem: string
  solution: string
  features: string[]
  techStack: string[]
  impact: { label: string; value: string }[]
  category: string[]
  featured: boolean
  image?: string
  gradient: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  tags: string[]
  excerpt: string
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string
  achievements: string[]
  current?: boolean
}

export interface Certification {
  name: string
  issuer: string
  year: string
  url?: string
}

export interface Metric {
  label: string
  value: string
  suffix?: string
  description: string
  icon: string
}
