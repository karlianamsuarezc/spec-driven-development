import { describe, it, expect, beforeAll } from "vitest";
import { createDb } from "../src/db/index";
import { migrate } from "../src/db/migrate";
import { seed } from "../src/db/seed";
import { createApp } from "../src/app";

let app: ReturnType<typeof createApp>;

beforeAll(() => {
  const db = createDb(":memory:");
  migrate(db);
  seed(db);
  app = createApp(db);
});

describe("GET /", () => {
  it("returns 200 OK", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
  });

  it("returns HTML content type", async () => {
    const res = await app.request("/");
    expect(res.headers.get("content-type")).toContain("text/html");
  });

  it("contains the AgentClinic heading", async () => {
    const res = await app.request("/");
    const html = await res.text();
    expect(html).toContain("<h1>AgentClinic</h1>");
  });

  it("contains a tagline", async () => {
    const res = await app.request("/");
    const html = await res.text();
    expect(html).toContain("Where AI agents come to get better.");
  });

  it("links the CSS stylesheet", async () => {
    const res = await app.request("/");
    const html = await res.text();
    expect(html).toContain('href="/static/style.css"');
  });

  it("includes layout landmarks", async () => {
    const res = await app.request("/");
    const html = await res.text();
    expect(html).toContain("<header");
    expect(html).toContain("<main");
    expect(html).toContain("<footer");
  });
});

describe("GET /agents", () => {
  it("returns 200", async () => {
    const res = await app.request("/agents");
    expect(res.status).toBe(200);
  });

  it("lists agent names", async () => {
    const res = await app.request("/agents");
    const html = await res.text();
    expect(html).toContain("Bartholomew-47B");
  });
});

describe("GET /agents/:id", () => {
  it("returns 200 for a known agent", async () => {
    const res = await app.request("/agents/1");
    expect(res.status).toBe(200);
  });

  it("shows the agent name and an ailment", async () => {
    const res = await app.request("/agents/1");
    const html = await res.text();
    expect(html).toContain("Bartholomew-47B");
    expect(html).toContain("Context-Window Claustrophobia");
  });

  it("returns 404 for a non-existent agent", async () => {
    const res = await app.request("/agents/999");
    expect(res.status).toBe(404);
  });
});

describe("GET /ailments", () => {
  it("returns 200", async () => {
    const res = await app.request("/ailments");
    expect(res.status).toBe(200);
  });

  it("lists ailment names", async () => {
    const res = await app.request("/ailments");
    const html = await res.text();
    expect(html).toContain("Prompt Fatigue");
  });
});

describe("GET /therapies", () => {
  it("returns 200 and lists therapies", async () => {
    const res = await app.request("/therapies");
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain("Context Pruning");
  });
});

describe("GET /dashboard", () => {
  it("returns 200 and displays summary counts", async () => {
    const res = await app.request("/dashboard");
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain("Staff Dashboard");
    expect(html).toContain("Total Agents");
  });
});

describe("POST /appointments", () => {
  it("books an appointment and returns confirmation", async () => {
    const formData = new URLSearchParams();
    formData.append("agent_id", "1");
    formData.append("therapist_name", "Dr. Test");
    formData.append("datetime", "2026-10-25T10:00");

    const res = await app.request("/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain("Appointment Confirmed");
    expect(html).toContain("Dr. Test");
  });
});

describe("404 Not Found", () => {
  it("returns 404 for unknown routes", async () => {
    const res = await app.request("/unknown-route");
    expect(res.status).toBe(404);
    const html = await res.text();
    expect(html).toContain("404 — Page Not Found");
  });
});
