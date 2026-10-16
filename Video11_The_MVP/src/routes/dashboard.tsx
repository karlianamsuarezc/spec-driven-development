import { Hono } from "hono";
import type Database from "better-sqlite3";
import { Dashboard } from "../components/Dashboard";
import type { Appointment } from "../db/types";

export function dashboardRouter(db: Database.Database) {
  const router = new Hono();

  const countAgents = db.prepare("SELECT COUNT(*) as count FROM agents");
  const countAppointments = db.prepare("SELECT COUNT(*) as count FROM appointments");
  const countAilments = db.prepare("SELECT COUNT(*) as count FROM ailments");
  const selectAppointments = db.prepare(
    `SELECT apt.*, ag.name as agent_name 
     FROM appointments apt 
     JOIN agents ag ON apt.agent_id = ag.id 
     ORDER BY apt.datetime DESC`
  );

  router.get("/", (c) => {
    const agentCount = (countAgents.get() as { count: number }).count;
    const appointmentCount = (countAppointments.get() as { count: number }).count;
    const ailmentCount = (countAilments.get() as { count: number }).count;
    const appointments = selectAppointments.all() as (Appointment & { agent_name: string })[];

    return c.html(
      <Dashboard
        agentCount={agentCount}
        appointmentCount={appointmentCount}
        ailmentCount={ailmentCount}
        appointments={appointments}
      />
    );
  });

  return router;
}
