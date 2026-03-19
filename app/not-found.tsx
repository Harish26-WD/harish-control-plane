import Link from "next/link"
import { Home, AlertTriangle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
      {/* BG orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 orb orb-primary opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 orb orb-accent opacity-[0.07] pointer-events-none" />
      <div className="absolute inset-0 cosmic-grid opacity-[0.2] dark:opacity-[0.15] pointer-events-none" />

      <div className="relative text-center max-w-md">
        <div className="bento-tile glow-border p-12 relative overflow-hidden">
          {/* Gradient top border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/6 to-transparent rounded-[1.5rem] pointer-events-none" />

          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mx-auto mb-6 shadow-[0_8px_32px_-8px_var(--glow)]">
              <AlertTriangle size={28} className="text-white" />
            </div>
            <p className="text-7xl font-black font-mono gradient-text mb-4 leading-none">404</p>
            <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Page not found</h1>
            <p className="text-sm text-[var(--text-secondary)] mb-8 leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link href="/" className="btn-primary inline-flex">
              <Home size={15} />
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
