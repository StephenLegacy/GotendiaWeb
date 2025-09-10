# Gotendia — README

Welcome — this repo contains the Gotendia site built with Next.js (App Router), TypeScript, Tailwind CSS, and a small component library (UI primitives in `components/ui`). This README explains how to get the project running locally, build & deploy.

**Repository**: https://github.com/GOTENDIA/gotendia.git

## Quick start

1.  **clone**
    ```sh
    git clone https://github.com/GOTENDIA/gotendia.git
    ```
2.  **move into cloned the directory**
    ```sh
    cd gotendia
    ```
3.  **install dependencies** (npm recommended because repo includes `package-lock.json`)
    ```sh
    npm install
    ```
4.  **run development server**
    ```sh
    npm run dev
    ```
    Open http://localhost:3000

---

## Scripts

Use the npm scripts defined in `package.json`:

- `npm run dev` — start Next.js dev server (hot reload)
- `npm run build` — build for production
- `npm run start` — start production server (after `npm run build`)
- `npm run lint` — run ESLint
- `npm run format` — run code formatter (if configured)
- `npm test` — run tests (if present)

If you prefer pnpm or yarn, they should work — just run the equivalent install command and adjust scripts if necessary.

---

## Prerequisites

- Node.js (LTS recommended — Node 18+ works well)
- npm (comes with Node) or pnpm / yarn
- Git

---

## Project structure (important files)

- `app/` — Next.js App Router pages + layout (`app/layout.tsx`, `app/page.tsx`)
- `assets/` — locally imported images (`hero-pattern`, etc.)
- `components/` — UI components and sections (`HeroSection`, `AboutSection`, `ui/*`)
- `public/` — static assets served at `/` (`favicon.png`, etc.)
- `tailwind.config.js` — Tailwind setup
- `next.config.ts` — Next.js configuration
- `globals.css` — global styles + design tokens
