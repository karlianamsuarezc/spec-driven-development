# Validation — MVP Features (Phases 3–7)

Implementation is complete and ready to merge when all criteria below pass.

---

## 1. TypeScript Compiles Clean

```bash
npx tsc --noEmit
```
Must exit with code 0 and no errors or warnings.

---

## 2. Vitest Unit & Integration Tests

Run with:
```bash
npm test
```

Required test verification:
- Database migrations for therapies, ailment_therapies, and appointments execute successfully and idempotently.
- Seed data for therapies loads correctly.
- Routes return expected status codes and content:
  - `GET /therapies` returns HTTP 200 and lists therapies.
  - `GET /dashboard` returns HTTP 200 and displays summary counts.
  - `POST /appointments` creates an appointment record and redirects/confirms successfully.
  - Non-existent routes return HTTP 404.

---

## 3. Manual Smoke Test Checklist
- Navigate through home -> agents -> ailments -> therapies -> booking -> dashboard.
- Verify responsive layout on mobile and desktop viewports.
- Confirm keyboard navigation and focus outlines on form controls and links.
