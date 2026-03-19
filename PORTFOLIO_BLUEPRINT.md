# Portfolio Blueprint - Harish Kumar S

## Positioning

**Title:** Real-Time Systems & Dashboard Engineer
**Tagline:** "I build scalable real-time dashboards and data systems that handle thousands of live events"

Do NOT position as a generic "Full Stack Developer." Your edge is:
- Real-time systems (Socket.IO, MQTT, FCM)
- Dashboard & analytics platforms
- Enterprise-scale applications (banking, government, IoT)
- Performance optimization (40% improvements, 99.9% uptime)

---

## Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | Next.js 15 (App Router) | Full-stack, server-first, best DX |
| Language | TypeScript (strict) | Type safety, better DX |
| Styling | Tailwind CSS v4 | Utility-first, fast iteration |
| Animations | Framer Motion | Smooth, declarative, lightweight |
| Content | MDX (next-mdx-remote) | Static content, git-versioned, fast |
| Email | Resend | Simple email API for contact form |
| Validation | Zod | Schema validation for forms |
| Analytics | Vercel Analytics | Zero-config, privacy-friendly |
| Icons | Lucide React | Clean, consistent icon set |
| Deployment | Vercel | Zero-config Next.js hosting |

**NOT using:**
- Three.js (overkill, adds 500KB+ for minimal portfolio gain)
- Any database (content is static MDX, no DB needed)
- Express/Nest (Next.js handles everything)
- Any CMS (MDX files are the CMS)

---

## Architecture Principles

1. **Server Components by default** - only add `"use client"` when you need interactivity (hover effects, animations, form inputs)
2. **Server Actions for mutations** - contact form submission, no API routes needed
3. **Static content via MDX** - projects, blog posts, experience data all as typed data files or MDX
4. **Feature-based modules** - each domain (projects, contact, blog) is self-contained
5. **No over-abstraction** - simple data files, not a CMS or database
6. **Performance budget** - target 95+ Lighthouse score on all pages

---

## Folder Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx                 # Root layout (fonts, metadata, theme provider)
│   ├── page.tsx                   # Home/landing page (server component)
│   ├── loading.tsx                # Global loading state
│   ├── not-found.tsx              # Custom 404
│   ├── globals.css                # Tailwind imports + CSS variables
│   │
│   ├── projects/
│   │   ├── page.tsx               # Projects listing
│   │   └── [slug]/page.tsx        # Individual project case study
│   │
│   ├── blog/
│   │   ├── page.tsx               # Blog listing
│   │   └── [slug]/page.tsx        # Individual blog post
│   │
│   ├── about/page.tsx             # About/experience page
│   ├── contact/page.tsx           # Contact page
│   │
│   ├── sitemap.ts                 # Dynamic sitemap generation
│   └── robots.ts                  # Robots.txt generation
│
├── features/
│   ├── home/
│   │   └── components/
│   │       ├── hero-section.tsx
│   │       ├── metrics-banner.tsx
│   │       ├── featured-projects.tsx
│   │       ├── tech-stack-grid.tsx
│   │       └── cta-section.tsx
│   │
│   ├── projects/
│   │   ├── components/
│   │   │   ├── project-card.tsx
│   │   │   ├── project-detail.tsx
│   │   │   └── project-metrics.tsx
│   │   ├── data/
│   │   │   └── projects.ts        # All project data (typed)
│   │   └── types.ts
│   │
│   ├── blog/
│   │   ├── components/
│   │   │   ├── blog-card.tsx
│   │   │   └── mdx-components.tsx
│   │   └── content/               # MDX blog posts
│   │       ├── building-realtime-dashboards.mdx
│   │       └── optimizing-sql-queries.mdx
│   │
│   ├── about/
│   │   ├── components/
│   │   │   ├── experience-timeline.tsx
│   │   │   ├── skills-visualization.tsx
│   │   │   └── certifications.tsx
│   │   └── data/
│   │       └── experience.ts
│   │
│   └── contact/
│       ├── components/
│       │   └── contact-form.tsx   # Client component (form interactivity)
│       ├── actions.ts             # Server action (send email via Resend)
│       └── schema.ts             # Zod validation schema
│
├── components/
│   ├── ui/                        # Reusable primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── animated-counter.tsx
│   │   ├── status-indicator.tsx
│   │   └── glass-panel.tsx
│   │
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── theme-toggle.tsx       # Dark/light mode
│   │   └── mobile-nav.tsx
│   │
│   └── animations/
│       ├── fade-in.tsx
│       ├── slide-up.tsx
│       └── stagger-children.tsx
│
├── lib/
│   ├── utils.ts                   # cn() helper, formatDate, etc.
│   ├── constants.ts               # Site metadata, social links
│   ├── mdx.ts                     # MDX parsing utilities
│   └── resend.ts                  # Email client setup
│
├── hooks/
│   ├── use-theme.ts
│   └── use-in-view.ts
│
├── types/
│   └── index.ts                   # Shared TypeScript types
│
├── public/
│   ├── images/
│   │   ├── projects/              # Project screenshots (WebP, optimized)
│   │   └── og-image.png           # Default OpenGraph image
│   ├── resume.pdf                 # Downloadable resume
│   └── favicon.ico
│
├── .env.local                     # RESEND_API_KEY
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Pages & Sections

### Page 1: Home (Landing)

The hero section is your first impression. It should communicate who you are in 3 seconds.

**Sections:**

1. **Hero Section**
   - Your name + title: "Real-Time Systems & Dashboard Engineer"
   - One-liner: "I build scalable systems that handle thousands of live events with sub-10ms latency"
   - Two CTA buttons: "View Projects" | "Download Resume"
   - Subtle animated background (CSS gradient animation or dot grid, NOT Three.js)

2. **Live Metrics Banner** (the dashboard touch)
   - Animated counters that count up on scroll into view
   - Cards showing:
     - "5+" Years Experience
     - "1,000+" Users Served
     - "40%" Performance Improvements
     - "99.9%" System Uptime
   - Each card has a small status indicator dot (green = active) for the dashboard feel
   - This is the "dashboard aesthetic" done tastefully - clean cards, not gimmicky terminals

3. **Featured Projects** (top 3)
   - Horizontal cards with:
     - Project title
     - One-line description
     - Tech badges
     - Key metric (e.g., "10k+ daily queries")
     - Arrow link to full case study
   - Link to "View All Projects"

4. **Tech Stack Grid**
   - Grouped by category: Frontend | Backend | Real-Time | Cloud
   - Clean icon grid, not a wall of text
   - Hover to reveal proficiency or years of use

5. **CTA Section**
   - "Let's build something together"
   - Link to contact page

---

### Page 2: Projects

**Layout:** Grid of project cards, each clickable to expand into a full case study page.

**Show only these 4 projects** (strongest, most diverse):

#### Project 1: Senzsafe - Real-Time Fire Monitoring SaaS
- **Why lead with this:** It's a SaaS product, real-time, IoT, most technically impressive
- **Problem:** Industrial facilities needed centralized real-time fire monitoring across distributed IoT sensors with instant alerting
- **Solution:** Built a real-time SaaS platform processing 10,000+ daily IoT sensor events with live dashboards, automated alerts, and historical analytics
- **Key Features:**
  - Real-time sensor event processing via MQTT
  - Live dashboard with Socket.IO updates
  - Push notifications via FCM
  - Historical event logging and analytics
  - Multi-tenant architecture
- **Tech:** Python, Flask, MQTT, React, Node.js, Socket.IO, MongoDB, MySQL
- **Impact:**
  - Processes 10,000+ daily IoT events
  - Reduced alert response time by 40%
  - Real-time monitoring across multiple facilities
- **Category tag:** Real-Time / IoT / SaaS

#### Project 2: IOB NEST - Society Management System
- **Why:** Enterprise banking client, complex business logic, payments integration
- **Problem:** Residential society of 500+ residents needed digital management for billing, KYC, facility booking, and complaint tracking
- **Solution:** Built full management platform with automated billing, payment gateway integration, and digital workflows
- **Key Features:**
  - Automated maintenance billing with payment reminders
  - KYC onboarding workflow
  - Facility booking system
  - Complaint tracking with status updates
  - Digital notice board
  - Vendor performance tracking
- **Tech:** React, TypeScript, Node.js, Oracle
- **Impact:**
  - Serves 500+ residents
  - Reduced late payments by 25%
  - Digitized end-to-end society operations
- **Category tag:** Enterprise / Banking / Full-Stack

#### Project 3: Land Records Dashboard
- **Why:** Government scale, analytics/dashboard expertise, high query volume
- **Problem:** Government body needed analytics dashboard for land record queries across patta transfers, approvals, and subdivision tracking
- **Solution:** Built high-performance analytics dashboard handling 10,000+ daily queries with optimized reporting
- **Key Features:**
  - Analytics dashboard for land records
  - Patta transfer tracking
  - Approval workflow monitoring
  - Subdivision tracking with reports
  - Optimized query engine
- **Tech:** React, TypeScript, Node.js, MySQL
- **Impact:**
  - Handles 10,000+ daily queries
  - Reduced report load times by 35%
  - Serves entire state-level department
- **Category tag:** Government / Analytics / Dashboard

#### Project 4: Pension Portal
- **Why:** AWS/Docker deployment, CI/CD expertise, security-sensitive
- **Problem:** 1,000+ pensioners needed secure portal for life certificate submission and welfare scheme management
- **Solution:** Built secure cloud-native portal deployed on AWS with CI/CD pipeline
- **Key Features:**
  - Life certificate submission workflow
  - Welfare scheme management
  - Secure authentication
  - AWS deployment with Docker
  - CI/CD with Jenkins
- **Tech:** React, Node.js, MySQL, AWS, Docker
- **Impact:**
  - Serves 1,000+ pensioners
  - Reduced downtime by 30%
  - 99.9% uptime on AWS
- **Category tag:** Cloud / DevOps / Government

**Important:** All projects use anonymized data. Say "Built for enterprise banking client" or "Built for state government department" - never expose sensitive details.

---

### Page 3: About

**Sections:**

1. **Short intro** (3-4 lines)
   - "I'm a full-stack engineer specializing in real-time systems, IoT platforms, and high-performance dashboards. I work across banking, government, and industrial domains, building systems that handle thousands of live events reliably."

2. **Experience Timeline**
   - Visual vertical timeline
   - Muthu Soft Labs (Jan 2021 - Present) with key achievements as bullet points
   - Education: BCA, St. Thomas College (2020)

3. **Skills Visualization**
   - Grouped cards (not progress bars - those are meaningless)
   - Frontend: React, TypeScript, Tailwind
   - Backend: Node.js, Express, Python/Flask
   - Real-Time: Socket.IO, MQTT, FCM
   - Databases: MySQL, PostgreSQL, MongoDB, Oracle
   - Cloud: AWS (EC2, S3, ECR), Docker, Jenkins
   - AI Tools: Claude Code, Copilot, Gemini API

4. **Certifications**
   - Clean list with year badges

5. **Resume Download**
   - Prominent download button for PDF resume

---

### Page 4: Blog

**Why include a blog:**
- Massively improves SEO (each post is a new indexable page)
- Demonstrates depth of knowledge
- Attracts organic traffic from developers searching for solutions
- Positions you as a thought leader, not just a coder

**Content stored as MDX files** in `features/blog/content/`

**Starter post ideas (write 2-3 before launch):**
1. "Building Real-Time Dashboards with Socket.IO and React"
2. "How I Optimized SQL Queries to Cut Load Times by 35%"
3. "MQTT vs WebSockets: Choosing the Right Protocol for IoT"
4. "Lessons from Building Enterprise Apps for Banking Clients"

**Blog card shows:** Title, date, reading time, tags, excerpt

---

### Page 5: Contact

**Sections:**

1. **Contact Form**
   - Fields: Name, Email, Subject (dropdown: Hiring / Freelance / Collaboration / Other), Message
   - Validated with Zod
   - Submitted via Server Action
   - Email sent via Resend to your email
   - Success/error toast feedback

2. **Direct Contact Info**
   - Email: sharishk26@gmail.com
   - LinkedIn: linkedin.com/in/harishkumar-s
   - GitHub: (add your GitHub profile link)
   - Location: Chennai, India

3. **Availability Status**
   - A small badge: "Available for opportunities" (green) or "Currently employed, open to freelance" (yellow)
   - This is a simple config toggle, not dynamic

---

## UI Design System

### Theme: Professional Dashboard Aesthetic

**NOT a hacker terminal or gimmick.** Think clean monitoring dashboard meets modern portfolio.

**Design tokens:**

```
Colors (Dark mode - primary):
  Background:     #0a0a0f (near-black with blue tint)
  Surface:        #12121a (card backgrounds)
  Surface Hover:  #1a1a2e
  Border:         #1e1e2e (subtle borders)
  Primary:        #3b82f6 (blue - links, CTAs)
  Primary Glow:   #3b82f680 (for subtle glows)
  Accent:         #10b981 (green - status indicators, success)
  Text Primary:   #f1f5f9
  Text Secondary: #94a3b8
  Text Muted:     #64748b

Colors (Light mode):
  Background:     #fafafa
  Surface:        #ffffff
  Border:         #e2e8f0
  Primary:        #2563eb
  Accent:         #059669
  Text Primary:   #0f172a
  Text Secondary: #475569
```

**Typography:**
- Headings: Inter (or Geist Sans) - clean, modern
- Body: Inter
- Code/Mono: JetBrains Mono (for any code snippets or the metrics feel)

**Key UI patterns:**
- Glass panels: `backdrop-blur-md bg-white/5 border border-white/10` (dark mode)
- Status indicators: Small colored dots (green = active, blue = info)
- Animated counters: Numbers that count up when scrolled into view
- Subtle hover states: Cards lift slightly with shadow on hover
- Section transitions: Fade-in-up on scroll using Framer Motion + Intersection Observer
- Micro-interactions: Buttons scale slightly on hover, icons rotate on interaction

**What to avoid:**
- Neon glow everywhere (tacky if overdone - use sparingly on 1-2 accents only)
- Terminal/hacker aesthetic (looks unprofessional for enterprise clients)
- Too many animations (causes motion sickness, hurts performance)
- Dark-only design (always support light mode toggle)

---

## SEO & Metadata

Every page needs:

```tsx
export const metadata: Metadata = {
  title: "Page Title | Harish Kumar S",
  description: "Page-specific description under 160 chars",
  openGraph: {
    title: "...",
    description: "...",
    url: "https://harishkumar.dev/page",
    images: ["/images/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "...",
    description: "...",
  },
}
```

**Also implement:**
- `app/sitemap.ts` - dynamic sitemap for all pages + blog posts
- `app/robots.ts` - allow all crawlers
- JSON-LD structured data on home page (Person schema)
- Canonical URLs on all pages
- OG image (1200x630px) - create one branded image

---

## Performance Requirements

- Lighthouse score: 95+ on all metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Images: WebP format, use Next.js `<Image>` component (automatic optimization)
- Fonts: Use `next/font` for zero layout shift
- Bundle: Keep client JS minimal by defaulting to server components

---

## Accessibility Requirements

- All images have alt text
- Color contrast meets WCAG AA (4.5:1 ratio minimum)
- Keyboard navigation works on all interactive elements
- Focus indicators are visible
- Skip-to-content link
- Semantic HTML (nav, main, article, section)
- aria-labels on icon-only buttons
- Reduced motion: respect `prefers-reduced-motion` media query

---

## Responsive Breakpoints

- Mobile: 375px+ (single column, hamburger nav)
- Tablet: 768px+ (two columns where appropriate)
- Desktop: 1024px+ (full layout)
- Wide: 1280px+ (max-width container, centered)

**Mobile-first approach:** Design for mobile, enhance for desktop.

---

## Navbar

- **Desktop:** Horizontal nav with links: Home | Projects | Blog | About | Contact
- **Mobile:** Hamburger menu with slide-in drawer
- **Active link indicator:** Bottom border or background highlight
- **Theme toggle:** Sun/moon icon in nav
- **Scroll behavior:** Sticky with backdrop blur, slight shadow on scroll
- **Logo/Name:** "HK" monogram or "Harish Kumar S" text

---

## Footer

- Social links (GitHub, LinkedIn, Email)
- "Built with Next.js & deployed on Vercel"
- Copyright year (dynamic)
- Keep it minimal

---

## Animations (Framer Motion)

**Keep it subtle and purposeful:**

1. **Page transitions:** Fade in content on route change
2. **Scroll reveals:** Elements fade-in-up as they enter viewport (use `whileInView`)
3. **Stagger children:** Project cards, skill items appear one by one
4. **Counter animation:** Metrics count up from 0 to target value
5. **Hover effects:** Cards lift, buttons scale 1.02
6. **Status pulse:** Green dot pulses on status indicators

**Performance rules:**
- Only animate `transform` and `opacity` (GPU-accelerated)
- Use `will-change` sparingly
- Respect `prefers-reduced-motion`

---

## Content Data Structure

Projects data lives in a typed TypeScript file, not a database:

```ts
// features/projects/data/projects.ts

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
  image: string  // path to screenshot in /public/images/projects/
}

export const projects: Project[] = [
  {
    slug: "senzsafe-fire-monitoring",
    title: "Real-Time Fire Monitoring SaaS",
    subtitle: "Industrial IoT fire detection and prevention platform",
    // ... rest of data
  },
  // ...
]
```

---

## Environment Variables

```env
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://harishkumar.dev
```

Only two env vars needed. Keep it simple.

---

## Build Order (Implementation Phases)

### Phase 1: Foundation
1. Initialize Next.js 15 project with TypeScript + Tailwind
2. Set up folder structure
3. Configure fonts (Inter + JetBrains Mono via next/font)
4. Create CSS variables and design tokens
5. Build theme provider (dark/light mode)
6. Build layout components: Navbar, Footer, mobile nav
7. Create reusable UI primitives: Button, Card, Badge, GlassPanel

### Phase 2: Core Pages
8. Build Home page: Hero section
9. Build Home page: Metrics banner with animated counters
10. Build Home page: Featured projects section
11. Build Home page: Tech stack grid
12. Build Home page: CTA section
13. Build About page: Intro + experience timeline
14. Build About page: Skills visualization + certifications

### Phase 3: Projects
15. Create project data file with all 4 projects
16. Build Projects listing page with cards
17. Build individual project case study page ([slug])
18. Add project filtering by category (optional, nice-to-have)

### Phase 4: Contact
19. Set up Resend email client
20. Create Zod validation schema
21. Build contact form (client component)
22. Create server action for form submission
23. Add toast notifications for success/error

### Phase 5: Blog
24. Set up MDX processing (next-mdx-remote)
25. Write 2 starter blog posts
26. Build blog listing page
27. Build blog post page with MDX rendering
28. Create custom MDX components (code blocks, callouts)

### Phase 6: Polish
29. Add Framer Motion animations (scroll reveals, page transitions)
30. Add SEO metadata to all pages
31. Create sitemap.ts and robots.ts
32. Add JSON-LD structured data
33. Create OG image
34. Add Vercel Analytics
35. Accessibility audit and fixes
36. Performance audit (Lighthouse) and optimizations
37. Responsive testing across breakpoints

### Phase 7: Deploy
38. Push to GitHub
39. Connect to Vercel
40. Set up custom domain
41. Configure environment variables on Vercel
42. Final production testing

---

## Domain Suggestions

Pick one and buy it:
- harishkumar.dev (ideal)
- harishks.dev
- harish.engineer
- harishkumar.io

---

## Summary

This is NOT a resume website. This is a **developer product** that demonstrates:
- You build real-time systems at scale
- You work with enterprise clients (banking, government)
- You optimize performance (metrics prove it)
- You write clean, modern code (the portfolio itself is proof)

Every design decision, every section, every animation should reinforce this message.
