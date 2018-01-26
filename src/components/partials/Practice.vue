<template>
  <div class="practice">
      <h1 class="main-title">Practice Markdown</h1>

      <div class="md-grid">

        <textarea class="content" v-model="content"></textarea>

        <div class="marked" v-html="converted"></div>

    </div>

    <div class="spacer">* No syntax highlighting 🙃</div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  data () {
    return {
      content: '# Markdown 🔥\n\n_Practice **Markdown** here_\n\n* list item\n* another list item'
    }
  },
  computed: {
    converted: function () {
      return marked(this.content)
    }
  }
}
</script>

<style>
</style>
