<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import Files from "@/Files.js";
import { renderMarkdown } from "@/composables/useMarkdown.js";
import { highlightMarkdown } from "@/utils/highlight.js";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const markdownModules = import.meta.glob("/src/files/*.md", {
  query: "?raw",
  import: "default",
});

const svgModules = import.meta.glob("/src/files/*.svg", {
  query: "?raw",
  import: "default",
});

const articleRef = ref(null);
const isVisible = ref(false);
const isError = ref(false);
const content = ref("");
const icon = ref("");

const title = computed(() => Files[props.slug] || props.slug);
const renderedMarkdown = computed(() => renderMarkdown(content.value));
const highlightedSource = computed(() => highlightMarkdown(content.value));

async function loadData() {
  if (content.value) return;

  try {
    const [mdPath] = Object.keys(markdownModules).filter((path) =>
      path.endsWith(`/${props.slug}.md`)
    );
    const [svgPath] = Object.keys(svgModules).filter((path) =>
      path.endsWith(`/${props.slug}.svg`)
    );

    const [mdSource, svgSource] = await Promise.all([
      mdPath ? markdownModules[mdPath]() : Promise.resolve(""),
      svgPath ? svgModules[svgPath]() : Promise.resolve(""),
    ]);

    content.value = mdSource;
    icon.value = svgSource;
  } catch (error) {
    isError.value = true;
    // eslint-disable-next-line no-console
    console.error(`Failed to load section "${props.slug}":`, error);
  }
}

let observer = null;

onMounted(() => {
  if (!articleRef.value) return;

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        loadData();
        observer.disconnect();
      }
    },
    {
      rootMargin: "200px 0px",
      threshold: 0,
    }
  );

  observer.observe(articleRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <article :id="slug" ref="articleRef" class="section" :aria-label="title">
    <h2 class="heading">
      <span class="icon" aria-hidden="true" v-html="icon"></span>
      <span>{{ title }}</span>
    </h2>

    <div v-if="!isVisible" class="placeholder" aria-hidden="true">
      <div class="placeholder-line placeholder-line--long"></div>
      <div class="placeholder-line"></div>
      <div class="placeholder-line"></div>
    </div>

    <template v-else>
      <div class="view" role="region" :aria-label="`${title} example`">
        <div class="panel panel--source">
          <span class="panel-label" aria-hidden="true">Markdown</span>
          <pre><code class="hljs language-markdown" v-html="highlightedSource"></code></pre>
        </div>

        <div class="panel panel--preview">
          <span class="panel-label" aria-hidden="true">Preview</span>
          <div class="marked" v-html="renderedMarkdown"></div>
        </div>
      </div>

      <div v-if="isError" class="error" role="alert">
        <span>Oops, something went wrong loading this section. 🙃</span>
      </div>
    </template>
  </article>
</template>

<style scoped>
.section {
  margin: 6rem 0;
  scroll-margin-top: 2rem;
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0.75rem;
  border: 1px solid var(--color-step-2);
  border-radius: 6px;
  background-color: var(--color-step-3);
  flex-shrink: 0;
}

.heading {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  line-height: 1.2;
  font-weight: 700;
}

.icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.panel {
  position: relative;
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

.placeholder {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
}

.placeholder-line {
  height: 1rem;
  margin-bottom: 0.75rem;
  background-color: var(--color-board);
  border-radius: 0.25rem;
  opacity: 0.5;
  animation: pulse 1.5s ease-in-out infinite;
}

.placeholder-line--long {
  width: 75%;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.7;
  }
}

.error {
  margin-top: 1rem;
  padding: 1rem;
  color: var(--color-red);
  background-color: var(--color-board);
  border-radius: 0.5rem;
}
</style>
