import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import type Database from "better-sqlite3";
import { Home } from "./pages/Home";
import { agentsRouter } from "./routes/agents";
import { ailmentsRouter } from "./routes/ailments";
import { therapiesRouter } from "./routes/therapies";
import { appointmentsRouter } from "./routes/appointments";
import { dashboardRouter } from "./routes/dashboard";
import { Layout } from "./components/Layout";

export function createApp(db: Database.Database) {
  const app = new Hono();

  // Request logging middleware
  app.use(async (c, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${c.req.method} ${c.req.path} - ${c.res.status} (${ms}ms)`);
  });

  app.use("/static/*", serveStatic({ root: "./" }));

  app.get("/", (c) => c.html(<Home />));
  app.route("/agents", agentsRouter(db));
  app.route("/ailments", ailmentsRouter(db));
  app.route("/therapies", therapiesRouter(db));
  app.route("/appointments", appointmentsRouter(db));
  app.route("/dashboard", dashboardRouter(db));

  // 404 handler
  app.notFound((c) => {
    return c.html(
      <Layout>
        <h1>404 — Page Not Found</h1>
        <p>The requested clinic resource could not be found.</p>
        <p><a href="/">Return Home</a></p>
      </Layout>,
      404
    );
  });

  return app;
}
