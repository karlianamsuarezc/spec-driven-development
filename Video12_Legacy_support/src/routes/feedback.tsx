import { Hono } from "hono";
import type Database from "better-sqlite3";
import { Layout } from "../components/Layout";
import { FeedbackForm } from "../components/FeedbackForm";
import { FeedbackList } from "../components/FeedbackList";
import type { Feedback } from "../db/types";

function stripHtml(input: string): string {
  return input.replace(/<[^>]*>/g, "").trim();
}

export function feedbackRouter(db: Database.Database) {
  const router = new Hono();

  const selectAll = db.prepare("SELECT * FROM feedback ORDER BY datetime(created_at) DESC");
  const insertFeedback = db.prepare(
    "INSERT INTO feedback (name, message) VALUES (?, ?)"
  );

  router.get("/", (c) => {
    const feedbackList = selectAll.all() as Feedback[];
    return c.html(
      <Layout>
        <h1>Clinic Feedback</h1>
        <p>Read what agents and staff have to say about their recovery journey, or leave your own feedback.</p>
        <FeedbackForm />
        <hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--border-color, #ccc);" />
        <FeedbackList feedbackList={feedbackList} />
      </Layout>
    );
  });

  router.post("/", async (c) => {
    const body = await c.req.parseBody();
    const name = stripHtml(String(body.name ?? ""));
    const message = stripHtml(String(body.message ?? ""));

    const errors: Record<string, string> = {};
    if (!name) errors.name = "Name / Designation is required.";
    if (!message) errors.message = "Message is required.";

    if (Object.keys(errors).length > 0) {
      const feedbackList = selectAll.all() as Feedback[];
      return c.html(
        <Layout>
          <h1>Clinic Feedback</h1>
          <p>Read what agents and staff have to say about their recovery journey, or leave your own feedback.</p>
          <FeedbackForm errors={errors} values={{ name, message }} />
          <hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--border-color, #ccc);" />
          <FeedbackList feedbackList={feedbackList} />
        </Layout>
      );
    }

    insertFeedback.run(name, message);
    return c.redirect("/feedback");
  });

  return router;
}
