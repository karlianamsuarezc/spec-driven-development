# Backlog: Vercel Postgres Database Evaluation

## Overview
This document evaluates database options for deploying the AgentClinic application to Vercel while preserving an excellent local Developer Experience (DX). Based on project requirements, **Vercel Postgres** was selected.

---

## 1. Production Architecture (Vercel)
- **Provider**: Vercel Postgres (powered by **Neon**).
- **Core Benefits**:
  - **Serverless-native**: Designed for serverless functions with HTTP/WebSocket protocols and connection pooling.
  - **Branching**: Allows database branching for preview deployments and staging environments.
  - **Zero-config integration**: Automatic provisioning and environment variable injection (`POSTGRES_URL`, `POSTGRES_PRISMA_URL`) directly from the Vercel dashboard.

---

## 2. Local Developer Experience (DX)
To maintain smooth local development without requiring a live cloud database:
- **Local Instance**: Run a local PostgreSQL instance via Docker:
  ```bash
  docker run --name agentclinic-pg -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:16
  ```
- **Environment Configuration**: Configure local `.env`:
  ```env
  POSTGRES_URL=postgres://postgres:postgres@localhost:5432/agentclinic
  ```
- **Migration & Schema Management**: Use a TypeScript-friendly migration tool or ORM (such as Drizzle ORM or Prisma) that supports both local PostgreSQL and Vercel Postgres seamlessly.

---

## 3. Migration Strategy
1. Keep SQL migrations in `src/db/migrations/` or equivalent.
2. Run migrations against the local Docker Postgres instance during development (`npm run migrate`).
3. Run migrations during Vercel build or deployment lifecycle using official Vercel Postgres client tooling.
