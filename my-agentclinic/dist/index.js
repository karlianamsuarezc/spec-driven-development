import { jsx as _jsx } from "hono/jsx/jsx-runtime";
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Home } from "./pages/Home";
const app = new Hono();
app.use("/static/*", serveStatic({ root: "./" }));
app.get("/", (c) => {
    return c.html(_jsx(Home, {}));
});
if (process.env.NODE_ENV !== "test") {
    serve({ fetch: app.fetch, port: 3000 }, (info) => {
        console.log(`AgentClinic server is running on http://localhost:${info.port}`);
    });
}
export default app;
