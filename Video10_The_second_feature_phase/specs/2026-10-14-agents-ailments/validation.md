# Phase 2 Validation — Agents & Ailments

## Definition of Done

All of the following must be true before this branch is merged.

### 1. TypeScript compiles cleanly

```
npm run typecheck
```

Must exit with code 0.

### 2. Unit tests pass

```
npm test
```

Must execute Vitest test suite successfully (exit code 0).

### 3. Routes return successful responses

- `GET /agents` returns 200 OK with list of agents.
- `GET /agents/:id` returns 200 OK with agent profile and ailments.
- `GET /ailments` returns 200 OK with list of ailments.

### 4. Database initialization & seeding

Database initializes correctly on startup, creating tables and sample seed data for agents and ailments without runtime errors.

### 5. Shared layout & responsive design

All pages render inside the shared `<Layout>` with navigation links and mobile-first CSS styling.
