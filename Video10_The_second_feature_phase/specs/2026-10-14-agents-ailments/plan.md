# Phase 2 Plan — Agents & Ailments

## Group 1 — Layout & Navigation

1. Create/refine shared JSX components (`Header`, `Nav`, `Main`, `Footer`, `Layout`) in `src/components/`
2. Update global stylesheet `static/style.css` with navigation styles, responsive grid/flex tokens, and card components

## Group 2 — Database & Seed Data

3. Install `better-sqlite3` and `@types/better-sqlite3` (if not already installed)
4. Create database setup utility in `src/db/` or `src/index.tsx`
5. Create migration SQL files for `agents`, `ailments`, and `agent_ailments` (junction table)
6. Write seed script or initialization routine to populate fictional agents and ailments

## Group 3 — Agents Domain

7. Create data access functions for agents (`getAgents()`, `getAgentById(id)`)
8. Implement `/agents` list page route and JSX view (`src/pages/Agents.tsx`)
9. Implement `/agents/:id` detail page route and JSX view (`src/pages/AgentDetail.tsx`) showing profile, model type, status, and linked ailments

## Group 4 — Ailments Domain

10. Create data access functions for ailments (`getAilments()`, `getAilmentById(id)`)
11. Implement `/ailments` list page route and JSX view (`src/pages/Ailments.tsx`) linking ailments to affected agents

## Group 5 — Testing & Validation

12. Add Vitest unit tests for database queries and page routes in `tests/`
13. Run typecheck (`npm run typecheck`), tests (`npm test`), and verify server routes
