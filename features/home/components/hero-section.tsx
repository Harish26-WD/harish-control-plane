"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { ArrowRight, Download, Sparkles, Zap, Globe, Server } from "lucide-react"
import { StatusIndicator } from "@/components/ui/status-indicator"
import { SITE_CONFIG } from "@/lib/constants"

/* ── Lightweight particle canvas (35 particles, GPU paint) ── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let animId: number
    let w = canvas.offsetWidth
    let h = canvas.offsetHeight
    canvas.width = w
    canvas.height = h

    const isDark = () => document.documentElement.classList.contains("dark")

    // 35 particles (was 55) — fewer connections, faster paint
    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.4 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      o: Math.random() * 0.4 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const base = isDark() ? "129,140,248" : "79,70,229"
      const connDist = 90 // shorter connection distance = fewer line draws

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${base},${p.o})`
        ctx.fill()

        // Only connect to next 8 particles (not all N²)
        for (let j = i + 1; j < Math.min(i + 9, particles.length); j++) {
          const dx = p.x - particles[j].x
          const dy = p.y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < connDist) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${base},${0.1 * (1 - dist / connDist)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    window.addEventListener("resize", onResize, { passive: true })
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  )
}

/* ── Typing role animation ── */
const roles = ["Full-Stack Engineer", "IoT Architect", "Real-Time Systems Dev", "Dashboard Specialist"]

function TypedRole() {
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [pausing, setPausing] = useState(false)

  useEffect(() => {
    if (pausing) {
      const t = setTimeout(() => setPausing(false), 1200)
      return () => clearTimeout(t)
    }
    const target = roles[idx]
    let t: NodeJS.Timeout
    if (!deleting) {
      if (displayed.length < target.length) {
        t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
      } else {
        t = setTimeout(() => {
          setPausing(true)
          setTimeout(() => setDeleting(true), 1200)
        }, 0)
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(target.slice(0, displayed.length - 1)), 35)
      } else {
        t = setTimeout(() => {
          setDeleting(false)
          setIdx((i) => (i + 1) % roles.length)
        }, 0)
      }
    }
    return () => clearTimeout(t)
  }, [displayed, deleting, idx, pausing])

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="gradient-text">{displayed}</span>
      <span
        className="inline-block w-[2px] h-7 bg-(--primary) rounded-full animate-pulse-dot"
      />
    </span>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })
  // Only y + opacity — removes scale transform to reduce GPU composite layers
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Particle canvas — section-level only */}
      <ParticleField />

      {/* Radial vignette to blend section into global bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 30%, var(--bg) 100%)",
        }}
      />

      {/* Single animated gradient blob — CSS only, no JS */}
      <div
        className="absolute top-[10%] right-[8%] w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--primary), var(--secondary) 60%, transparent)",
          filter: "blur(80px)",
          opacity: 0.1,
          animation: "bg-orb-3 22s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 sm:pt-12 sm:pb-24"
      >
        {/* Hero Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">

          {/* ── Main content tile (full width) ── */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12 bento-tile glow-border p-8 sm:p-10 lg:p-12 relative overflow-hidden"
          >
            {/* Inner top shimmer */}
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, var(--primary) 40%, var(--accent) 70%, transparent)" }}
            />

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="tag-glow">
                <StatusIndicator status="active" />
                {SITE_CONFIG.availabilityText}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-(--text-muted) font-mono">
                <Sparkles size={10} className="text-(--gold)" />
                5+ yrs · Chennai, IN
              </span>
            </div>

            <h1 className="text-[clamp(2rem,4.8vw,3.8rem)] font-black leading-[1.06] tracking-tight mb-3">
              <span className="text-(--text-primary)">I build systems</span>
              <br />
              <span className="text-(--text-primary)">that </span>
              <span className="gradient-text-aurora">handle scale</span>
            </h1>

            {/* Typing sub-role */}
            <div className="text-[clamp(0.95rem,2.2vw,1.25rem)] font-semibold mb-5 h-9 flex items-center">
              <TypedRole />
            </div>

            <p className="text-base sm:text-lg text-(--text-secondary) leading-relaxed max-w-3xl mb-8">
              Specializing in real-time IoT platforms, enterprise dashboards, and
              high-throughput data systems. 5+ years delivering production systems
              with 99.9% uptime for banking and government clients.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/projects" className="btn-primary group">
                View Projects
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="/harish-kumar-resume.pdf" download className="btn-ghost">
                <Download size={15} />
                Resume
              </a>
            </div>

            {/* ── Metrics row (inline) ── */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-8 border-t border-[var(--border)]/40">
              {/* Metric 1 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "color-mix(in srgb, var(--primary) 15%, transparent)" }}>
                    <Server size={14} className="text-(--primary)" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-(--text-muted)">Throughput</span>
                </div>
                <span className="text-3xl sm:text-4xl font-black font-mono gradient-text block">10K+</span>
                <p className="text-xs sm:text-sm text-(--text-secondary) mt-1">daily IoT events</p>
              </motion.div>

              {/* Metric 2 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "color-mix(in srgb, var(--accent) 15%, transparent)" }}>
                    <Zap size={14} className="text-(--accent)" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-(--text-muted)">Performance</span>
                </div>
                <span className="text-3xl sm:text-4xl font-black font-mono text-(--accent) block">99.9%</span>
                <p className="text-xs sm:text-sm text-(--text-secondary) mt-1">uptime on AWS</p>
              </motion.div>

              {/* Metric 3 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.29, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-2 md:col-span-1"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "color-mix(in srgb, var(--secondary) 15%, transparent)" }}>
                    <Globe size={14} className="text-(--secondary)" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-(--text-muted)">Experience</span>
                </div>
                <span className="text-3xl sm:text-4xl font-black font-mono text-(--secondary) block">5+</span>
                <p className="text-xs sm:text-sm text-(--text-secondary) mt-1">yrs in production</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Core stack ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bento-tile p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-1.5 h-4 rounded-full"
                style={{ background: "linear-gradient(to bottom, var(--primary), var(--secondary))" }}
              />
              <span className="text-xs font-mono uppercase tracking-widest text-(--text-muted)">Core Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Node.js", "Socket.IO", "MQTT", "AWS", "Docker"].map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.36 + i * 0.04 }}
                  className="tag-glow"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* ── Domain expertise ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.40, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 bento-tile glow-border p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-1.5 h-4 rounded-full"
                style={{ background: "linear-gradient(to bottom, var(--accent), var(--primary))" }}
              />
              <span className="text-xs font-mono uppercase tracking-widest text-(--text-muted)">Domains</span>
            </div>
            <div className="space-y-3">
              {[
                { label: "Banking & Finance", sub: "IOB, Enterprise", icon: "🏦" },
                { label: "Government Systems", sub: "State-level portals", icon: "🏛️" },
                { label: "Industrial IoT", sub: "Fire monitoring SaaS", icon: "🔥" },
              ].map((d) => (
                <div key={d.label} className="flex items-center gap-3">
                  <span className="text-base leading-none">{d.icon}</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-(--text-primary) block truncate">{d.label}</span>
                    <span className="text-xs text-(--text-muted)">{d.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Years badge ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 bento-tile p-6 flex flex-col items-center justify-center text-center mesh-gradient"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3"
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                boxShadow: "0 8px 32px -8px var(--glow)",
              }}
            >
              <Globe size={24} className="text-white" />
            </div>
            <span className="text-3xl font-black font-mono gradient-text">5+</span>
            <span className="text-xs text-(--text-muted) mt-1 font-mono tracking-wider">YRS IN PROD</span>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator — desktop only so it doesn't overlap stacked mobile grid */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-[10px] font-mono text-(--text-muted) uppercase tracking-widest">scroll</span>
        <div className="w-5 h-8 rounded-full border border-(--border) flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 rounded-full"
            style={{ background: "linear-gradient(to bottom, var(--primary), var(--accent))" }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
