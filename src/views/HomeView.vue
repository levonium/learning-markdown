<script setup>
import { ref, onMounted, nextTick } from "vue";
import Files from "@/Files.js";
import AppSection from "@/components/AppSection.vue";

const sections = ref(
  Object.entries(Files).map(([slug, title]) => ({ slug, title }))
);
const activeSection = ref("");

function scrollToSection(slug) {
  const element = document.getElementById(slug);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${slug}`);
    activeSection.value = slug;
  }
}

onMounted(async () => {
  await nextTick();
  const hash = window.location.hash.replace("#", "");
  if (hash && Files[hash]) {
    scrollToSection(hash);
  }
});
</script>

<template>
  <main id="main-content">
    <div class="banner">
      <h2>
        <span>#</span>
        Markdown
      </h2>

      <p>
        Markdown is a cool and versatile markup language because it allows users
        to write in a simple, easy-to-read format that can be converted into
        HTML or other formats. Its simplicity and readability make it a favorite
        among web writers and technical documentation creators, as it enables
        them to focus on content rather than formatting.
      </p>
      <p>
        Markdown is widely used in platforms like GitHub for README files, in
        technical documentation, and for creating content on websites and blogs,
        making it an integral part of digital communication.
      </p>
      <p>
        Learning Markdown can be a game-changer for anyone involved in writing
        or creating content online. Its simplicity and flexibility make it an
        ideal tool for crafting documents, blog posts, or technical
        documentation.
      </p>
      <p>
        Markdown is widely supported across many platforms, so once you learn
        it, you can apply your skills in a variety of contexts.
      </p>
    </div>

    <nav class="toc" aria-label="Sections">
      <h3>Jump to a section</h3>
      <ul>
        <li v-for="section in sections" :key="section.slug">
          <a
            :href="`#${section.slug}`"
            :class="{ active: activeSection === section.slug }"
            @click.prevent="scrollToSection(section.slug)"
          >
            {{ section.title }}
          </a>
        </li>
      </ul>
    </nav>

    <AppSection
      v-for="section in sections"
      :key="section.slug"
      :slug="section.slug"
    />

    <p class="cool">Markdown is cool! 😎</p>
  </main>
</template>

<style scoped>
.banner {
  margin: 8rem 0 4rem;
  padding: 2rem;
  font-size: 1.2rem;
  background: var(--color-board);
  border-radius: 1rem;

  & > p:not(:last-child) {
    margin-bottom: 1rem;
  }
}

h2 {
  margin-bottom: 1.5rem;
  font-size: 2.4rem;
  font-weight: 700;

  & span {
    color: var(--color-neutral);
  }
}

.toc {
  position: sticky;
  top: 1rem;
  z-index: 10;
  margin-bottom: 4rem;
  padding: 1rem;
  background-color: var(--color-board);
  border: 1px solid var(--color-step-2);
  border-radius: 1rem;
}

.toc h3 {
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 700;
}

.toc ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  list-style: none;
}

.toc a {
  display: block;
  padding: 0.375rem 0.75rem;
  background-color: var(--color-step-3);
  border-radius: 0.25rem;
  color: var(--color-text);
  font-size: 0.875rem;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.toc a:hover,
.toc a:focus-visible,
.toc a.active {
  background-color: var(--color-step-2);
  color: var(--color-link-hover);
  outline: none;
}

.cool {
  display: block;
  margin: 4rem 0;
  text-align: right;
  font-size: 1.4rem;
}

@media (min-width: 768px) {
  .toc {
    padding: 1.5rem;
  }

  .toc a {
    font-size: 1rem;
  }
}
</style>
