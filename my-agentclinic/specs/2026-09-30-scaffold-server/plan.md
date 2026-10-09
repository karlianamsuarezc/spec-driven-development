# Plan: Scaffold & Server

## Task Group 1: Project Initialization & Dependencies
- [x] Initialize Node.js project configuration (`package.json`, `tsconfig.json`)
- [x] Install core dependencies: `express` and type definitions (`@types/express`)
- [x] Install dev dependencies: `tsx`, `typescript`, `vitest`
- [x] Configure build and start scripts in `package.json`

## Task Group 2: Express Server & Health Check Route
- [x] Create entry point file (`src/index.ts`)
- [x] Set up Express application instance
- [x] Add `GET /` health check route returning "AgentClinic is open for business"
- [x] Start server on configured port (e.g., port 3000)

## Task Group 3: Validation & Verification
- [x] Verify TypeScript compilation succeeds (`npm run build` or `npx tsc`)
- [x] Test server endpoint using `curl` or test script
