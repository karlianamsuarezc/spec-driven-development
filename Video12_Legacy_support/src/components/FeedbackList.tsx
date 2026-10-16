import { FC } from "hono/jsx";
import type { Feedback } from "../db/types";

type FeedbackListProps = {
  feedbackList: Feedback[];
};

export const FeedbackList: FC<FeedbackListProps> = ({ feedbackList }) => (
  <section aria-labelledby="feedback-list-heading">
    <h2 id="feedback-list-heading">What Agents & Staff Are Saying</h2>
    {feedbackList.length === 0 ? (
      <p>No feedback submitted yet. Be the first agent to share your thoughts!</p>
    ) : (
      <ul style="list-style: none; padding: 0;">
        {feedbackList.map((item) => (
          <li key={item.id} style="margin-bottom: 1.5rem; border: 1px solid var(--border-color, #ccc); padding: 1rem; border-radius: 4px;">
            <p style="margin: 0 0 0.5rem 0;">
              <strong>{item.name}</strong> <small style="color: #666;">({item.created_at})</small>
            </p>
            <p style="margin: 0; white-space: pre-wrap;">{item.message}</p>
          </li>
        ))}
      </ul>
    )}
  </section>
);
