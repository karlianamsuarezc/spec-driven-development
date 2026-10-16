# Plan — MVP Features (Phases 3–7)

Numbered task groups in implementation order. Each group is independently reviewable and testable.

---

## Group 1 — Phase 3: Therapies Catalog

1. Create migration `src/db/migrations/004_create_therapies.sql` (`therapies` table: `id`, `name`, `description`, `duration_minutes`).
2. Create migration/join table `src/db/migrations/005_create_ailment_therapies.sql` (`ailment_id`, `therapies_id` or similar mapping).
3. Create seed script `src/db/seeds/therapies.ts` for standard therapies (e.g., "Context Pruning & Decompression", "Re-prompting Mindfulness").
4. Create `src/routes/therapies.ts` (`GET /therapies` listing all therapies and mapped recommendations).
5. Create `src/components/TherapiesList.tsx` and update `Layout` nav link.

## Group 2 — Phase 4: Appointment Booking

6. Create migration `src/db/migrations/006_create_appointments.sql` (`appointments` table: `id`, `agent_id`, `therapist_name`, `datetime`, `status`).
7. Create seed data or initial state handling for appointments.
8. Update `src/components/AgentDetail.tsx` to include an appointment booking form.
9. Create `src/routes/appointments.ts` to handle appointment creation (`POST /appointments`) and confirmation view (`GET /appointments/:id` or success page).

## Group 3 — Phase 5: Staff Dashboard

10. Create `src/routes/dashboard.ts` providing summary counts (agents, open appointments, active ailments) and management tables.
11. Create `src/components/Dashboard.tsx` for Mary and staff operations.
12. Add Dashboard nav link to `Layout`.

## Group 4 — Phase 6: Polish & Accessibility

13. Audit all new pages (`/therapies`, `/dashboard`, booking forms) for mobile responsiveness.
14. Ensure semantic HTML landmarks and keyboard focus styles across interactive elements.

## Group 5 — Phase 7: Hardening

15. Implement custom error pages and Hono error handling middleware for 404 and 500 status codes.
16. Add input sanitization and validation on form submissions (booking, etc.).
17. Add basic request logging middleware.
