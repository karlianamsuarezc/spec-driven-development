# Plan: Scaffold & Server

## Task Group 1: Project Initialization & Dependencies
- [ ] Initialize Node.js project configuration (`package.json`, `tsconfig.json`)
- [ ] Install core dependencies: `express` and type definitions (`@types/express`)
- [ ] Install dev dependencies: `tsx`, `typescript`, `vitest`
- [ ] Configure build and start scripts in `package.json`

## Task Group 2: Express Server & Health Check Route
- [ ] Create entry point file (`src/index.ts`)
- [ ] Set up Express application instance
- [ ] Add `GET /` health check route returning "AgentClinic is open for business"
- [ ] Start server on configured port (e.g., port 3000)

## Task Group 3: Validation & Verification
- [ ] Verify TypeScript compilation succeeds (`npm run build` or `npx tsc`)
- [ ] Test server endpoint using `curl` or test script
