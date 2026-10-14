import { Hono } from "hono";
import type Database from "better-sqlite3";
import { AilmentsList } from "../components/AilmentsList";
import type { Ailment, Agent, AilmentWithAgents } from "../db/types";

export function ailmentsRouter(db: Database.Database) {
  const router = new Hono();

  const selectAllAilments = db.prepare("SELECT * FROM ailments ORDER BY name");
  const selectAgentsForAilment = db.prepare(
    `SELECT ag.* FROM agents ag
     JOIN agent_ailments aa ON ag.id = aa.agent_id
     WHERE aa.ailment_id = ?
     ORDER BY ag.name`
  );

  router.get("/", (c) => {
    const ailmentsRaw = selectAllAilments.all() as Ailment[];
    const ailments: AilmentWithAgents[] = ailmentsRaw.map((ailment) => {
      const agents = selectAgentsForAilment.all(ailment.id) as Agent[];
      return { ...ailment, agents };
    });
    return c.html(<AilmentsList ailments={ailments} />);
  });

  return router;
}
