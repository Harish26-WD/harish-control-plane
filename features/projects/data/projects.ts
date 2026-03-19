import type { Project } from "@/types"

export const projects: Project[] = [
  {
    slug: "fire-monitoring-saas",
    title: "Real-Time Fire Monitoring SaaS",
    subtitle: "Industrial IoT fire detection and prevention platform",
    description:
      "A production SaaS platform processing 10,000+ daily IoT sensor events with real-time fire and fault monitoring, automated alerts, and historical analytics for industrial facilities.",
    problem:
      "Industrial facilities needed centralized real-time monitoring across distributed IoT fire sensors, with instant alerting and historical event tracking. Existing solutions were fragmented and introduced dangerous delays in alert delivery.",
    solution:
      "Built a real-time SaaS platform that ingests IoT sensor data via MQTT, processes it in real-time, pushes instant notifications via Socket.IO and FCM, and presents a live monitoring dashboard with drill-down analytics.",
    features: [
      "Real-time sensor event processing via MQTT broker",
      "Live dashboard with Socket.IO-powered updates",
      "Push notifications via Firebase Cloud Messaging (FCM)",
      "Historical event logs with filtering and export",
      "Multi-facility monitoring from a single dashboard",
      "Automatic status tracking: normal → fault → fire states",
      "Role-based access for operators and admins",
    ],
    techStack: ["Python", "Flask", "MQTT", "React", "Node.js", "Express.js", "Socket.IO", "MongoDB", "MySQL"],
    impact: [
      { label: "Daily IoT Events", value: "10,000+" },
      { label: "Alert Response Time", value: "↓ 40%" },
      { label: "Architecture", value: "Multi-tenant SaaS" },
    ],
    category: ["Real-Time", "IoT", "SaaS"],
    featured: true,
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    slug: "society-management-platform",
    title: "Society Management Platform",
    subtitle: "Enterprise management system for 500+ residents",
    description:
      "A full-featured management platform for residential societies covering maintenance billing, KYC onboarding, facility booking, complaint tracking, and vendor management — built for an enterprise banking client.",
    problem:
      "A residential society of 500+ residents was managing billing, KYC, facility bookings, and complaints through spreadsheets and manual processes, leading to delayed payments, no audit trail, and poor resident experience.",
    solution:
      "Built a comprehensive digital platform integrating payment gateways, automated billing cycles, KYC workflows, and complaint tracking into a unified system for residents and admins.",
    features: [
      "Automated maintenance billing with payment gateway integration",
      "SMS/email payment reminders to reduce late payments",
      "Digital KYC onboarding workflow",
      "Facility booking system with calendar view",
      "Complaint tracking with status updates and notifications",
      "Digital notice board for society announcements",
      "Vendor performance tracking and rating system",
      "Admin dashboard with financial reports",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Oracle", "REST APIs", "Payment Gateway"],
    impact: [
      { label: "Residents Served", value: "500+" },
      { label: "Late Payments Reduced", value: "25%" },
      { label: "Client", value: "Enterprise Banking" },
    ],
    category: ["Enterprise", "Banking", "Full-Stack"],
    featured: true,
    gradient: "from-purple-500/10 to-indigo-500/10",
  },
  {
    slug: "land-records-dashboard",
    title: "Land Records Analytics Dashboard",
    subtitle: "State-level government dashboard handling 10,000+ daily queries",
    description:
      "A high-performance analytics dashboard for the Commissionerate of Survey and Settlement to track land record operations — patta transfers, approvals, and sub-division tracking — at state scale.",
    problem:
      "A state government department was processing thousands of daily land record queries with no centralized visibility into transfer statuses, approval queues, or sub-division tracking, causing operational delays.",
    solution:
      "Built a high-performance analytics dashboard with optimized SQL queries, real-time status tracking, and advanced reporting — cutting report load times by 35%.",
    features: [
      "Dashboard for patta transfers, approvals, and sub-division tracking",
      "Advanced filtering by district, taluk, date range",
      "Optimized query engine for 10,000+ daily requests",
      "Exportable reports in PDF and CSV",
      "Role-based access for different department levels",
      "Status workflow tracking for pending/approved/rejected records",
    ],
    techStack: ["React", "TypeScript", "Node.js", "MySQL"],
    impact: [
      { label: "Daily Queries", value: "10,000+" },
      { label: "Report Load Time", value: "↓ 35%" },
      { label: "Client", value: "State Government" },
    ],
    category: ["Government", "Analytics", "Dashboard"],
    featured: true,
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    slug: "pension-portal",
    title: "Pension Management Portal",
    subtitle: "Secure cloud-native portal with 99.9% uptime on AWS",
    description:
      "A secure web portal enabling 1,000+ pensioners of the Tamil Nadu Unorganised Workers Welfare Board to submit life certificates and manage welfare scheme enrollments — deployed on AWS with CI/CD.",
    problem:
      "1,000+ pensioners were required to physically visit offices for life certificate submission and welfare scheme management, creating accessibility barriers and operational inefficiencies.",
    solution:
      "Built a secure digital portal with document upload, OTP-based authentication, and workflow management — deployed on AWS with automated CI/CD achieving 99.9% uptime.",
    features: [
      "Digital life certificate submission with document upload",
      "Welfare scheme enrollment and management",
      "OTP-based secure authentication",
      "Application status tracking for pensioners",
      "Admin review and approval dashboard",
      "AWS deployment with EC2, S3, and ECR",
      "Jenkins CI/CD pipeline with Docker containers",
    ],
    techStack: ["React", "Node.js", "MySQL", "AWS (EC2, S3, ECR)", "Docker", "Jenkins"],
    impact: [
      { label: "Pensioners Served", value: "1,000+" },
      { label: "Downtime Reduced", value: "30%" },
      { label: "System Uptime", value: "99.9%" },
    ],
    category: ["Cloud", "DevOps", "Government"],
    featured: false,
    gradient: "from-orange-500/10 to-amber-500/10",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).slice(0, 3)
}
