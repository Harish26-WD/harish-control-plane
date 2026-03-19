import type { Experience, Certification } from "@/types"

export const experiences: Experience[] = [
  {
    company: "Muthu Soft Labs Pvt Ltd",
    role: "Software Developer",
    period: "Jan 2021 – Present",
    location: "Chennai, India",
    description:
      "Building scalable enterprise applications across banking, government, and industrial domains.",
    achievements: [
      "Developed scalable applications using React.js, Node.js, and AWS serving 1,000+ users across enterprise systems",
      "Optimized REST APIs and SQL queries improving response time by 30–40% across relational and non-relational databases",
      "Implemented CI/CD pipelines using Jenkins and Docker reducing deployment time by 25% and achieving 99.9% uptime",
      "Built responsive React/TypeScript dashboards improving user engagement by 20%",
      "Mentored 5 junior developers improving code review turnaround by 20%",
      "Integrated LLM APIs (Gemini) into applications to automate workflows",
    ],
    current: true,
  },
]

export const certifications: Certification[] = [
  {
    name: "Generative AI Foundations",
    issuer: "upGrad",
    year: "2025",
  },
  {
    name: "Neo4j Fundamentals",
    issuer: "Neo4j GraphAcademy",
    year: "2023",
  },
  {
    name: "SQL (Intermediate)",
    issuer: "HackerRank",
    year: "2022",
  },
  {
    name: "Software Engineering Virtual Experience",
    issuer: "J.P. Morgan, Forage",
    year: "2022",
  },
  {
    name: "Python: Data Structures & Machine Learning",
    issuer: "Udemy",
    year: "2021",
  },
]
