export const portfolioData = {
  about: "AI-native full-stack Software Engineer (~1.5 years) who treats coding agents as part of the engineering team. I designed an AI-augmented SDLC around Claude Code - agents draft each stage from workflow docs to specs, implementation and tests, while I own the architecture, review and final call - and used it to ship a procurement ERP (ERPNext) and a support CRM as the sole engineer. Day to day I'm a core engineer on the Medusa.js marketplace behind ICICI iRewards (~INR 50 Cr monthly sales, ~5,500 orders/day), owning schema and API design, RBAC, job queues and AWS deployment. On the side I build LLM-powered products: agentic semantic search with LangGraph, Ollama and pgvector, and Gemini-driven interview prep.",
  experience: [
    {
      id: 1,
      company: "Reward360 Global",
      role: "Software Development Engineer (Full-Stack)",
      duration: "Nov 2025 – Present",
      achievements: [
        "ICICI iRewards: Core engineer on the Medusa.js v2 (Node.js, TypeScript, PostgreSQL) CMS powering ICICI iRewards 2.0, white-labeled across bank clients; live since Aug 2026 at ~5,500 orders/day, with a record INR 2.01 Cr GMV day.",
        "iRewards 1.0 (INR 30–35 Cr/month) hid in-stock products and needed weeks of dev, design and QA for every campaign. With my team, made Medusa the product source of truth, added AWS OpenSearch and built a no-code drag-and-drop page builder, cutting campaign launches from weeks to ~10 minutes; monthly sales rose to ~INR 50 Cr (40%+ uplift).",
        "Designed schemas and REST APIs for a 4,000+ product multi-variant catalog, and a webhook-driven BullMQ/Redis queue that syncs every product with the PHP-based ERP, whether created manually, bulk-imported or migrated from iRewards 1.0.",
        "Building Points + Cash redemption, projected to take iRewards revenue past INR 80 Cr; built a product grouper that consolidates legacy single-SKU ERP items into master products with variants.",
        "Designed a database-backed 4-tier RBAC system with custom React hooks and permission-gated components for 30+ admin users; built Azure AD SSO (OAuth 2.0/OIDC via MSAL) with Conditional Access MFA.",
        "Own backend deployment on AWS EC2 and Docker/ECS; traced recurring ECS out-of-memory failures to migrations running on every container start, plus a missing HEALTHCHECK and graceful shutdown.",
        "Built the full product catalog for ICICI's ultra-HNI 1838 credit card launch and migrated its program products from staging to production under a tight go-live deadline.",
        "Internal platforms (sole engineer, AI-native delivery): Designed an AI-augmented SDLC around Claude Code that generates a prompt for each stage - workflow docs to specs, implementation and testing - which I review and refine before execution; used it to ship two internal platforms solo.",
        "Built a custom procurement ERP on ERPNext (Frappe, Python) from the company's ERP workflow documentation, modelling each domain as workflows and DocTypes.",
        "Building an agent-facing support CRM on Escalated (AdonisJS, Vue 3, PostgreSQL) with role-based ticket assignment and verified customer/order lookup from the Medusa platform.",
        "HDFC SmartBuy (8.5M+ MAU, 40M+ eligible users): Led the frontend migration of a 5+ year legacy AngularJS codebase to Next.js, rebuilding 15+ modules and refactoring 20+ components into a reusable TypeScript component library.",
        "Revamped the multicity flight journey from sector-based to bundled listing and booking, eliminating fare discrepancies with partner (EMT) inventory on a revenue-critical flow; resolved 50+ production issues across web and mobile."
      ]
    },
    {
      id: 2,
      company: "DKG Labs",
      role: "Software Development Engineer (Frontend)",
      duration: "Dec 2024 – May 2025",
      achievements: [
        "Owned end-to-end frontend delivery of an inventory and procurement system for the Indian Institute of Astrophysics (IIA), acting as the bridge between the institute, PMs and engineering.",
        "Built 4 core transactional workflows (indent, tender, sales order, purchase) on REST APIs, plus a multi-stage approval queue with sequential routing and role-based page access.",
        "Created a reusable React + Ant Design + TailwindCSS component library, cutting new-module build time by ~30–40%."
      ]
    }
  ],
  education:[
    {
      id: 1,
      institution: "USICT, Guru Gobind Singh Indraprastha University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2021 – 2025",
      grade: "8.0/10 GPA"
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
      title: "SecureTasks AI",
      description: "Jira/Linear-style multi-tenant task platform with auth, workspaces, projects, tasks, comments, notifications and audit logging; Next.js on Vercel, Express API on Render, PostgreSQL on Neon via Prisma. In progress: an AI microservice (Ollama, LangGraph, pgvector) for semantic search over project data.",
      tech: ["Next.js", "Express.js", "TypeScript", "PostgreSQL", "Prisma", "Neon", "LangGraph", "Ollama", "pgvector"],
      link: "https://securetasks-ai.vercel.app/",
      githubLink: "https://github.com/Sunit-03/SecureTasks"
    },
    {
      id: 2,
      title: "InterviewAI",
      description: "MERN interview-prep platform generating 10+ tailored interview questions from a user's role, skills and experience via Gemini 2.5 Pro, with a regenerable \"Explain\" mode, JWT auth and a mobile-first UI (Lighthouse accessibility >90, best practices 100).",
      tech: ["React", "MongoDB", "Express.js", "Node.js", "Gemini 2.5 Pro", "JWT", "Tailwind"],
      link: "https://interview-ai-frontend-sooty.vercel.app/",
      githubLink: "https://github.com/Sunit-03/InterviewAI-Frontend"
    },
  ],
  skills: [
    "AI-Augmented SDLC", "Agentic Coding", "Claude Code", "GitHub Copilot", "OpenAI Codex",
    "LLM Integration (Claude, GPT, Gemini)", "LangGraph", "Ollama", "pgvector", "Semantic Search",
    "TypeScript", "JavaScript (ES6+)", "Python", "SQL", "HTML5", "CSS3",
    "Node.js", "Express.js", "Medusa.js (v2)", "AdonisJS", "ERPNext (Frappe)", "REST API Design", "Schema Design", "BullMQ", "Prisma",
    "PostgreSQL", "Redis", "MongoDB", "OpenSearch", "Firebase",
    "AWS (EC2, ECS)", "Docker", "CI/CD", "Vercel", "Render", "Linux", "Git", "Postman", "Jira", "Agile",
    "OAuth 2.0", "OIDC", "Azure AD SSO (MSAL)", "JWT", "2FA", "RBAC", "API Rate Limiting",
    "React.js", "Next.js", "Vue 3", "Redux", "Context API", "React Hook Form", "Zod", "TailwindCSS", "Ant Design", "AngularJS"
  ]
};
