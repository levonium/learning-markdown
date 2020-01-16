<template>
  <div class="markdown overflow-hidden">

    <h1 class="mb-8 px-4">Markdown: {{ title }}</h1>

    <div v-if="loading">
      <svg viewBox="0 0 100 100"><path fill="none" d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" stroke="#fcc853" stroke-width="3" stroke-dasharray="2.5658892822265624 2.5658892822265624"><animate attributeName="stroke-dashoffset" calcMode="linear" values="0;256.58892822265625" keyTimes="0;1" dur="1" begin="0s" repeatCount="indefinite"></animate></path></svg>
    </div>

    <div class="flex flex-wrap justify-between" v-if="!loading">

      <div class="w-full sm:w-1/2 p-4">
        <div class="shadow bg-black p-4 h-full">
          <pre>{{ content }}</pre>
        </div>
      </div>

      <div class="w-full sm:w-1/2 p-4">
        <div class="marked shadow bg-black p-4 h-full" v-html="marked"></div>
      </div>

    </div>

    <div class="text-red pl-4" v-if="isError">
      <span>Oops, something went wrong. 🙃</span>
    </div>

    <h3 class="mt-8 pr-4 text-right"><router-link to="/practice" exact>Practice Markdown 👉</router-link></h3>

  </div>

</template>

<script>
import marked from 'marked'
import Files from '@/Files.js'

export default {
  name: 'MarkdownShow',
  data () {
    return {
      docTitle: 'Learn Markdown : ',
      slug: this.$route.params.slug,
      loading: false,
      isError: false,
      title: '',
      content: '',
      marked: ''
    }
  },
  created () {
    this.title = Files[this.slug]
    document.title = this.docTitle + this.title

    const file = `/files/${this.slug}.md`
    this.getData(file)
  },
  methods: {
    getData (url) {
      this.loading = true
      this.$http.get(url)
        .then((data) => {
          this.content = data.bodyText
          this.marked = marked(this.content)
          this.loading = false
        }).catch((error) => {
          this.isError = true
          this.loading = false
          console.log(error)
        })
    }
  }
}
</script>
