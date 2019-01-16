<template>
  <div class="practice">

    <h2 class="mb-8 pl-4">Practice Markdown</h2>

    <div class="flex flex-wrap justify-between">

      <div class="w-full sm:w-1/2 p-4">
        <div class="shadow bg-black h-full">
          <textarea class="min-h-400 w-full p-4" v-model="content" autofocus></textarea>
        </div>
      </div>

      <div class="w-full sm:w-1/2 p-4">
        <div class="marked shadow bg-black p-4 h-full" v-html="markdown"></div>
      </div>
    </div>

    <small class="pl-4">* No syntax highlighting 🙃</small>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'MarkdownPractice',
  data () {
    return {
      content: '# Markdown 🔥\n\n_Practice **Markdown** here_\n\n* list item\n* another list item',
      docTitle: 'Practice Markdown'
    }
  },
  computed: {
    markdown () {
      return marked(this.content)
    }
  },
  created () {
    document.title = this.docTitle
  }
}
</script>

<style>
</style>
