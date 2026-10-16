# Requirements: Scaffold & Server

## Context
Phase 1 of the AgentClinic roadmap establishes the foundational server infrastructure and component layout. Per stakeholder requirements (Mary in engineering, Steve in marketing), we are using TypeScript and Hono with server-rendered JSX layout components, Vitest for testing validation, and mobile-first responsive design.

## Scope
- Hono server setup in TypeScript
- Shared layout component with Header, Main, and Footer subcomponents
- Static CSS stylesheet with CSS custom properties and media queries linked and served via static middleware
- Mobile-first responsive layout foundation (viewport meta tag, scalable viewports)
- Zero-build-step development workflow using `tsx`
- Automated test suite using Vitest for validation
- Root endpoint (`GET /`) rendering the home page within the layout

## Technical Decisions
- **Framework:** Hono for lightweight, fast, TypeScript-first routing and JSX rendering.
- **Language:** TypeScript for end-to-end type safety.
- **CSS:** Mobile-first plain CSS + CSS custom properties and `min-width` media queries (satisfying Steve).
- **Testing:** Vitest for robust component and route testing.
- **Runtime Tooling:** `tsx` for rapid local development execution without manual compilation steps.
