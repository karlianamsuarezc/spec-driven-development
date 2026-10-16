import { FC } from "hono/jsx";
import { Layout } from "./Layout";
import type { Agent, Ailment } from "../db/types";

type AgentDetailProps = { agent: Agent; ailments: Ailment[] };

export const AgentDetail: FC<AgentDetailProps> = ({
  agent,
  ailments,
}) => (
  <Layout>
    <article>
      <header>
        <h1>{agent.name}</h1>
      </header>
      <p>
        <strong>Model:</strong> {agent.model_type}
      </p>
      <p>
        <strong>Status:</strong> {agent.status.replace("_", " ")}
      </p>
      {ailments.length > 0 && (
        <>
          <h2>Presenting Complaints</h2>
          <ul>
            {ailments.map((a) => (
              <li key={a.id}>
                <strong>{a.name}</strong> — {a.description}
              </li>
            ))}
          </ul>
        </>
      )}
    </article>

    <article>
      <header>
        <h3>Book Therapy Appointment</h3>
      </header>
      <form action="/appointments" method="post">
        <input type="hidden" name="agent_id" value={agent.id} />
        <label>
          Therapist Name
          <input type="text" name="therapist_name" required placeholder="e.g. Dr. Llama-Therapist" />
        </label>
        <label>
          Date & Time
          <input type="datetime-local" name="datetime" required />
        </label>
        <button type="submit">Book Appointment</button>
      </form>
    </article>

    <p>
      <a href="/agents">← Back to agents</a>
    </p>
  </Layout>
);
