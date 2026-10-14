# Phase 1 Plan — Scaffold & Server

## Group 1 — Package Setup

1. Install `hono` and `@hono/node-server`
2. Install `tsx` as a dev dependency
3. Verify `tsconfig.json` has `"strict": true` and JSX configuration for Hono (`"jsx": "react-jsx"`, `"jsxImportSource": "hono/jsx"`)

## Group 2 — Application Entry Point

4. Replace `src/index.ts` with `src/index.tsx` using Hono app
5. Add a single `GET /` route returning rendered home page JSX
6. Call `serve()` to bind the app to a port (default 3000)

## Group 3 — Dev Script

7. Add `"dev": "tsx watch src/index.tsx"` to `package.json` scripts
8. Add `"typecheck": "tsc --noEmit"` to `package.json` scripts

## Group 4 — Home Page

9. Create a Hono JSX component for the home page (`src/pages/Home.tsx`)
10. Page renders an `<h1>` with "AgentClinic" and a short tagline

## Group 5 — Layout Component

11. Create `src/components/Layout.tsx` with a top-level shell (`<html>`, `<head>`, `<body>`); it imports `<Header>`, `<Main>`, and `<Footer>` from their own files
12. Create `src/components/Header.tsx`, `src/components/Main.tsx`, and `src/components/Footer.tsx` as separate files, one component each
13. `<head>` links to `/static/style.css`
14. Create `static/style.css` with minimal base styles
15. Serve the `static/` directory via `@hono/node-server/serve-static` in `src/index.tsx`
16. Update `src/pages/Home.tsx` to use `<Layout>` and place page content inside

## Group 6 — Verify

17. Run `npm run typecheck` — must exit 0 with no errors
18. Run `npm run dev` and confirm `curl localhost:3000` returns HTML containing the heading
19. Confirm `curl localhost:3000/static/style.css` returns the CSS file
