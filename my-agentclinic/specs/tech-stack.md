# Tech Stack

AgentClinic is a server-side TypeScript application using Hono and SQLite.

## Core

| Layer | Choice | Rationale |
|---|---|---|
| Language | TypeScript | Type safety end-to-end; satisfies Mary's requirement |
| Runtime | Node.js | Stable, well-supported, vast ecosystem |
| Server framework | **Hono** | Lightweight, TypeScript-first, fast, excellent DX; routes and middleware feel natural |
| Templating | Hono JSX (server-side) | JSX without React overhead; components are just functions |
| CSS | Plain CSS + CSS custom properties | No build step required; mobile-first responsive layout with media queries; Steve gets a modern, attractive result on any device |

## Data

- **SQLite** (via `better-sqlite3`) for local development and persistence — simple, embedded, no infrastructure overhead.

## Testing

- **Vitest** — fast, TypeScript-native testing framework used for validation (`npm test` / `vitest run`).

## Tooling

- `tsx` for development (run TypeScript directly, no build step needed)
- `tsc` for production builds
- `prettier` for formatting
