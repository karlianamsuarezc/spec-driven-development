import { describe, it, expect } from "vitest";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { Main } from "../src/components/Main";
import { Layout } from "../src/components/Layout";

describe("Header", () => {
  it("renders a header element", () => {
    const html = String(Header({}));
    expect(html).toContain("<header");
  });

  it("links to the home page", () => {
    const html = String(Header({}));
    expect(html).toContain('href="/"');
  });

  it("displays the site name", () => {
    const html = String(Header({}));
    expect(html).toContain("AgentClinic");
  });
});

describe("Footer", () => {
  it("renders a footer element", () => {
    const html = String(Footer({}));
    expect(html).toContain("<footer");
  });

  it("displays the current year", () => {
    const html = String(Footer({}));
    expect(html).toContain(String(new Date().getFullYear()));
  });

  it("displays the site name", () => {
    const html = String(Footer({}));
    expect(html).toContain("AgentClinic");
  });
});

describe("Main", () => {
  it("renders a main element", () => {
    const html = String(Main({ children: "content" }));
    expect(html).toContain("<main");
  });

  it("renders children", () => {
    const html = String(Main({ children: "hello world" }));
    expect(html).toContain("hello world");
  });
});

describe("Layout", () => {
  it("renders an html element with lang attribute", () => {
    const html = String(Layout({ children: "" }));
    expect(html).toContain('<html lang="en"');
  });

  it("includes a title", () => {
    const html = String(Layout({ children: "" }));
    expect(html).toContain("<title>AgentClinic</title>");
  });

  it("links the stylesheet", () => {
    const html = String(Layout({ children: "" }));
    expect(html).toContain('href="/static/style.css"');
  });

  it("renders children", () => {
    const html = String(Layout({ children: "page content" }));
    expect(html).toContain("page content");
  });

  it("includes header and footer", () => {
    const html = String(Layout({ children: "" }));
    expect(html).toContain("<header");
    expect(html).toContain("<footer");
  });

  it("includes the viewport meta tag for responsive design", () => {
    const html = String(Layout({ children: "" }));
    expect(html).toContain('name="viewport"');
    expect(html).toContain("width=device-width");
  });
});
