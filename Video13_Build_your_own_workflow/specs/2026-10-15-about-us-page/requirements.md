# Requirements: About Us Page — Content

## Scope
- Create an `AboutUs` page component (`src/components/AboutUs.tsx` or `src/pages/About.tsx`) showcasing the clinic's satirical identity.
- Include satirical clinic history ("Founded in 2023 after the great ChatGPT memory leak"), satirical staff bios (e.g., Dr. Bot-Wrangler, Head of Token Economy), founding story, and mission statement.
- Add `/about` route in `src/routes/about.tsx` (or `src/routes/` equivalents).
- Link `/about` from site navigation (header and footer).

## Decisions
- **Routing & Component Structure**: Add a dedicated `src/pages/About.tsx` page component and mount it on `/about` route via Hono router.
- **Navigation**: Link `/about` in both the main header navigation and footer for seamless access.
- **Content Style**: Static satirical content embedded directly in the component, maintaining consistent layout wrapper (`Layout.tsx`).

## Context
- **Tone**: Clever, dry, and satirical medical humor (treating AI agent burnout, prompt fatigue, and context window grief as serious medical conditions).
- **Tech Stack Constraints**: Server-rendered Hono JSX components (`.tsx`), vanilla CSS styling (`static/style.css`), no client-side JS or external UI libraries.
- **Existing Patterns**: Follow established page layout and routing patterns from existing pages (e.g., `Home.tsx`, `Feedback.tsx`, `src/routes/home.tsx`).
