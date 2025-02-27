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
@import "@/assets/markdown.css";
</style>
