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
    <h2 class="title">Practice Markdown</h2>

    <div class="view">
      <div class="shadow">
        <textarea v-model="content" autofocus></textarea>

        <small>* No syntax highlighting 🙃</small>
      </div>

      <div class="marked shadow" v-html="markdown"></div>
    </div>

  </main>
</template>

<style>
@import "@/assets/markdown.css";
</style>

<style scoped>
textarea {
  width: 100%;
  min-height: 400px;
  padding: 1rem;
}
small {
  display: block;
  margin-top: 0.5rem;
}
</style>
