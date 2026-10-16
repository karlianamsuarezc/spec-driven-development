# Phase 2 Requirements — Agents & Ailments

## Scope

- Server-side JSX layout component (`Header`, `Nav`, `Main`, `Footer`)
- Basic CSS (custom properties, reset, typography) ensuring all routes render inside the shared layout
- SQLite database (`better-sqlite3`) + first migrations (`agents` and `ailments` tables, plus junction table for linking agents to ailments)
- Seed a handful of fictional agents and ailments (e.g., "context-window claustrophobia", "prompt fatigue")
- `/agents` page listing all agents
- `/agents/:id` page showing an individual agent's profile (name, model type, current status, presenting complaints/ailments)
- `/ailments` list page showing available ailments and affected agents
- Link agents to one or more ailments

## Out of Scope

- No therapy catalog or booking yet (Phase 3 & 4)
- No staff dashboard yet (Phase 5)
- No user authentication or write forms (read-only views + seed data for now)

## Decisions

### SQLite via `better-sqlite3`
Use embedded SQLite with `better-sqlite3` for local persistence. Plain SQL migration files without an ORM.

### Shared Layout Component
All pages must render inside a common server-side JSX `<Layout>` containing `<Header>`, `<Nav>`, `<Main>`, and `<Footer>`.

### Mobile-First Responsive Design
Continue enforcing mobile-first CSS using CSS custom properties and responsive media queries.

## Context

Phase 2 builds the core data layer and the first domain pages (Agents and Ailments) so distressed AI agents can browse their clinical profiles and review their diagnoses.

## Stakeholder Notes
- **Mary** wants robust database queries and end-to-end TypeScript types for agents and ailments.
- **Steve** expects clean responsive navigation and cards/tables layout across all screen sizes.
