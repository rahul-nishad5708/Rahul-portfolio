import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "jobfit-ai",
    name: "JobFit.ai",
    category: "ai-saas",
    categoryLabel: "AI & SaaS Platform",
    tagline: "AI-Powered Resume Analysis & ATS Optimization SaaS with Real-Time Streaming",
    description:
      "An end-to-end SaaS platform that scores resumes against target job descriptions, flags missing keywords, checks ATS formatting, and streams AI-rewritten bullet points in real time.",
    problemStatement:
      "Job seekers frequently submit generic resumes that are filtered out by Applicant Tracking Systems (ATS) before reaching recruiters. Candidates struggle to pinpoint missing keywords, skill gaps, and weak bullet phrasing for specific roles.",
    whyCreated:
      "Built as a complete end-to-end product rather than a UI demo — combining real authentication, document parsing, streaming AI analysis, and payment webhooks in production.",
    targetUsers:
      "Software engineering candidates, university students, and job applicants tailoring resumes for ATS-screened roles.",
    proposedSolution:
      "A Next.js web application where users upload PDF/DOCX resumes and paste target job descriptions. Server-side extraction repairs LaTeX ligature drops and streams structured Gemini AI feedback over Server-Sent Events.",
    mainFeatures: [
      "Email/password and Google OAuth authentication via NextAuth.js with protected routes",
      "Server-side PDF and DOCX extraction using unpdf with custom LaTeX ligature-repair pass",
      "Google Gemini API integration streaming responses over Server-Sent Events (SSE)",
      "Match percentage scoring, missing keyword detection, ATS warnings, and bullet rewrites",
      "Per-user analysis history persisted in Neon PostgreSQL via Prisma ORM",
      "Razorpay one-time order flow with HMAC signature verification and Pro tier webhook",
      "Usage limits: 5 analyses/month on Free tier vs unlimited 30-day Pro access",
    ],
    plannedFeatures: [
      "Multi-resume version comparison dashboard",
      "Direct PDF export with applied bullet point improvements",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL (Neon)",
      "Prisma ORM",
      "NextAuth.js",
      "Google Gemini API",
      "Razorpay API",
      "unpdf",
      "Vercel",
    ],
    architectureNotes:
      "Built on Next.js 14 App Router. PDF extraction runs through `unpdf` (serverless Mozilla PDF.js wrapper) followed by a regex ligature-repair layer fixing dropped 'fi'/'fl' tokens from Overleaf resumes. Gemini responses stream via Server-Sent Events with defensive JSON validation before rendering structured cards.",
    myContribution:
      "Designed and implemented the entire application end-to-end: Prisma schema, NextAuth configuration, PDF extraction and ligature repair pipeline, SSE streaming API, Razorpay webhook verification, and frontend UI.",
    challengesAndSolutions: [
      {
        challenge:
          "LaTeX/Overleaf PDFs frequently dropped character ligatures ('work ow' instead of 'workflow', 'e ciency' instead of 'efficiency'), causing false missing-keyword alerts.",
        solution:
          "Switched from legacy `pdf-parse` to `unpdf` and built a post-processing ligature-repair pass prior to LLM analysis.",
      },
      {
        challenge:
          "Waiting for complete LLM JSON output introduced 8-12 seconds of blank loading latency.",
        solution:
          "Streamed analysis chunks over Server-Sent Events (SSE), displaying live progress before hydrating structured result cards.",
      },
      {
        challenge:
          "Preventing forged upgrade requests on client-side checkout callbacks.",
        solution:
          "Verified Razorpay webhooks server-side using cryptographic HMAC SHA-256 signatures before activating Pro tier access.",
      },
    ],
    lessonsLearned: [
      "Real-world PDF text extraction requires defensive post-processing rather than assuming clean text.",
      "Streaming AI outputs substantially improves perceived speed and user trust.",
      "Shipping a real SaaS requires handling auth sessions, webhooks, quotas, and edge cases together.",
    ],
    screenshots: [
      {
        src: "/images/projects/jobfit-landing.png",
        alt: "JobFit.ai landing page interface",
        caption: "JobFit.ai Landing Page (from repository)",
      },
      {
        src: "/images/projects/jobfit-login.png",
        alt: "JobFit.ai authentication sign-in screen",
        caption: "NextAuth Sign-In Screen (Email & Google OAuth)",
      },
    ],
    githubUrl: "https://github.com/rahul-nishad5708/jobfit-ai-",
    liveUrl: "https://jobfit-ai-pi.vercel.app",
    status: "Production",
    featured: true,
    highlightStats: [
      { label: "Framework", value: "Next.js 14 App Router" },
      { label: "AI Engine", value: "Gemini SSE Streaming" },
      { label: "Database", value: "Neon PostgreSQL" },
      { label: "Deployment", value: "Vercel Live" },
    ],
  },
  {
    id: "medicompare",
    name: "MediCompare",
    category: "fullstack",
    categoryLabel: "Full-Stack Healthcare Marketplace",
    tagline: "Healthcare Discovery, Hospital Comparison & Appointment Platform",
    description:
      "A comprehensive healthcare marketplace enabling patients to discover diagnostic centers, compare medical test packages side-by-side, calculate distance via Geolocation API, and schedule appointments effortlessly.",
    problemStatement:
      "Patients frequently face severe pricing opacity and schedule fragmentation when searching for medical tests, diagnostic scans, and clinical services, leading to overspending and coordination delays.",
    whyCreated:
      "Built to address healthcare transparency by engineering a location-aware, side-by-side comparison portal with real-time booking APIs and intuitive search filtering.",
    targetUsers:
      "Patients needing diagnostic tests, family caregivers comparing health checkup packages, and regional medical clinic administrators.",
    proposedSolution:
      "A Next.js 16 and MongoDB marketplace combining Haversine formula-based distance calculations, multi-parameter test comparison matrices, URL-synchronized query states, and fluid Framer Motion animations.",
    mainFeatures: [
      "Comprehensive healthcare marketplace indexing 25+ diagnostic centers and 300+ medical tests/services",
      "Dynamic side-by-side comparison modal evaluating pricing, test inclusions, turnaround times, and preparation notes",
      "Location-aware smart search utilizing the Geolocation API and Haversine formula for distance radius filtering",
      "Scalable RESTful booking APIs built with Node.js and MongoDB handling high-frequency appointment requests",
      "URL-based state synchronization for reliable browser back/forward routing and shareable search links",
      "Modern dark-aesthetic UI engineered with Tailwind CSS and interactive Framer Motion transitions",
    ],
    plannedFeatures: [
      "Integrated online payment gateway for pre-paid diagnostic test vouchers",
      "Automated WhatsApp and SMS appointment confirmations and digital test report delivery",
      "Verified patient reviews and diagnostic center rating system",
    ],
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Geolocation API",
      "RESTful APIs",
    ],
    architectureNotes:
      "Built with Next.js 16 App Router and MongoDB document storage. Mathematical Haversine calculations filter clinic coordinates by distance on the fly. State management coordinates smoothly with browser query parameters to ensure search filters persist across navigation.",
    myContribution:
      "Architected the full system end-to-end: designed MongoDB schemas for centers and tests, implemented geolocation distance algorithms, built the side-by-side comparison engine, and crafted the responsive UI.",
    challengesAndSolutions: [
      {
        challenge:
          "Calculating accurate straight-line distances from the user's coordinates across dozens of clinical centers without relying on expensive external mapping API quotas.",
        solution:
          "Implemented the mathematical Haversine formula directly on normalized center coordinates to perform lightning-fast radius filtering.",
      },
      {
        challenge:
          "Synchronizing multi-select filter parameters (price range, distance, test type) with browser navigation so user queries remain bookmarkable.",
        solution:
          "Structured search state into URL query parameters, ensuring every search result state is reproducible and shareable.",
      },
    ],
    lessonsLearned: [
      "Location-aware features require graceful degradation when browser geolocation permissions are denied.",
      "Clear visual comparison tables reduce user decision fatigue significantly in healthcare applications.",
    ],
    screenshots: [
      {
        src: "/images/projects/medicompare.png",
        alt: "MediCompare healthcare discovery and clinic comparison interface",
        caption: "MediCompare Healthcare Discovery & Comparison Platform",
      },
    ],
    githubUrl: "https://github.com/rahul-nishad5708/MediCompare",
    status: "Completed",
    featured: true,
    highlightStats: [
      { label: "Architecture", value: "Next.js 16 · MongoDB" },
      { label: "Coverage", value: "25+ Centers · 300+ Tests" },
      { label: "Location", value: "Haversine Geolocation" },
      { label: "Animations", value: "Framer Motion" },
    ],
  },
  {
    id: "exampro",
    name: "ExamPro",
    category: "fullstack",
    categoryLabel: "Full-Stack Examination Portal",
    tagline: "Enterprise Online Examination & Practice Portal with Dual Testing Engines",
    description:
      "A production-ready examination and practice testing portal engineered with the MERN stack featuring server-synchronized countdown timers, negative marking, instant feedback practice drills, and an Admin Student Activity Dashboard.",
    problemStatement:
      "Standard web assessment systems are vulnerable to client-side clock tampering, answer-key leakage via network inspection, cumbersome mandatory self-registration, and lack unified instructor monitoring.",
    whyCreated:
      "Engineered to enforce assessment integrity at the server and database level, while delivering a frictionless student testing experience and comprehensive administrative activity tracking.",
    targetUsers:
      "Instructors, examination coordinators, competitive exam candidates, and students taking timed tests or practice drills.",
    proposedSolution:
      "A robust MERN application with dual testing modes: Standard Timed Exam Mode (server-authoritative timers, complete answer-key privacy) and Practice Test Mode (instant explanations, answer locking), paired with real-time admin monitoring.",
    mainFeatures: [
      "Dual testing engines: Standard Timed Exam Mode and Instant Practice Test Mode",
      "Server-authoritative timer preventing client-side clock tampering or artificial extensions",
      "Answer key privacy: correct options and explanations are filtered at the Mongoose query level until final submission",
      "Automated server-side evaluation with configurable negative marking support (-0.25, -0.5, etc.)",
      "Shared-password candidate access (access code + candidate name) eliminating mandatory registration hurdles",
      "Unified Admin Student Activity Dashboard (/admin/student-activity) with live attempt aggregation, search, and status filters",
      "Production cookie security: HTTP-Only, SameSite=None, Secure=true with trust proxy support",
    ],
    plannedFeatures: [
      "AI-driven automated question bank generation from uploaded syllabus PDFs",
      "Proctoring alerts for window blur and tab-switching events during live exams",
      "Exportable CSV performance scorecards and student percentile distributions",
    ],
    technologies: [
      "React 19",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "RESTful APIs",
      "Cookie Auth",
    ],
    architectureNotes:
      "Structured MERN stack with React 19 + Vite frontend and Express.js backend. Question retrieval endpoints dynamically project only test bodies and choice arrays, omitting answer keys until post-submission evaluation. Countdown expiration automatically triggers server-side grade calculation.",
    myContribution:
      "Designed and developed the entire application: dual testing engines, server-authoritative timer logic, database projection security, student activity dashboard, and secure cookie authentication.",
    challengesAndSolutions: [
      {
        challenge:
          "Preventing students from inspecting network payloads in Chrome DevTools to uncover correct answers during active examinations.",
        solution:
          "Applied Mongoose field exclusion (`.select('-correctOption -explanation')`) at the database query level, ensuring correct answers never cross the network during a test.",
      },
      {
        challenge:
          "Handling browser crashes or sudden connection drops without losing candidate responses.",
        solution:
          "Implemented local response staging paired with periodic autosave and server-enforced auto-submission upon timer expiration.",
      },
    ],
    lessonsLearned: [
      "Testing platform integrity requires strictly server-authoritative timers and database-level data masking.",
      "Offering both strict exam conditions and immediate-feedback practice modes dramatically increases student utility.",
    ],
    screenshots: [
      {
        src: "/images/projects/exampro.png",
        alt: "ExamPro online examination and practice testing interface",
        caption: "ExamPro Online Examination & Practice Portal",
      },
    ],
    githubUrl: "https://github.com/rahul-nishad5708/ExamPro",
    status: "Completed",
    featured: true,
    highlightStats: [
      { label: "Frontend", value: "React 19 with Vite" },
      { label: "Testing Modes", value: "Standard & Practice Dual Engine" },
      { label: "Timer Integrity", value: "Server-Authoritative" },
      { label: "Security", value: "Mongoose Query Masking" },
    ],
  },
  {
    id: "connectsphere",
    name: "ConnectSphere",
    category: "fullstack",
    categoryLabel: "Real-Time Full-Stack App",
    tagline: "Next.js 16 Social Microblogging Platform with Realtime Channels & AI Moderation",
    description:
      "A full-stack Twitter/X-style social application built with Next.js 16, Supabase Realtime, Tailwind CSS v4, and Hugging Face NLP content moderation.",
    problemStatement:
      "Modern social platforms require real-time feed and messaging synchronization alongside proactive moderation to prevent toxic content from degrading conversations.",
    whyCreated:
      "Built to practice Next.js 16 App Router patterns, Supabase Realtime messaging channels, Row Level Security, and live NLP moderation workflows.",
    targetUsers:
      "Online developer communities and users looking for responsive real-time microblogging and messaging.",
    proposedSolution:
      "A Next.js + Supabase application featuring dual-tab feeds, 1-on-1 real-time direct messaging, discussion threads, media uploads, and pre-publish Hugging Face toxicity checks with an audit log.",
    mainFeatures: [
      "Dual-tab interactive home feed (For You & Following) with live updates",
      "AI content moderation using Hugging Face Inference API with `/moderation-logs` audit view",
      "Real-time 1-on-1 direct messaging via Supabase Realtime channels and unread counters",
      "Expandable discussion threads (`/tweet/[id]`), reposts, and quote tweets",
      "Direct media uploads via Supabase Storage buckets",
      "Explore view with dynamic hashtag parsing and keyword search",
    ],
    plannedFeatures: [
      "Public cloud production deployment",
      "Push notification delivery and advanced rate limiting",
    ],
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Supabase Realtime",
      "PostgreSQL",
      "Tailwind CSS v4",
      "Hugging Face NLP API",
    ],
    architectureNotes:
      "Uses Next.js App Router with Supabase PostgreSQL, Storage, and Realtime broadcast channels. Server-side moderation checks evaluate posts, replies, and DMs via Hugging Face Inference before persistence.",
    myContribution:
      "Built the Next.js frontend, Supabase schema and realtime messaging integration, media upload flows, and Hugging Face moderation pipeline.",
    challengesAndSolutions: [
      {
        challenge:
          "Moderating posts and messages without breaking user responsiveness when the external NLP API is slow.",
        solution:
          "Structured defensive timeout handling and logged moderation events cleanly to `/moderation-logs` for auditability.",
      },
    ],
    lessonsLearned: [
      "Supabase Realtime channels simplify live chat synchronization when paired cleanly with database-level Row Level Security.",
    ],
    screenshots: [
      {
        src: "/images/projects/connectsphere-landing.png",
        alt: "ConnectSphere microblogging feed and landing interface",
        caption: "ConnectSphere Social Microblogging Feed",
      },
      {
        src: "/images/projects/connectsphere-login.png",
        alt: "ConnectSphere authentication interface",
        caption: "Authentication Screen with Supabase Integration",
      },
    ],
    githubUrl: "https://github.com/rahul-nishad5708/ConnectSphere",
    status: "Completed",
    featured: true,
    highlightStats: [
      { label: "Framework", value: "Next.js 16 App Router" },
      { label: "Realtime", value: "Supabase Channels" },
      { label: "Moderation", value: "Hugging Face NLP" },
      { label: "Styling", value: "Tailwind CSS v4" },
    ],
  },
  {
    id: "snippetsphere",
    name: "SnippetSphere",
    category: "fullstack",
    categoryLabel: "Full-Stack Developer Tool",
    tagline: "MERN Developer Code Snippet & Paste Management Platform",
    description:
      "A full-stack MERN application enabling developers to create, organize, tag, search, star, and securely share reusable code snippets and terminal commands.",
    problemStatement:
      "Developers accumulate reusable code fragments, shell commands, and API snippets across scattered text files and notes, making retrieval slow during development.",
    whyCreated:
      "Built to provide a focused developer snippet workspace with JWT authentication, tag filtering, privacy toggles, and clean RESTful backend design.",
    targetUsers:
      "Software developers, computer science students, and engineers managing reusable code references.",
    proposedSolution:
      "A decoupled React + Express + MongoDB platform offering authenticated snippet CRUD, public/private visibility, instant search, favorites, draft auto-save, clipboard copy, and `.txt` export.",
    mainFeatures: [
      "User authentication with JSON Web Tokens (JWT) and Bcrypt.js password hashing",
      "Create, read, edit, and delete code snippets via modular RESTful API",
      "Public and private snippet visibility controls",
      "Real-time search and tag-based snippet organization",
      "Star / favorite pinning and auto-saved drafts",
      "One-click copy to clipboard, .txt download, and optional snippet expiration",
    ],
    plannedFeatures: [
      "Syntax highlighting and Monaco Code Editor integration",
      "Folder hierarchy organization and version history",
      "AI code explanation and team collaboration",
    ],
    technologies: [
      "React.js",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Bcrypt.js",
      "Axios",
    ],
    architectureNotes:
      "Structured MERN architecture separating `backend/` (config, controllers, middleware, models, routes) from `frontend/` (components, context, pages, services). Stateless JWT verification middleware guards private routes and snippet ownership.",
    myContribution:
      "Engineered both the Express/MongoDB backend API and the React frontend, including auth middleware, Mongoose schemas, search filtering, and UI workflows.",
    challengesAndSolutions: [
      {
        challenge:
          "Ensuring users can share public snippets while keeping private snippets strictly inaccessible via direct ID requests.",
        solution:
          "Enforced server-side ownership checks in Express route middleware before returning non-public records.",
      },
      {
        challenge:
          "Maintaining smooth search responsiveness across titles, tags, and snippet bodies.",
        solution:
          "Structured tag arrays and query filters cleanly so React state stays synchronized with backend queries.",
      },
    ],
    lessonsLearned: [
      "Clean MVC separation between controllers, middleware, and models keeps REST APIs easy to extend.",
      "Developer tools benefit most from low-friction actions like one-click copy and clean keyboard flows.",
    ],
    githubUrl: "https://github.com/rahul-nishad5708/SnippetSphere",
    status: "Completed",
    featured: false,
    highlightStats: [
      { label: "Stack", value: "MERN Stack" },
      { label: "Auth", value: "JWT + Bcrypt.js" },
      { label: "Database", value: "MongoDB & Mongoose" },
      { label: "Architecture", value: "Decoupled REST API" },
    ],
  },
  {
    id: "servicenow-enterprise-lifecycle",
    name: "Enterprise Employee Lifecycle & IT Operations",
    category: "servicenow",
    categoryLabel: "ServiceNow Scoped App",
    tagline: "Scoped ServiceNow Enterprise HR, ITSM & Asset Automation Concept",
    description:
      "A scoped ServiceNow application architecture designed around enterprise employee onboarding, offboarding, IT Asset Management (ITAM), CMDB tracking, and approval automation.",
    problemStatement:
      "Enterprise onboarding and offboarding often span disconnected HR, IT service desk, and asset teams, leading to delayed hardware provisioning, orphaned access, and audit gaps.",
    whyCreated:
      "Initiated to apply ServiceNow CSA and CAD principles toward an enterprise-grade scoped application with structured workflows and role-based access control.",
    targetUsers:
      "HR operations administrators, IT service desk staff, department managers, and enterprise employees.",
    proposedSolution:
      "A dedicated scoped ServiceNow application linking custom lifecycle tables with Service Catalog requests, Flow Designer multi-stage approvals, CMDB asset records, and role-based ACLs.",
    mainFeatures: [
      "ServiceNow scoped application repository initialized and linked via Source Control (`sn_source_control.properties`)",
      "Core enterprise domain scope and lifecycle workflow architecture planned (Phase 0)",
    ],
    plannedFeatures: [
      "Custom scoped tables for employee lifecycle tracking and asset assignment",
      "Automated onboarding and offboarding workflows in Flow Designer",
      "Service Catalog request items with multi-stage departmental approval matrices",
      "IT Asset Management (ITAM) and CMDB Configuration Item linking",
      "Role-Based Access Control (ACLs) separating HR and ITIL views",
      "Automated notifications and operational reporting dashboards",
    ],
    technologies: [
      "ServiceNow Platform",
      "Scoped Application Studio",
      "Flow Designer",
      "Business Rules (JavaScript)",
      "Service Catalog",
      "CMDB & ITAM",
      "ACLs & RBAC",
    ],
    architectureNotes:
      "Built inside an isolated ServiceNow application scope tracked via GitHub Source Control. Currently in Phase 0 – Planning on GitHub, with planned modules spanning HR transitions, ITSM catalog fulfillment, CMDB relationships, and scoped ACL governance.",
    myContribution:
      "Initialized the ServiceNow Source Control repository and authored the enterprise lifecycle module breakdown and workflow architecture plan.",
    challengesAndSolutions: [
      {
        challenge:
          "Keeping sensitive HR onboarding data isolated from standard IT service desk fulfillment tasks.",
        solution:
          "Designed a scoped table separation strategy paired with role-specific ACLs separating HR admin access from ITIL fulfillment roles.",
      },
    ],
    lessonsLearned: [
      "Enterprise workflow platforms require strict scope isolation, access governance, and clear handoff states before writing automation scripts.",
    ],
    githubUrl: "https://github.com/rahul-nishad5708/servicenow-enterprise-employee-lifecycle",
    status: "In Development",
    featured: true,
    highlightStats: [
      { label: "Platform", value: "ServiceNow Scoped" },
      { label: "Stage", value: "Phase 0 · Planning" },
      { label: "Target Modules", value: "ITSM, ITAM & CMDB" },
      { label: "Credentials", value: "CSA & CAD Aligned" },
    ],
  },
  {
    id: "leetmetrics",
    name: "LeetMetrics",
    category: "tools",
    categoryLabel: "Developer DSA Utility",
    tagline: "Interactive LeetCode Statistics & Difficulty Breakdown Dashboard",
    description:
      "A lightweight web application built with vanilla HTML, CSS, and JavaScript that queries a LeetCode statistics API to display solved counts, difficulty progress rings, and acceptance rates.",
    problemStatement:
      "Checking problem-solving progress across Easy, Medium, and Hard categories quickly without loading heavy profile dashboards can be streamlined into a focused utility.",
    whyCreated:
      "Created to practice asynchronous Fetch API patterns, JSON parsing, input validation, error recovery, and dynamic DOM rendering without framework overhead.",
    targetUsers:
      "Students, interview candidates, and competitive programmers checking LeetCode statistics.",
    proposedSolution:
      "A zero-dependency web dashboard accepting any LeetCode username (with Enter-key support), rendering circular difficulty progress indicators and handling invalid usernames or API errors gracefully.",
    mainFeatures: [
      "Search any LeetCode username via button click or Enter key",
      "Dynamic display of Easy, Medium, and Hard solved counts with CSS progress indicators",
      "Total solved count, total available questions, and acceptance rate calculation",
      "Graceful error handling for empty inputs, invalid usernames, and failed API responses",
      "Pure vanilla HTML5, CSS3, and ES6+ JavaScript with zero external libraries",
    ],
    plannedFeatures: [
      "Side-by-side comparison of two LeetCode usernames",
      "Recent submissions feed and contest rating chart",
      "Local storage history for recently searched handles",
    ],
    technologies: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Fetch API",
      "REST API",
    ],
    architectureNotes:
      "Single-page client application (`index.html`, `style.css`, `script.js`) using `async/await` fetch calls, input regex validation, and CSS custom properties to update circular progress indicators dynamically.",
    myContribution:
      "Built the entire frontend, API integration, validation logic, error handling, and responsive styling from scratch.",
    challengesAndSolutions: [
      {
        challenge:
          "Preventing UI crashes when upstream public LeetCode stats endpoints return unexpected payloads or rate-limit errors.",
        solution:
          "Added explicit HTTP status checks, try/catch blocks, and clear inline error feedback messages.",
      },
    ],
    lessonsLearned: [
      "Building directly with DOM APIs and async Fetch strengthens core JavaScript fundamentals beneath frameworks like React.",
    ],
    screenshots: [
      {
        src: "/images/projects/leetmetrics-home.png",
        alt: "LeetMetrics dashboard search interface",
        caption: "LeetMetrics Search & Progress Dashboard",
      },
      {
        src: "/images/projects/leetmetrics-stats.png",
        alt: "LeetMetrics live user statistics view for raahul_12",
        caption: "Live Difficulty & Acceptance Stats Breakdown",
      },
    ],
    githubUrl: "https://github.com/rahul-nishad5708/Leetmetrics",
    status: "Completed",
    featured: false,
    highlightStats: [
      { label: "Stack", value: "Vanilla JS · HTML · CSS" },
      { label: "API", value: "Async REST Fetch" },
      { label: "Dependencies", value: "Zero Frameworks" },
      { label: "Status", value: "Completed" },
    ],
  },
];
