export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg)]">
      <div className="flex flex-col items-center gap-6">
        {/* HK Logo with spinning ring */}
        <div className="relative w-16 h-16">
          {/* Outer spinning gradient ring */}
          <div
            className="absolute inset-0 rounded-2xl animate-spin-slow"
            style={{
              background: "conic-gradient(from 0deg, var(--primary), var(--secondary), var(--accent), var(--primary))",
              borderRadius: "1rem",
            }}
          />
          {/* Inner surface */}
          <div className="absolute inset-[3px] bg-[var(--bg-surface)] rounded-[0.75rem] flex items-center justify-center">
            <span
              className="text-sm font-black tracking-tight select-none"
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--secondary), var(--accent))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              HK
            </span>
          </div>
        </div>

        {/* Animated progress bar */}
        <div className="w-32 h-[2px] rounded-full bg-[var(--border)] overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, var(--primary), var(--secondary), var(--accent))",
              animation: "loading-bar 1.4s ease-in-out infinite",
            }}
          />
        </div>

        <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-[0.2em]">
          Loading
        </p>
      </div>
    </div>
  )
}
