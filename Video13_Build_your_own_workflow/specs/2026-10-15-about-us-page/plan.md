# Plan: About Us Page — Content

## Task Group 1: Component Development
- 1.1 Create `src/components/AboutUs.tsx` featuring clinic history, founding story, mission statement, and satirical staff bios.
- 1.2 Create `src/pages/About.tsx` page wrapping `AboutUs` inside the standard `Layout` component.

## Task Group 2: Routing & Navigation
- 2.1 Create `src/routes/about.tsx` registering the `/about` Hono route rendering the About page.
- 2.2 Wire up the `/about` route in `src/app.tsx` or router index.
- 2.3 Update header and footer navigation components to include a link to `/about`.

## Task Group 3: Styling & Tests
- 3.1 Add any required styling rules for the About Us page sections in `static/style.css`.
- 3.2 Add integration and component tests in `tests/app.test.tsx` and `tests/components.test.tsx` verifying `/about` renders successfully with expected content.
