<template>
  <div id="app" class="min-h-screen flex flex-col justify-between font-sans bg-dark text-white antialiased">

    <app-header />

    <div class="container mx-auto my-16">
      <router-view />
    </div>

    <app-footer />

  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
@import './assets/css/style';
</style>
