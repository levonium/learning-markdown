<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { renderMarkdown } from "@/composables/useMarkdown.js";
import { useLocalStorage } from "@/composables/useLocalStorage.js";

const DEFAULT_CONTENT = `# Markdown 🔥\n\n_Practice **Markdown** here_\n\n- list item\n- another list item`;

const content = useLocalStorage("practice-content", DEFAULT_CONTENT);
const textareaRef = ref(null);

document.title = "Practice Markdown";

const rendered = computed(() => renderMarkdown(content.value));
const wordCount = computed(
  () =>
    content.value
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length
);
const charCount = computed(() => content.value.length);

function insertAtCursor(before, after = "") {
  const textarea = textareaRef.value;
  if (!textarea) return;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selected = content.value.slice(start, end);
  const replacement = `${before}${selected}${after}`;

  content.value =
    content.value.slice(0, start) + replacement + content.value.slice(end);

  nextTick(() => {
    const newCursor = start + before.length + selected.length;
    textarea.setSelectionRange(newCursor, newCursor);
    textarea.focus();
  });
}

function makeBold() {
  insertAtCursor("**", "**");
}

function makeItalic() {
  insertAtCursor("_", "_");
}

function insertLink() {
  insertAtCursor("[", "](url)");
}

function insertCode() {
  insertAtCursor("`", "`");
}

function insertCodeBlock() {
  insertAtCursor("```\n", "\n```");
}

function insertList() {
  insertAtCursor("- ");
}

function insertHeading() {
  insertAtCursor("## ");
}

function handleKeydown(event) {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "b") {
    event.preventDefault();
    makeBold();
  } else if (
    (event.ctrlKey || event.metaKey) &&
    event.key.toLowerCase() === "i"
  ) {
    event.preventDefault();
    makeItalic();
  } else if (
    (event.ctrlKey || event.metaKey) &&
    event.key.toLowerCase() === "k"
  ) {
    event.preventDefault();
    insertLink();
  }
}

async function copyMarkdown() {
  await navigator.clipboard.writeText(content.value);
}

async function copyHtml() {
  await navigator.clipboard.writeText(rendered.value);
}

function downloadMarkdown() {
  const blob = new Blob([content.value], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "practice.md";
  link.click();
  URL.revokeObjectURL(url);
}

function reset() {
  if (confirm("Reset to the default practice content?")) {
    content.value = DEFAULT_CONTENT;
  }
}

onMounted(() => {
  if (textareaRef.value) {
    textareaRef.value.focus();
  }
});
</script>

<template>
  <main id="main-content">
    <h2 class="title">Practice Markdown</h2>

    <div class="toolbar" role="toolbar" aria-label="Markdown formatting">
      <button
        type="button"
        @click="makeBold"
        aria-label="Bold (Ctrl+B)"
        title="Bold (Ctrl+B)"
      >
        <strong>B</strong>
      </button>
      <button
        type="button"
        @click="makeItalic"
        aria-label="Italic (Ctrl+I)"
        title="Italic (Ctrl+I)"
      >
        <em>I</em>
      </button>
      <button
        type="button"
        @click="insertLink"
        aria-label="Link (Ctrl+K)"
        title="Link (Ctrl+K)"
      >
        Link
      </button>
      <button
        type="button"
        @click="insertCode"
        aria-label="Inline code"
        title="Inline code"
      >
        Code
      </button>
      <button
        type="button"
        @click="insertCodeBlock"
        aria-label="Code block"
        title="Code block"
      >
        Block
      </button>
      <button type="button" @click="insertList" aria-label="List" title="List">
        List
      </button>
      <button
        type="button"
        @click="insertHeading"
        aria-label="Heading"
        title="Heading"
      >
        H
      </button>
      <div class="toolbar-spacer"></div>
      <button
        type="button"
        @click="copyMarkdown"
        aria-label="Copy Markdown"
        title="Copy Markdown"
      >
        Copy MD
      </button>
      <button
        type="button"
        @click="copyHtml"
        aria-label="Copy HTML"
        title="Copy HTML"
      >
        Copy HTML
      </button>
      <button
        type="button"
        @click="downloadMarkdown"
        aria-label="Download Markdown"
        title="Download Markdown"
      >
        Download
      </button>
      <button
        type="button"
        class="reset"
        @click="reset"
        aria-label="Reset content"
        title="Reset content"
      >
        Reset
      </button>
    </div>

    <div class="view" role="region" aria-label="Practice editor and preview">
      <div class="panel panel--editor shadow">
        <span class="panel-label" aria-hidden="true">Editor</span>
        <textarea
          ref="textareaRef"
          v-model="content"
          autofocus
          aria-label="Markdown editor"
          placeholder="Type your Markdown here..."
          @keydown="handleKeydown"
        ></textarea>
        <div class="stats" aria-live="polite">
          {{ wordCount }} words · {{ charCount }} characters
        </div>
      </div>

      <div class="panel panel--preview shadow">
        <span class="panel-label" aria-hidden="true">Preview</span>
        <div class="marked" v-html="rendered"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.title {
  margin-bottom: 2rem;
  text-align: center;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: var(--color-board);
  border: 1px solid var(--color-step-2);
  border-radius: 0.75rem;
}

.toolbar button {
  padding: 0.5rem 0.75rem;
  background-color: var(--color-step-3);
  border: 1px solid var(--color-step-2);
  border-radius: 0.375rem;
  color: var(--color-text);
  font: inherit;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.toolbar button:hover,
.toolbar button:focus-visible {
  background-color: var(--color-step-2);
  border-color: var(--color-neutral);
  outline: none;
}

.toolbar-spacer {
  flex: 1;
}

.reset {
  color: var(--color-red);
}

.panel {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: var(--color-board);
  border-radius: 1rem;
}

.panel-label {
  position: absolute;
  top: -0.75rem;
  left: 1rem;
  padding: 0.25rem 0.75rem;
  background-color: var(--color-step-2);
  border-radius: 0.25rem;
  color: var(--color-text);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

textarea {
  appearance: none;
  flex: 1;
  width: 100%;
  min-height: 400px;
  padding: 0;
  background-color: transparent;
  border: none;
  color: inherit;
  font-family: "Instrument Sans", ui-monospace, SFMono-Regular, Menlo, Monaco,
    Consolas, monospace;
  font-size: 1rem;
  line-height: 1.6;
  resize: vertical;
}

textarea::placeholder {
  color: var(--color-neutral);
  opacity: 0.6;
}

textarea:active,
textarea:focus {
  outline: none;
}

.stats {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-step-2);
  color: var(--color-neutral);
  font-size: 0.875rem;
  text-align: right;
}

@media (min-width: 768px) {
  .title {
    text-align: left;
  }
}
</style>
