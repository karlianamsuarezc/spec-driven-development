# Requirements: Scaffold & Server

## Context
Phase 1 of the AgentClinic roadmap establishes the foundational server infrastructure. Per stakeholder requirements (Mary in engineering, Steve in marketing), we are using TypeScript and Express with server-rendered capability, setting up a reliable and clean starting point.

## Scope
- Express server setup in TypeScript
- Zero-build-step development workflow using `tsx`
- Root endpoint (`GET /`) confirming the clinic is open for business

## Technical Decisions
- **Framework:** Express.js for robust routing and middleware support.
- **Language:** TypeScript for end-to-end type safety.
- **Runtime Tooling:** `tsx` for rapid local development execution without manual compilation steps.
