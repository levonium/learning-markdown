<script>
import Files from "@/Files";
import AppSection from "@/components/AppSection.vue";

export default {
  components: {
    Section: AppSection,
  },

  data() {
    return {
      list: Files,
    };
  },
};
</script>

<template>
  <main>
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

    <section v-for="(item, index) in list" :key="index" class="item shadow">
      <Section :slug="index"></Section>
    </section>

    <p class="cool">Markdown is cool! 😎</p>
  </main>
</template>

<style scoped>
.banner {
  margin: 12rem 0;
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

.cool {
  display: block;
  margin: 4rem 0;
  text-align: right;
  font-size: 1.4rem;
}
</style>
