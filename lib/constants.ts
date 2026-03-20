export const SITE_CONFIG = {
  name: "Harish Kumar S",
  title: "Real-Time Systems & Dashboard Engineer",
  description:
    "Full-stack engineer specializing in real-time systems, IoT platforms, and high-performance dashboards. 5+ years building enterprise applications for banking, government, and industrial domains.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://harishkumar.dev",
  email: "sharishk26@gmail.com",
  phone: "+91 86828 75808",
  linkedin: "https://linkedin.com/in/harishkumar-s",
  github: "https://github.com/harishkumar-s",
  location: "Chennai, Tamil Nadu, India",
  availability: "open" as "open" | "closed" | "freelance",
  availabilityText: "Open to opportunities",
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export const TECH_STACK = [
  {
    category: "Frontend",
    color: "blue",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    category: "Backend",
    color: "purple",
    items: ["Node.js", "Express.js", "Python", "Flask", "PHP / Laravel"],
  },
  {
    category: "Real-Time & IoT",
    color: "green",
    items: ["Socket.IO", "MQTT", "Firebase (FCM)", "WebSockets"],
  },
  {
    category: "Databases",
    color: "orange",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "Neo4j"],
  },
  {
    category: "Cloud & DevOps",
    color: "cyan",
    items: ["AWS (EC2, S3, ECR)", "Docker", "Jenkins", "CI/CD", "Git"],
  },
  {
    category: "AI & Tools",
    color: "pink",
    items: ["Claude Code", "GitHub Copilot", "Gemini API", "Prompt Engineering"],
  },
]
