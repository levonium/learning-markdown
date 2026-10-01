import { marked } from "marked";
import DOMPurify from "dompurify";

/**
 * Slugify a heading text into a URL-friendly id.
 */
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

/**
 * Walk the rendered HTML string and inject id attributes on heading tags.
 * This lets the table of contents link directly to each section.
 */
function addHeadingIds(html) {
  return html.replace(
    /<(h[1-6])([^>]*)>(.*?)<\/\1>/gi,
    (match, tag, attrs, content) => {
      if (attrs.includes("id=")) return match;
      const text = content.replace(/<[^>]+>/g, "");
      const id = slugify(text);
      return `<${tag}${attrs} id="${id}">${content}</${tag}>`;
    }
  );
}

/**
 * Configure marked once with the features we want.
 */
marked.setOptions({
  gfm: true,
  breaks: false,
  headerIds: false,
  xhtml: false,
});

/**
 * Sanitize rendered Markdown HTML while preserving attributes needed for UI.
 */
function sanitizeHtml(html) {
  return DOMPurify.sanitize(html, {
    ALLOWED_ATTR: [
      "class",
      "id",
      "href",
      "target",
      "rel",
      "src",
      "alt",
      "title",
      "align",
      "start",
    ],
    ALLOW_DATA_ATTR: false,
  });
}

/**
 * Render raw Markdown to safe HTML.
 */
export function renderMarkdown(source) {
  if (!source) return "";
  const raw = marked(source);
  const withIds = addHeadingIds(raw);
  return sanitizeHtml(withIds);
}
