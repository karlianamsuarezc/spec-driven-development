# Tech Stack

AgentClinic is a server-side TypeScript application using Express and SQLite.

## Core

| Layer | Choice | Rationale |
|---|---|---|
| Language | TypeScript | Type safety end-to-end; satisfies Mary's requirement |
| Runtime | Node.js | Stable, well-supported, vast ecosystem |
| Server framework | **Express** | Robust, mature, widely adopted Node.js framework with great middleware support |
| Templating | EJS / Server-rendered HTML | Clean server-side rendering for a reliable dashboard |
| CSS | Plain CSS + CSS custom properties | No build step required; Steve gets a modern, attractive result |

## Data

- **SQLite** (via `better-sqlite3`) for local development and persistence — simple, embedded, no infrastructure overhead.

## Testing

- **Vitest** — fast, TypeScript-native testing framework.

## Tooling

- `tsx` for development (run TypeScript directly, no build step needed)
- `tsc` for production builds
- `prettier` for formatting
