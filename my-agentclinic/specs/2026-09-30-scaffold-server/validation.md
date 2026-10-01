# Validation: Scaffold & Server

## Verification Criteria

1. **TypeScript Compilation:**
   - Running `npm run build` (or `npx tsc`) completes successfully with zero type errors or warnings.

2. **Server Health Check:**
   - Start the server with `npm run dev` (or `npx tsx src/index.ts`).
   - Run `curl http://localhost:3000/` and verify the response is:
     `AgentClinic is open for business`
   - HTTP status code must be `200 OK`.

3. **Ready for Merge:**
   - Once compilation and curl verification pass, Phase 1 feature work is validated and ready for implementation merge.
