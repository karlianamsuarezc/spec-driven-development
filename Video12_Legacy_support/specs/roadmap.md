# Roadmap

Phases are intentionally small — each should be implementable in one focused session, based on TODO.md.

---

## Phase 1: Feedback Form ✅
- [x] Add `feedback` table to the database schema (migration)
- [x] Seed a few example feedback entries
- [x] Build `FeedbackForm` component (name, message fields)
- [x] Add POST route to handle form submission and persist to DB
- [x] Build `FeedbackList` component to display submitted feedback
- [x] Wire up a `/feedback` page with form + list
- [x] Link `/feedback` from the site navigation

## Phase 2: About Us Page — Content
- [ ] Create an `AboutUs` page component
- [ ] Write satirical clinic history, staff bios, and "founding story"
- [ ] Add `/about` route
- [ ] Link `/about` from navigation

## Phase 3: About Us Page — Map
- [ ] Decide on map embed approach (static image vs. iframe vs. API)
- [ ] Add address display to the About Us page
- [ ] Embed map on the page
- [ ] Ensure it degrades gracefully without JavaScript

## Phase 4: Customer Reviews — Display
- [ ] Add `reviews` table to schema (migration)
- [ ] Seed a handful of satirical patient reviews
- [ ] Build `ReviewsList` component
- [ ] Add `/reviews` page

## Phase 5: Customer Reviews — Submission
- [ ] Build `ReviewForm` component (agent name, rating, comment)
- [ ] Add POST route to persist new reviews
- [ ] Display submitted reviews on `/reviews`
- [ ] Basic validation (required fields, rating range)
