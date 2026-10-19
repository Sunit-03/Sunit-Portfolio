export const portfolioData = {
  about: "Backend-leaning full-stack Software Engineer (~1.5 years) building production commerce platforms with Node.js, TypeScript, Medusa.js, PostgreSQL and React. Building the marketplace platform behind ICICI iRewards (INR 50 Cr monthly sales, ~5,500 orders/day) and led a legacy-to-Next.js migration on HDFC SmartBuy (8.5M+ MAU). I own schema and API design, auth and RBAC, job queues, Docker/AWS deployment and production debugging - and ship faster with agentic AI tools (Claude Code, GitHub Copilot, OpenAI Codex, Google Antigravity).",
  experience: [
    {
      id: 1,
      company: "Reward360",
      role: "Software Development Engineer (Full-Stack)",
      duration: "Nov 2025 – Present",
      achievements: [
        "ICICI iRewards: Architecting the Medusa.js (Node.js, TypeScript, PostgreSQL) platform that is the CMS and product source of truth for ICICI iRewards, the points-redemption storefront open to all ICICI credit-card holders.",
        "Since go-live in Aug 2026, monthly sales grew from INR 30–35 Cr to INR 50 Cr in the first full month (INR 35 Cr vouchers, INR 15 Cr physical products), a 40%+ uplift; the platform averages ~5,500 orders/day and handled a record INR 2.01 Cr GMV day (INR 57.59 L physical).",
        "Designed database schemas and RESTful APIs for a 3,000+ product, multi-variant catalog across 8+ admin and catalog modules, integrated with the ERP via webhook-driven BullMQ/Redis job queues; analyzed queue load and data consistency across Redis and PostgreSQL.",
        "Designed a database-backed 3-tier RBAC system (super admin, catalog admin, catalog viewer) with custom React hooks and permission-gated components for 30+ admin users; built Azure AD SSO (OAuth 2.0/OIDC via MSAL) with Conditional Access MFA, plus 2FA for privileged roles.",
        "Own backend deployment on AWS EC2 and Docker/ECS; diagnosed recurring ECS out-of-memory failures, tracing root causes to a missing Docker HEALTHCHECK, no graceful shutdown and migrations running on every container start.",
        "Analyzed a 90-threat STRIDE threat model, triaging top risks (SQL injection, TLS/cookie config, information disclosure); resolved critical defects ahead of UAT.",
        "Building a custom ERPNext (Frappe) procurement module from the company's ERP workflow.",
        "HDFC SmartBuy (8.5M+ MAU, 40M+ eligible users): Led the frontend migration of a 5+ year legacy AngularJS codebase to Next.js (React), rebuilding 15+ modules and refactoring 20+ components into a reusable TypeScript component library.",
        "Revamped the multicity flight booking journey from sector-based to bundled listing and booking, eliminating fare discrepancies with partner (EMT) inventory on a revenue-critical flow.",
        "Resolved 50+ production issues across web and mobile, including same-day hotel bookings and web/mobile flight-view parity.",
        "Customer lifecycle (CLCM) platform: Built a centralized WhatsApp Business (WABA) automation system end-to-end in Node.js, scoped for every bank client."
      ]
    },
    {
      id: 2,
      company: "DKG Labs",
      role: "Software Development Engineer",
      duration: "Dec 2024 – May 2025",
      achievements: [
        "Owned end-to-end frontend product delivery for an inventory and procurement management system built for the Indian Institute of Astrophysics (IIA), Bangalore, adopted by 20-50 institutional staff.",
        "Designed and built 4 core transactional workflows (indent, tender, sales order, purchase forms), each integrated with backend REST APIs for end-to-end procurement processing.",
        "Architected a multi-stage approval queue system enforcing sequential workflow routing across the institutional approval hierarchy.",
        "Implemented frontend-level RBAC to control page and feature access across different institutional staff roles.",
        "Built a reusable component library (React, Ant Design, TailwindCSS), cutting development time for new modules by ~30-40% and improving UI consistency.",
        "Led client requirement discussions and stakeholder communication end-to-end, acting as the primary bridge between the institute, product managers, and the engineering team."
      ]
    }
  ],
  education:[
    {
      id: 1,
      institution: "USICT, Guru Gobind Singh Indraprastha University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2021 – 2025",
      grade: "8/10 CGPA"
    },
    {
      id: 2,
      institution: "The Air Force School, Subroto Park",
      degree: "Senior Secondary Education (12th)",
      duration: "2019 – 2021",
      grade: "95.6%"
    }
  ],
  projects: [
    {
      id: 1,
      title: "InterviewAI",
      description: "MERN interview-prep platform generating 10+ tailored interview questions from a user's role, skills and experience via Gemini 2.5 Pro, with a regenerable \"Explain\" mode, JWT auth and a mobile-first UI (Lighthouse accessibility >90, best practices 100).",
      tech: ["React", "MongoDB", "Express.js", "Node.js", "Gemini 2.5 Pro", "JWT", "Tailwind"],
      link: "https://interview-ai-frontend-sooty.vercel.app/",
      githubLink: "https://github.com/Sunit-03/InterviewAI-Frontend"
    },
    {
      id: 2,
      title: "TravelX",
      description: "AI itinerary planner generating budget-based day-by-day itineraries and top-3 hotels in under 10 seconds, upgraded from Gemini 1.5 to Gemini 3.6 Flash; integrates Google Maps, Places and Images APIs with Google OAuth (Lighthouse performance >90).",
      tech: ["React + Vite", "Firebase", "Gemini 3.6 Flash", "Google Maps APIs", "Google OAuth", "Tailwind"],
      link: "https://travel-x-peach.vercel.app/",
      githubLink: "https://github.com/Sunit-03/travelX-AI"
    }
  ],
  skills: [
    "TypeScript", "JavaScript", "Python", "Node.js", "Express.js", "Medusa.js (v2)", "RESTful API Design",
    "Database Schema Design", "BullMQ", "ERPNext (Frappe)", "PostgreSQL", "MongoDB", "Redis", "Firebase",
    "AWS (EC2, ECS)", "Docker", "CI/CD", "Git/GitHub", "Postman",
    "OAuth 2.0 / OIDC", "Azure AD SSO (MSAL)", "JWT", "2FA", "RBAC", "Threat Modeling (STRIDE)",
    "React", "Next.js", "Redux", "TailwindCSS", "Ant Design",
    "Multi-model LLM Integration", "Prompt Engineering", "Claude Code", "GitHub Copilot", "OpenAI Codex", "Google Antigravity"
  ]
};
