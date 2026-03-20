import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { GlobalBackground } from "@/components/layout/global-background"
import { JsonLd } from "@/components/seo/json-ld"
import { SITE_CONFIG } from "@/lib/constants"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Harish Kumar S",
    "Full-Stack Engineer",
    "Real-Time Systems",
    "IoT Developer",
    "Dashboard Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "Socket.IO",
    "MQTT",
    "Chennai",
    "India",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: { canonical: SITE_CONFIG.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    images: ["/images/og-image.png"],
    creator: "@harishkumar_s",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.email,
  telephone: SITE_CONFIG.phone,
  jobTitle: SITE_CONFIG.title,
  worksFor: {
    "@type": "Organization",
    name: "Muthu Soft Labs",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  sameAs: [SITE_CONFIG.linkedin, SITE_CONFIG.github],
  knowsAbout: [
    "Real-Time Systems",
    "IoT Platforms",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Socket.IO",
    "MQTT",
    "AWS",
    "Full-Stack Development",
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
  author: { "@type": "Person", name: SITE_CONFIG.name },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');const s=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&s))document.documentElement.classList.add('dark');}catch(e){}`,
          }}
        />
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        <GlobalBackground />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main
          id="main-content"
          className="relative z-10 min-h-screen pt-[60px]"
          style={{ animation: "page-enter 0.45s ease forwards" }}
        >
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
