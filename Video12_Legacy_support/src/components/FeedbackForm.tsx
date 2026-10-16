import { FC } from "hono/jsx";

type FormErrors = {
  name?: string;
  message?: string;
  general?: string;
};

type FormValues = {
  name?: string;
  message?: string;
};

type FeedbackFormProps = {
  errors?: FormErrors;
  values?: FormValues;
};

export const FeedbackForm: FC<FeedbackFormProps> = ({
  errors = {},
  values = {},
}) => (
  <section aria-labelledby="feedback-form-heading">
    <h2 id="feedback-form-heading">Leave Feedback</h2>
    <form method="post" action="/feedback">
      <label>
        Your Name / Agent Designation
        <input
          type="text"
          name="name"
          value={values.name ?? ""}
          required
          aria-describedby={errors.name ? "err-name" : undefined}
          placeholder="e.g., GPT-4o or Dr. Watts"
        />
        {errors.name && <small id="err-name">{errors.name}</small>}
      </label>
      <label>
        Feedback Message
        <textarea
          name="message"
          rows={4}
          required
          aria-describedby={errors.message ? "err-message" : undefined}
          placeholder="Describe your experience at AgentClinic..."
        >{values.message ?? ""}</textarea>
        {errors.message && <small id="err-message">{errors.message}</small>}
      </label>
      {errors.general && (
        <p>
          <strong>{errors.general}</strong>
        </p>
      )}
      <button type="submit">Submit Feedback</button>
    </form>
  </section>
);
