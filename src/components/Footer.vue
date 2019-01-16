<template>
  <footer class="shadow border-t border-primary">

    <div class="container mx-auto text-center p-4">

        <p class="mb-2">
          <span># {{ new Date().getFullYear() }} </span> #
          <span>Learning Markdown</span> #
          <span>Made by <a href="https://drim.io" target="_blank">Levon Avetyan</a> ✌ </span>
        </p>

        <p>
          Website made with Vue.js. The source is on <a href="https://github.com/levonium/learning-markdown">GitHub</a>
        </p>

    </div>

  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
