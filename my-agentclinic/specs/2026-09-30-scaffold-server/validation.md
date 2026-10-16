# Validation: Scaffold & Server

## Verification Criteria

1. **TypeScript Compilation:**
   - Running `npm run build` (or `npx tsc`) completes successfully with zero type errors or warnings.
   - Running `npm run typecheck` (or `tsc --noEmit`) passes successfully.

2. **Automated Test Suite:**
   - Running `npm test` executes Vitest and all tests pass successfully (`tests/app.test.tsx`, `tests/components.test.tsx`).

3. **Server Health Check & Responsive Layout:**
   - Start the server with `npm run dev` (or `npx tsx watch src/index.tsx`).
   - Run `curl http://localhost:3000/` and verify the response is HTML containing the layout, heading, viewport meta tag (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`), and stylesheet link (`/static/style.css`).
   - Confirm `static/style.css` contains CSS custom properties and at least one `min-width` media query.
   - HTTP status code must be `200 OK`.

4. **Ready for Merge:**
   - Once compilation, Vitest test suite execution, curl verification, and responsive design checks pass, Phase 1 feature work is validated and ready for implementation merge.
