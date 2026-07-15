export const portfolioData = {
  about: "Full-stack software engineer who thinks in systems, not tickets - architecting and shipping complete products (access control, authentication, deployment) rather than isolated features. Experience building scalable React/Next.js frontends and Node.js/Medusa.js backends for platforms serving 8M+ monthly users, plus hands-on agentic AI development (Claude Code, GitHub Copilot, OpenAI Codex, Google Antigravity) and multi-model LLM integration (Anthropic, OpenAI, Google).",
  experience: [
    {
      id: 1,
      company: "Rewards360",
      role: "Software Development Engineer (Full-Stack)",
      duration: "Nov 2025 – Present",
      achievements: [
        "Architecting and building a new internal marketplace product end-to-end (React/TypeScript admin UI + Medusa.js/Node.js backend) spanning 5-10 admin and catalog modules, currently being integrated with ICICI iRewards to power an estimated INR 30 Cr in annual revenue.",
        "Designed the platform's access-control system from the ground up: a 3-tier RBAC model (super admin, catalog admin, catalog viewer) using custom React hooks and permission-gated components.",
        "Built enterprise-grade authentication: Azure AD SSO (OAuth 2.0/OIDC via MSAL) with Conditional Access/MFA, plus two-factor authentication (2FA) for privileged admin roles.",
        "Owned backend deployment on AWS EC2 and drove platform stability by diagnosing and resolving critical defects ahead of UAT.",
        "Delivered production features on the HDFC SmartBuy platform, serving ~8.5M monthly active users and 20M+ registered users across rewards, travel, and shopping journeys.",
        "Led the frontend side of migrating a 5+ year legacy AngularJS codebase to Next.js (React), rebuilding 15+ modules and refactoring 20+ components into a reusable TypeScript library, improving development velocity by ~25%.",
        "Improved platform reliability by resolving 50+ production issues, and independently designed and shipped a WhatsApp Business automation system (Node.js, WABA, Sinch, CRM) for automated booking confirmations and promotional campaigns."
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
      description: "AI powered interview preparation platform generating 10+ tailor-made questions from a user's target role, skills, and experience via Gemini 2.5 Pro, with an on-demand \"Explain\" feature for deeper, regenerable AI explanations.",
      tech: ["React", "Mongo", "GenAI", "Tailwind", "Node.js", "JavaScript", "Gemini 2.5", "JWT"],
      link: "https://interview-ai-frontend-sooty.vercel.app/    ",
      githubLink: "https://github.com/Sunit-03/InterviewAI-Frontend"
    },
    {
      id: 2,
      title: "TravelX",
      description: "Smart AI itinerary planner generating budget-based itineraries via Gemini 1.5 Pro, surfacing the top 3 hotel matches with a full day-by-day plan and Google Maps deep-linking.",
      tech: ["React + Vite", "Tailwind", "GenAI", "JavaScript", "Google Maps APIs", "Firebase", "Google Cloud"],
      link: "https://travel-x-peach.vercel.app/",
      githubLink: "https://github.com/Sunit-03/travelX-AI"
    }
  ],
  skills: [
    "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Medusa.js", "Express", "TailwindCSS", "Ant Design",
    "Azure AD SSO (MSAL)", "OAuth 2.0 / OIDC", "JWT", "RBAC", "AWS EC2", "MongoDB", "Firebase",
    "Claude Code", "GitHub Copilot", "OpenAI Codex", "Google Antigravity", "Gemini 2.5 Pro",
    "Git/GitHub", "Postman", "WABA", "CRM systems"
  ]
};
