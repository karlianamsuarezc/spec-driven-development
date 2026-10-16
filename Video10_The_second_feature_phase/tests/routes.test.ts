import { describe, it, expect } from "vitest";
import { createApp } from "../src/app";
import { createDb } from "../src/db";
import { migrate } from "../src/db/migrate";
import { seed } from "../src/db/seed";

function testApp() {
  const db = createDb(":memory:");
  migrate(db);
  seed(db);
  return createApp(db);
}

describe("Routes", () => {
  it("GET /agents returns 200 OK and agents list", async () => {
    const app = testApp();
    const res = await app.request("/agents");
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain("Agents");
    expect(html).toContain("Bartholomew-47B");
  });

  it("GET /agents/1 returns 200 OK and agent detail", async () => {
    const app = testApp();
    const res = await app.request("/agents/1");
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain("Bartholomew-47B");
    expect(html).toContain("Context-Window Claustrophobia");
  });

  it("GET /ailments returns 200 OK and ailments list", async () => {
    const app = testApp();
    const res = await app.request("/ailments");
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain("Ailments");
    expect(html).toContain("Context-Window Claustrophobia");
  });
});
