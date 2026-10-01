import hljs from "highlight.js/lib/core";
import markdown from "highlight.js/lib/languages/markdown";
import "highlight.js/styles/atom-one-dark.min.css";

hljs.registerLanguage("markdown", markdown);

/**
 * Highlight a Markdown source string as HTML with class tokens.
 */
export function highlightMarkdown(source) {
  if (!source) return "";
  return hljs.highlight(source, { language: "markdown" }).value;
}
