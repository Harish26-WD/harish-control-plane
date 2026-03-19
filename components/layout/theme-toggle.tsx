"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" />
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="w-9 h-9 flex items-center justify-center rounded-xl border border-(--border)/60 text-(--text-secondary) hover:text-(--primary) hover:border-(--primary)/40 hover:bg-(--primary)/8 transition-all duration-200"
    >
      {theme === "dark"
        ? <Sun size={16} className="rotate-0 transition-transform duration-300" />
        : <Moon size={16} className="rotate-0 transition-transform duration-300" />
      }
    </button>
  )
}
