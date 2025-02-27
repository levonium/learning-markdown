<script>
import { marked } from "marked";

export default {
  data() {
    return {
      content:
        "# Markdown 🔥\n\n_Practice **Markdown** here_\n\n* list item\n* another list item",
      docTitle: "Practice Markdown",
    };
  },

  computed: {
    markdown() {
      return marked(this.content);
    },
  },

  created() {
    document.title = this.docTitle;
  },
};
</script>

<template>
  <main>
    <h2 class="heading">Practice Markdown</h2>

    <div class="view">
      <div class="shadow">
        <textarea v-model="content" autofocus></textarea>
      </div>

      <div class="marked shadow" v-html="markdown"></div>
    </div>
  </main>
</template>

<style scoped>
textarea {
  appearance: none;
  width: 100%;
  min-height: 400px;
  padding: 1rem;
  background-color: transparent;
  border: none;
  color: inherit;
  font-size: 1rem;
  resize: vertical;

  &:active,
  &:focus {
    outline: none;
  }
}
</style>
