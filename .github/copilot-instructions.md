# Copilot Instructions

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run lint      # Run ESLint
```

No test suite exists in this project.

## Architecture

This is a **single-page portfolio** built with Next.js 16 (App Router) + React 19 + TypeScript.

- `app/page.tsx` — Composes all portfolio sections in order (Hero → About → Experience → Projects → Skills → Contact)
- `app/layout.tsx` — Root layout: wraps everything in `Providers` (next-themes), `Navbar`, and `Footer`
- `app/providers.tsx` — Client-side `ThemeProvider` wrapper (must be `"use client"`)
- `data/portfolio.ts` — **Single source of truth** for all portfolio content (experience, projects, skills). Components read from `portfolioData` exported here.
- `data/projects.ts` — Unused legacy file; do not use it. Use `portfolioData.projects` in `data/portfolio.ts` instead.
- `components/` — One file per portfolio section (e.g., `hero.tsx`, `project-card.tsx`); all are Client Components (`"use client"`) because they use Framer Motion
- `components/ui/` — shadcn/ui primitives (button, badge, card, input, textarea); add new ones via `npx shadcn add <component>`
- `lib/utils.ts` — Exports `cn()` helper (`clsx` + `tailwind-merge`) for conditional class names

## Key Conventions

### Styling
- **Custom utilities** defined in `app/globals.css` via `@utility`: `glass-card`, `text-gradient`, `neon-border-hover`. Use these for consistent card and text effects.
- **Neon color palette**: `text-neon-blue` (`#00f0ff`) and `text-neon-purple` (`#8a2be2`) — used for section numbers, accents, and glow effects. Both are defined as Tailwind theme colors.
- **Dark-first design**: The site defaults to dark mode. Always verify both light and dark appearances. CSS variables for both themes live in `globals.css`.
- Always use `cn()` from `@/lib/utils` when composing conditional Tailwind classes.

### Animations
- All scroll-triggered animations use Framer Motion's `whileInView` with `viewport={{ once: true }}` — keep this pattern consistent.
- Entry animations follow `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}`.
- Staggered list items use `transition={{ delay: idx * 0.1 }}`.

### Section structure
- Each section component wraps its content in `<section id="...">` for anchor-link navigation (used by the navbar).
- Section headings use a numbered prefix styled with neon colors (e.g., `<span className="text-neon-blue">02.</span>`), followed by a decorative line divider.

### Content updates
- To add/edit personal content (experience, projects, skills), **only edit `data/portfolio.ts`** — components pull from it automatically.

### Path aliases
- Use `@/` to import from the project root (e.g., `@/components/hero`, `@/lib/utils`, `@/data/portfolio`).

### shadcn/ui
- Config lives in `components.json` (style: `radix-nova`, icon library: `lucide`).
- Add components with: `npx shadcn add <component>`
