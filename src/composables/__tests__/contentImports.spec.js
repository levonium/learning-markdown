import { describe, it, expect } from "vitest";

describe("content imports", () => {
  it("discovers all Markdown and SVG lesson files", () => {
    const markdownModules = import.meta.glob("/src/files/*.md", {
      query: "?raw",
      import: "default",
    });

    const svgModules = import.meta.glob("/src/files/*.svg", {
      query: "?raw",
      import: "default",
    });

    const mdSlugs = Object.keys(markdownModules)
      .map((path) => path.match(/\/([^/]+)\.md$/)?.[1])
      .filter(Boolean)
      .sort();

    const svgSlugs = Object.keys(svgModules)
      .map((path) => path.match(/\/([^/]+)\.svg$/)?.[1])
      .filter(Boolean)
      .sort();

    expect(mdSlugs).toEqual([
      "br",
      "code",
      "formatting",
      "headings",
      "hr",
      "images",
      "links",
      "lists",
      "quotes",
      "tables",
    ]);
    expect(svgSlugs).toEqual(mdSlugs);
  });

  it("loads a Markdown file as a non-empty string", async () => {
    const modules = import.meta.glob("/src/files/*.md", {
      query: "?raw",
      import: "default",
    });

    const formattingPath = Object.keys(modules).find((path) =>
      path.endsWith("/formatting.md")
    );

    const content = await modules[formattingPath]();
    expect(typeof content).toBe("string");
    expect(content.length).toBeGreaterThan(0);
    expect(content).toContain("Strong and Emphasize");
  });
});
