import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for building web services, algorithmic problem solving, and backend scripts.",
    iconName: "Code",
    skills: [
      { name: "JavaScript (ES6+)", category: "languages", status: "Proficient", highlight: true },
      { name: "TypeScript", category: "languages", status: "Actively Using", highlight: true },
      { name: "Java", category: "languages", status: "Proficient", highlight: true },
      { name: "Python", category: "languages", status: "Actively Using" },
      { name: "SQL", category: "languages", status: "Proficient" },
      { name: "C / C++", category: "languages", status: "Actively Using" },
    ],
  },
  {
    title: "Frontend Engineering",
    description: "Building responsive, accessible, interactive web interfaces with modern React ecosystem.",
    iconName: "Layout",
    skills: [
      { name: "React.js", category: "frontend", status: "Proficient", highlight: true },
      { name: "Next.js (App Router)", category: "frontend", status: "Actively Using", highlight: true },
      { name: "Tailwind CSS", category: "frontend", status: "Proficient", highlight: true },
      { name: "HTML5 & Semantic Web", category: "frontend", status: "Proficient" },
      { name: "CSS3 & Modern Layouts", category: "frontend", status: "Proficient" },
      { name: "Responsive UI/UX", category: "frontend", status: "Proficient" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Architecting RESTful endpoints, authentication workflows, serverless functions, and data pipelines.",
    iconName: "Server",
    skills: [
      { name: "Node.js", category: "backend", status: "Proficient", highlight: true },
      { name: "Express.js", category: "backend", status: "Proficient", highlight: true },
      { name: "RESTful API Design", category: "backend", status: "Proficient", highlight: true },
      { name: "NextAuth.js (OAuth/JWT)", category: "backend", status: "Actively Using" },
      { name: "Server-Sent Events (SSE)", category: "backend", status: "Actively Using" },
      { name: "Prisma ORM", category: "backend", status: "Actively Using" },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Data modeling, schema design, relational and document stores with ACID principles.",
    iconName: "Database",
    skills: [
      { name: "MongoDB & Mongoose", category: "databases", status: "Proficient", highlight: true },
      { name: "PostgreSQL (Neon / Supabase)", category: "databases", status: "Actively Using", highlight: true },
      { name: "MySQL / Relational SQL", category: "databases", status: "Proficient" },
      { name: "Database Schema Design", category: "databases", status: "Proficient" },
    ],
  },
  {
    title: "Enterprise & Platforms",
    description: "Enterprise workflow automation, scoped development, and data visualization tools.",
    iconName: "Layers",
    skills: [
      { name: "ServiceNow Platform", category: "enterprise", status: "Proficient", highlight: true },
      { name: "Flow Designer Automation", category: "enterprise", status: "Proficient", highlight: true },
      { name: "ServiceNow Scripting (Business Rules)", category: "enterprise", status: "Actively Using" },
      { name: "Service Catalog & ITSM", category: "enterprise", status: "Proficient" },
      { name: "Git & GitHub Version Control", category: "enterprise", status: "Proficient" },
      { name: "Microsoft Power BI", category: "enterprise", status: "Actively Using" },
    ],
  },
  {
    title: "Core Engineering Competencies",
    description: "Foundational software engineering principles, algorithmic problem solving, and system design.",
    iconName: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", category: "core", status: "Proficient", highlight: true },
      { name: "Problem Solving (400+ Solved)", category: "core", status: "Proficient", highlight: true },
      { name: "Full-Stack System Architecture", category: "core", status: "Actively Using" },
      { name: "Applied AI Integration (LLMs/NLP)", category: "core", status: "Actively Using" },
      { name: "Role-Based Access Control (RBAC)", category: "core", status: "Actively Using" },
      { name: "Performance Optimization & SEO", category: "core", status: "Actively Using" },
    ],
  },
];

