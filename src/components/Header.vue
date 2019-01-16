<template>
  <header class="shadow">

    <div class="container mx-auto sm:flex sm:justify-between sm:items-center py-4 px-4">

      <h1 class="text-lg sm:text-3xl">
        <router-link class="text-white" to="/" exact># Learning Markdown</router-link>
      </h1>

      <nav class="flex mt-4 sm:mt-0">
        <span class="ml-4">
          <router-link class="text-lg font-bold" to="/" exact>## Learn</router-link>
        </span>

        <span class="ml-4">
          <router-link class="text-lg font-bold" to="/practice" exact>## Practice</router-link>
        </span>
      </nav>

    </div>

  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
</style>
