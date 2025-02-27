<script>
import { marked } from "marked";
import Files from "@/Files.js";

export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      isError: false,
      title: "",
      content: "",
      marked: "",
      icon: "",
    };
  },

  created() {
    this.title = Files[this.slug];
    this.loading = true;

    const file = `/files/${this.slug}.md`;
    this.getData(file);
    this.getIcon(`/files/${this.slug}.svg`);

    this.loading = false;
  },

  methods: {
    getData(url) {
      fetch(url)
        .then((response) => response.text())
        .then((data) => {
          this.content = data;
          this.marked = marked(this.content);
        })
        .catch((error) => {
          this.isError = true;
          console.log(error);
        });
    },
    getIcon(url) {
      fetch(url)
        .then((response) => response.text())
        .then((data) => {
          this.icon = data;
        })
        .catch((error) => {
          this.isError = true;
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <article>
    <h2 class="heading">
      <span v-html="icon"></span>
      <span>{{ title }}</span>
    </h2>

    <div v-if="loading">
      <svg viewBox="0 0 100 100">
        <path
          fill="none"
          stroke="#fcc853"
          stroke-width="3"
          stroke-dasharray="2.5658892822265624 2.5658892822265624"
          d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z"
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
      <div>
        <pre><code>{{ content }}</code></pre>
      </div>

      <div class="marked" v-html="marked"></div>
    </div>

    <div class="error" v-if="isError">
      <span>Oops, something went wrong. 🙃</span>
    </div>
  </article>
</template>

<style scoped>
article {
  margin: 12rem 0;
}

.error {
  color: var(--color-red);
  padding-left: 1rem;
}
</style>
