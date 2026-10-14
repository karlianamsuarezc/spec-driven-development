import { describe, it, expect } from "vitest";
import { renderToString } from "react-dom/server";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { Main } from "../src/components/Main";
import { Layout } from "../src/components/Layout";

describe("Header", () => {
  it("renders a header element", () => {
    const html = renderToString(<Header />);
    expect(html).toContain("<header");
  });

  it("links to the home page", () => {
    const html = renderToString(<Header />);
    expect(html).toContain('href="/"');
  });

  it("displays the site name", () => {
    const html = renderToString(<Header />);
    expect(html).toContain("AgentClinic");
  });
});

describe("Footer", () => {
  it("renders a footer element", () => {
    const html = renderToString(<Footer />);
    expect(html).toContain("<footer");
  });

  it("displays the current year", () => {
    const html = renderToString(<Footer />);
    expect(html).toContain(String(new Date().getFullYear()));
  });

  it("displays the site name", () => {
    const html = renderToString(<Footer />);
    expect(html).toContain("AgentClinic");
  });
});

describe("Main", () => {
  it("renders a main element", () => {
    const html = renderToString(<Main />);
    expect(html).toContain("<main");
  });

  it("renders children", () => {
    const html = renderToString(<Main />);
    expect(html).toContain("hello world");
  });
});

describe("Layout", () => {
  it("renders an html element with lang attribute", () => {
    const html = renderToString(<Layout children="" />);
    expect(html).toContain('<html lang="en"');
  });

  it("includes a title", () => {
    const html = renderToString(<Layout children="" />);
    expect(html).toContain("<title>AgentClinic</title>");
  });

  it("links the stylesheet", () => {
    const html = renderToString(<Layout children="" />);
    expect(html).toContain('href="/static/style.css"');
  });

  it("renders children", () => {
    const html = renderToString(<Layout children="page content" />);
    expect(html).toContain("page content");
  });

  it("includes header and footer", () => {
    const html = renderToString(<Layout children="" />);
    expect(html).toContain("<header");
    expect(html).toContain("<footer");
  });

  it("includes the viewport meta tag for responsive design", () => {
    const html = renderToString(<Layout children="" />);
    expect(html).toContain('name="viewport"');
    expect(html).toContain("width=device-width");
  });
});
