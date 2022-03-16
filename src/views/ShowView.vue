<script>
import { marked } from "marked";
import Files from "@/Files.js";

export default {
  data() {
    return {
      docTitle: "Learn Markdown : ",
      slug: this.$route.params.slug,
      loading: false,
      isError: false,
      title: "",
      content: "",
      marked: "",
    };
  },

  created() {
    this.title = Files[this.slug];
    document.title = this.docTitle + this.title;

    const file = `/files/${this.slug}.md`;
    this.getData(file);
  },

  methods: {
    getData(url) {
      this.loading = true;
      fetch(url)
        .then((response) => response.text())
        .then((data) => {
          this.content = data;
          this.marked = marked(this.content);
          this.loading = false;
        })
        .catch((error) => {
          this.isError = true;
          this.loading = false;
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <main>
    <h2 class="title">Markdown: {{ title }}</h2>

    <div v-if="loading">
      <svg viewBox="0 0 100 100">
        <path
          fill="none"
          d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z"
          stroke="#fcc853"
          stroke-width="3"
          stroke-dasharray="2.5658892822265624 2.5658892822265624"
        >
          <animate
            attributeName="stroke-dashoffset"
            calcMode="linear"
            values="0;256.58892822265625"
            keyTimes="0;1"
            dur="1"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </path>
      </svg>
    </div>

    <div class="view" v-if="!loading">
      <div class="shadow">
        <pre>{{ content }}</pre>
      </div>

      <div class="marked shadow" v-html="marked"></div>
    </div>

    <div class="error" v-if="isError">
      <span>Oops, something went wrong. 🙃</span>
    </div>

    <h3 class="practice-link">
      <router-link to="/practice" exact>Practice Markdown 👉</router-link>
    </h3>
  </main>
</template>

<style>
@import "@/assets/markdown.css";
</style>

<style scoped>
.error {
  color: red;
  padding-left: 1rem;
}
.practice-link {
  margin-top: 2re;
  padding-right: 1rem;
  text-align: right;
}
</style>
