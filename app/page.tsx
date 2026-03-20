import type { Metadata } from "next"
import { HeroSection } from "@/features/home/components/hero-section"
import { MetricsBanner } from "@/features/home/components/metrics-banner"
import { FeaturedProjects } from "@/features/home/components/featured-projects"
import { TechStackGrid } from "@/features/home/components/tech-stack-grid"
import { CtaSection } from "@/features/home/components/cta-section"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`,
  description: SITE_CONFIG.description,
  alternates: { canonical: SITE_CONFIG.url },
  keywords: [
    "Harish Kumar S portfolio",
    "Full-Stack Engineer Chennai",
    "Real-Time Systems developer",
    "IoT dashboard engineer India",
    "hire Next.js developer",
  ],
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsBanner />
      <FeaturedProjects />
      <TechStackGrid />
      <CtaSection />
    </>
  )
}
