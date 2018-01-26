<template>
  <footer class="footer is-black">
    <div class="container">
        <p>
          <span v-html="title"></span>
        </p>
        <p class="author">
          {{ year }} | <span>Made by <a href="https://drim.io" target="_blank">Levon Avetyan</a> ✌ </span>
        </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      year: ''
    }
  },
  created () {
    this.year = new Date().getFullYear()
  }
}
</script>

<style>
.footer {
  margin-top: 2em;
}
.footer .container {
  display: flex;
  align-items: center;
}
.footer .container p {
  flex: 1;
  margin: 0.5em 0;
}
.author {
  text-align: right;
}
</style>
