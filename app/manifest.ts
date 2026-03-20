import type { MetadataRoute } from "next"
import { SITE_CONFIG } from "@/lib/constants"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: "Harish Kumar",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#6366f1",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  }
}
