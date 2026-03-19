import { cn } from "@/lib/utils"

interface StatusIndicatorProps {
  status?: "active" | "info" | "warning" | "inactive"
  label?: string
  pulse?: boolean
  className?: string
}

export function StatusIndicator({
  status = "active",
  label,
  pulse = true,
  className,
}: StatusIndicatorProps) {
  const colors = {
    active: "bg-[var(--status-green)]",
    info: "bg-[var(--status-blue)]",
    warning: "bg-yellow-400",
    inactive: "bg-[var(--text-muted)]",
  }

  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span className="relative flex h-2 w-2">
        {pulse && status === "active" && (
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-60",
              colors[status]
            )}
          />
        )}
        <span className={cn("relative inline-flex rounded-full h-2 w-2", colors[status])} />
      </span>
      {label && <span className="text-xs text-[var(--text-muted)]">{label}</span>}
    </span>
  )
}
