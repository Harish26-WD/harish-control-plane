"use client"

import { useRef } from "react"

export function GlobalBackground() {
  const orbRef1 = useRef<HTMLDivElement>(null)
  const orbRef2 = useRef<HTMLDivElement>(null)
  const orbRef3 = useRef<HTMLDivElement>(null)

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{ contain: "strict" }}
    >
      {/* Primary orb — top left, slow drift */}
      <div
        ref={orbRef1}
        className="absolute bg-[var(--primary)] rounded-full"
        style={{
          width: "650px",
          height: "650px",
          top: "-180px",
          left: "-180px",
          filter: "blur(130px)",
          opacity: "0.09",
          willChange: "transform",
          animation: "bg-orb-1 28s ease-in-out infinite",
        }}
      />

      {/* Accent orb — bottom right */}
      <div
        ref={orbRef2}
        className="absolute bg-[var(--accent)] rounded-full"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-150px",
          right: "-100px",
          filter: "blur(120px)",
          opacity: "0.07",
          willChange: "transform",
          animation: "bg-orb-2 34s ease-in-out infinite",
        }}
      />

      {/* Secondary orb — center right */}
      <div
        ref={orbRef3}
        className="absolute bg-[var(--secondary)] rounded-full"
        style={{
          width: "420px",
          height: "420px",
          top: "35%",
          right: "15%",
          filter: "blur(110px)",
          opacity: "0.06",
          willChange: "transform",
          animation: "bg-orb-3 40s ease-in-out infinite",
        }}
      />

      {/* Subtle dot grid — no animation, zero cost */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, color-mix(in srgb, var(--border) 80%, transparent) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.4,
        }}
      />
    </div>
  )
}
