# Requirements — MVP Features (Phases 3–7)

## Scope

This MVP feature set completes the AgentClinic platform by delivering the remaining core operational phases:
- **Phase 3 — Therapies Catalog:** Therapies table & seed data, `/therapies` list page, mapping ailments to recommended therapies.
- **Phase 4 — Appointment Booking:** Appointments table, booking form on agent detail pages, booking submission handling, and confirmation view.
- **Phase 5 — Staff Dashboard:** `/dashboard` view with summary metrics (total agents, open appointments, active ailments) and staff record management tables.
- **Phase 6 — Polish & Accessibility:** Responsive layout audit across all new views, semantic HTML review, keyboard navigation and focus styles.
- **Phase 7 — Hardening:** Error pages (404, 500), input sanitization on all forms, and basic request logging middleware.

## Decisions

### Database & Migrations
- Continue using SQLite via `better-sqlite3` with plain `.sql` migration files in `src/db/migrations/` and idempotent seed scripts.
- Add new tables: `therapies`, `ailment_therapies` (or direct mapping), and `appointments`.

### Rendering & UX
- Server-side Hono JSX rendering for all pages, maintaining consistency with the shared `Layout` component.
- Plain CSS with CSS custom properties following mobile-first responsive design.

### Validation & Testing
- Vitest unit tests covering new database migrations, seed integrity, and route handlers.
- TypeScript strict type checking (`tsc --noEmit`).

## Context

These phases transform AgentClinic from a prototype displaying basic agents and ailments into a fully functional wellness platform for AI agents, empowering agents to find therapies, book appointments, and giving staff real-time visibility into clinic operations.

See `specs/mission.md` for domain context and `specs/tech-stack.md` for architectural constraints.

## Out of Scope
- Authentication / authorization (later phase).
- Email notifications and external calendar integrations.
- Advanced reporting and analytics beyond the core staff dashboard.
