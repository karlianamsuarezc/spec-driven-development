# Plan: Feedback Form

## Task Group 1: Database Schema & Migration
- [ ] Add migration file for `feedback` table in `src/db/migrations/`
- [ ] Update database migration runner / types if needed
- [ ] Seed initial feedback entries in `src/db/seed.ts`

## Task Group 2: Components & Routes
- [ ] Build `FeedbackForm` and `FeedbackList` components in `src/components/`
- [ ] Create `/feedback` route handler in `src/routes/feedback.tsx` (or `src/index.tsx`) supporting GET and POST
- [ ] Update site navigation / header to link to `/feedback`

## Task Group 3: Validation & Testing
- [ ] Write unit/integration tests in `tests/` for feedback submission and display
- [ ] Run test suite (`npm test`) and type check (`npm run typecheck`) to ensure zero regressions
