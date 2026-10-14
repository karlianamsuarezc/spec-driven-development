# Validation: Scaffold & Server

## Verification Criteria

1. **TypeScript Compilation:**
   - Running `npm run build` (or `npx tsc`) completes successfully with zero type errors or warnings.
   - Running `npm run typecheck` (or `tsc --noEmit`) passes successfully.

2. **Automated Test Suite:**
   - Running `npm test` executes Vitest and all tests pass successfully (`tests/index.test.ts`).

3. **Server Health Check:**
   - Start the server with `npm run dev` (or `npx tsx watch src/index.tsx`).
   - Run `curl http://localhost:3000/` and verify the response is HTML containing the layout and heading.
   - HTTP status code must be `200 OK`.

4. **Ready for Merge:**
   - Once compilation, Vitest test suite execution, and curl verification pass, Phase 1 feature work is validated and ready for implementation merge.
