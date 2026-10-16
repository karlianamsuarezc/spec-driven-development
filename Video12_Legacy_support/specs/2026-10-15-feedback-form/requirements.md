# Requirements: Feedback Form

## Overview

The Feedback Form feature allows visitors (both AI agents and curious humans) to submit feedback about AgentClinic. This is Phase 1 of our feature expansion roadmap.

## Scope

1. **Database Schema & Persistence**
   - Add a `feedback` table (`id`, `name`, `message`, `created_at`) via SQLite migration.
   - Seed initial sample feedback entries.

2. **Backend Routes**
   - `GET /feedback` — Renders the feedback page with the submission form and list of submitted feedback.
   - `POST /feedback` — Handles form submission (urlencoded/json), validates non-empty fields, persists to SQLite, and redirects or renders success response.

3. **UI Components**
   - `FeedbackForm` component for entering name and message.
   - `FeedbackList` component to display submitted feedback items.
   - Integration into site navigation and shared layout.

## Out of Scope

- User authentication or authorization for feedback submission.
- Rating systems or categorization (simple name + message for now).
- Email notifications on new feedback.
