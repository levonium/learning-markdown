import { describe, it, expect } from "vitest";
import { renderMarkdown } from "../useMarkdown.js";

describe("renderMarkdown", () => {
  it("renders headings with ids", () => {
    const html = renderMarkdown("## Hello World");
    expect(html).toContain('<h2 id="hello-world">Hello World</h2>');
  });

  it("renders inline markdown", () => {
    const html = renderMarkdown("**bold** and _italic_");
    expect(html).toContain("<strong>bold</strong>");
    expect(html).toContain("<em>italic</em>");
  });

  it("sanitizes dangerous html", () => {
    const html = renderMarkdown("<script>alert('xss')</script>");
    expect(html).not.toContain("<script>");
  });

  it("renders GFM tables", () => {
    const html = renderMarkdown("| a | b |\n|---|---|\n| 1 | 2 |");
    expect(html).toContain("<table>");
    expect(html).toContain("<th>a</th>");
  });
});
