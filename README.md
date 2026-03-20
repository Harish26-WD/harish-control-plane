# Harish Kumar S — Portfolio

> A system-style developer portfolio showcasing real-time dashboards, scalable architectures, and high-performance data systems.

**Live:** [harish-control-plane.vercel.app](https://harish-control-plane.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Content | MDX (next-mdx-remote) |
| Email | Resend |
| Validation | Zod |
| Analytics | Vercel Analytics + Speed Insights |
| Deployment | Vercel |

---

## Features

- **Home** — Hero with animated metrics banner, featured projects, and tech stack grid
- **Projects** — MDX-powered project pages with live demos and source links
- **Blog** — MDX blog with syntax highlighting and reading time
- **About** — Experience timeline, skills visualization, and certifications
- **Contact** — Dynamic contact form with Resend email delivery and live character count
- **Dark / Light mode** — System-aware theme toggle
- **SEO** — Sitemap, robots.txt, and Open Graph metadata
- **Performance** — 100 Lighthouse score target with Vercel Speed Insights

---

## Project Structure

```
harish-control-plane/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home
│   ├── projects/           # Projects listing + detail
│   ├── blog/               # Blog listing + detail
│   ├── about/              # About page
│   └── contact/            # Contact page
├── components/
│   ├── layout/             # Navbar, footer, theme toggle
│   ├── ui/                 # Reusable UI primitives
│   └── animations/         # Framer Motion wrappers
├── features/               # Feature-scoped logic & data
│   ├── home/
│   ├── projects/
│   ├── blog/
│   ├── about/
│   └── contact/
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities (MDX, Resend, helpers)
├── public/                 # Static assets
└── types/                  # Shared TypeScript types
```

---

## Getting Started

### Prerequisites
- Node.js 20+
- A [Resend](https://resend.com) account for the contact form

### Local Development

```bash
# Clone the repo
git clone https://github.com/Harish26-WD/harish-control-plane.git
cd harish-control-plane

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your RESEND_API_KEY to .env.local

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |

---

## Deployment

The project auto-deploys to Vercel on every push to `main`.

1. Push to `main` → Vercel production deployment triggers automatically
2. Add `RESEND_API_KEY` in **Vercel → Settings → Environment Variables**

---

## Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Production — protected, requires PR |
| `feature/*` | New features |
| `fix/*` | Bug fixes |
| `chore/*` | Maintenance & deps |

---

## License

MIT © [Harish Kumar S](https://harish-control-plane.vercel.app)
