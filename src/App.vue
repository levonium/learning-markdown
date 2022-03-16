<script setup>
import { RouterView } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="site container">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>

<style>
@import "@/assets/base.css";

.site {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}
@media (min-width: 768px) {
  .site {
    padding: 0;
  }
}
</style>
