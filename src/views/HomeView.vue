<script>
import ElementsGrid from "@/components/ElementsGrid.vue";

export default {
  components: {
    ElementsGrid: ElementsGrid,
  },
};
</script>

<template>
  <main>
    <ElementsGrid />

    <p class="cool">Markdown is cool! 😎</p>
  </main>
</template>

<style scoped>
.cool {
  text-align: right;
  font-weight: 700;
}
</style>
