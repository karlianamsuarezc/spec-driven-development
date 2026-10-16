import { Hono } from "hono";
import type Database from "better-sqlite3";
import { Layout } from "../components/Layout";
import { FC } from "hono/jsx";

type ConfirmationProps = { therapistName: string; datetime: string };

const AppointmentConfirmation: FC<ConfirmationProps> = ({ therapistName, datetime }) => (
  <Layout>
    <article>
      <header>
        <h1>Appointment Confirmed</h1>
      </header>
      <p>Your session with <strong>{therapistName}</strong> has been successfully booked for <strong>{datetime}</strong>.</p>
      <p><a href="/dashboard">View Staff Dashboard</a> | <a href="/agents">Back to Agents</a></p>
    </article>
  </Layout>
);

export function appointmentsRouter(db: Database.Database) {
  const router = new Hono();

  const insertApt = db.prepare(
    "INSERT INTO appointments (agent_id, therapist_name, datetime, status) VALUES (?, ?, ?, 'scheduled')"
  );

  router.post("/", async (c) => {
    const body = await c.req.parseBody();
    const agentId = Number(body.agent_id);
    const therapistName = String(body.therapist_name);
    const datetime = String(body.datetime);

    if (!agentId || !therapistName || !datetime) {
      return c.text("Missing required fields", 400);
    }

    insertApt.run(agentId, therapistName, datetime);
    return c.html(<AppointmentConfirmation therapistName={therapistName} datetime={datetime} />);
  });

  return router;
}
