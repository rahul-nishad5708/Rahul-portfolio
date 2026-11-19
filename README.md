# ⚡ Rahul Chandraveer Nishad — Personal Portfolio & Technical Architecture

> **"Building practical technology. Exploring intelligent solutions. Growing into a better software engineer."**

A premium, high-performance, and accessible developer portfolio for **Rahul Chandraveer Nishad** — Computer Science Undergraduate at Parul University ('27), ServiceNow Certified Application Developer (CAD) & Certified System Administrator (CSA), Full-Stack Developer, and Algorithmic Problem Solver with 435+ verified LeetCode solutions.

---

## 🌟 Key Highlights & Sections

1. **Hero & Dynamic Brand Statement:**
   - Real-time identity: B.Tech CSE ('27) @ Parul University, Vadodara, India.
   - Interactive **Terminal Emulator**: Supports live commands (`help`, `skills`, `projects`, `certifications`, `dsa`, `contact`, `clear`) and quick-action pills.
   - Direct CTA buttons: Explore Projects, View Resume Modal, Contact.

2. **About Me (Authentic Storytelling):**
   - First-person narrative covering why Computer Science was chosen, the transition from algorithmic theory to production engineering, and development philosophy.
   - 4 core capability pillars: Pragmatic Full-Stack, ServiceNow Enterprise Systems, Applied AI, and Algorithmic Rigor.

3. **My Journey (Visual Timeline):**
   - Verified chronological milestones (2023–2027) spanning Parul University, ServiceNow CSA & CAD accreditations, MERN stack mastery, and SaaS deployment.

4. **Technical Stack & Skills Grid:**
   - 6 categorized domains: Programming Languages, Frontend Engineering, Backend & APIs, Databases & Storage, Enterprise & Platforms, Core Competencies.
   - Honest status indicators: **Proficient**, **Actively Using**, and **Exploring** (Zero fake progress bars or arbitrary percentages).

5. **Featured Projects & Expandable Case Studies:**
   - **JobFit.ai**: AI-Powered Resume Analysis & ATS SaaS (Next.js 14, Gemini SSE Streaming, LaTeX ligature-repair pass, Neon Postgres, Razorpay HMAC webhooks).
   - **SnippetSphere**: Full-Stack MERN Developer Tool (React, Node.js, Express, MongoDB, JWT auth, real-time search, tag organization).
   - **Enterprise Employee Lifecycle Management**: Scoped ServiceNow application architecture (ITSM, ITAM, CMDB, Flow Designer).
   - **ConnectSphere**: Next.js 16 Realtime Twitter/X clone with Supabase channels and Hugging Face NLP moderation.
   - **Parul University Academic Management**: Academic course & department workflow system on ServiceNow.
   - **LeetMetrics**: Dynamic vanilla JavaScript DSA performance visualizer querying live LeetCode stats.
   - Interactive category filtering tabs and deep-dive modal case studies.

6. **Industry Certifications & Credentials:**
   - Formally verified credentials for ServiceNow CAD, ServiceNow CSA, and Microsoft Power BI credentials with direct verification links.

7. **Problem Solving & Coding Journey:**
   - Verified breakdown of 435 LeetCode problems solved (170 Easy, 220 Medium, 45 Hard; Top ~285K Global).
   - Core algorithmic patterns mastered (Dynamic Programming, Trees, Graphs, Two Pointers, Monotonic Stacks) and structured problem-solving framework.

8. **Beyond Code:**
   - Thoughtful editorial layout exploring engineering curiosity, first-principles learning, and automation mindset.

9. **Vision & Future Goals:**
   - Clear career trajectory focusing on scalable distributed systems, applied AI, and product craftsmanship.

10. **Interactive Contact & Network:**
    - One-click copy email button with celebratory confetti animations.
    - Validated contact form with instant client-side error checking.
    - Direct social links: GitHub, LinkedIn, LeetCode, X/Twitter.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS v4 & Custom Design Tokens
- **Icons:** Lucide React & Handcrafted Brand SVGs
- **Celebration Effects:** Canvas-Confetti
- **Architecture:** Modular, section-based, with centralized data in `src/data/` for effortless zero-code content updates.

```text
src/
├── app/
│   ├── globals.css         # Theme palette, grid backgrounds & animations
│   ├── layout.tsx          # SEO metadata, OpenGraph, viewport settings
│   ├── not-found.tsx       # Custom 404 page
│   ├── page.tsx            # Main single-page portfolio layout
│   └── sitemap.ts          # Automated sitemap generation
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky blur navbar with mobile drawer
│   │   └── Footer.tsx      # Clean footer with quick links & back-to-top
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── JourneySection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── CodingJourneySection.tsx
│   │   ├── BeyondCodeSection.tsx
│   │   ├── VisionSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── BrandIcons.tsx  # Crisp SVGs for GitHub, LinkedIn, Twitter
│       ├── SectionHeading.tsx
│       └── TerminalTeaser.tsx
├── data/                   # <-- EDIT YOUR CONTENT HERE!
│   ├── profile.ts          # Bio, tagline, academic standing, social links
│   ├── skills.ts           # Categorized skills & proficiency states
│   ├── projects.ts         # Full case study data (problems, solutions, arch)
│   ├── certifications.ts   # ServiceNow CAD/CSA & Power BI credentials
│   ├── timeline.ts         # Career milestones & educational journey
│   ├── dsa.ts              # LeetCode statistics & algorithmic topics
│   └── social-links.ts     # Social media profiles & handles
├── lib/
│   └── utils.ts            # Tailwind merge utility
└── types/
    └── index.ts            # Strict TypeScript domain interfaces
```

---

## 🚀 Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build production bundle:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm run start
   ```

---

## ✏️ How to Update Your Information

You do **not** need to touch React UI components to update your information. Simply edit the clean TypeScript files in `src/data/`:

- **Change your bio, tagline, or links:** Edit `src/data/profile.ts`.
- **Add or edit a project:** Add an object to `projectsData` in `src/data/projects.ts`.
- **Update LeetCode problem counts:** Update `totalSolved`, `easySolved`, etc. in `src/data/dsa.ts`.
- **Add a new certification:** Add to `certificationsData` in `src/data/certifications.ts`.
- **Add a journey milestone:** Add to `timelineMilestones` in `src/data/timeline.ts`.

---

## ☁️ Deploying to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: complete modern portfolio for Rahul Chandraveer Nishad"
   git branch -M main
   git remote add origin https://github.com/rahul-nishad5708/portfolio.git
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com/new) and import your `portfolio` repository.
3. Framework Preset: **Next.js** (auto-detected).
4. Click **Deploy**. Vercel will build and assign your production URL within 60 seconds!

---

## 📄 License

Created with pride by **Rahul Chandraveer Nishad**. MIT License.
