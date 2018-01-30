<template>

  <div class="md-item section">

    <h1 class="main-title">{{ title }}</h1>

    <div class="loading" v-if="loading">
      <svg viewBox="0 0 100 100"><path fill="none" d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" stroke="#ff7841" stroke-width="3" stroke-dasharray="2.5658892822265624 2.5658892822265624"><animate attributeName="stroke-dashoffset" calcMode="linear" values="0;256.58892822265625" keyTimes="0;1" dur="1" begin="0s" repeatCount="indefinite"></animate></path></svg>
    </div>

    <div class="md-grid" v-if="!loading">

      <div class="content">
        <pre>{{ content }}</pre>
      </div>

      <div class="marked" v-html="marked"></div>

    </div>

    <div class="danger" v-if="isError">
      <span>Oops, something went wrong. 🙃 </span>
      <br />
      <span>Could you please send me a
        <a :href="email">
          notice
        </a>
        ? Thanks! 🙂
      </span>
    </div>

    <div class="spacer"></div>

    <h3>Practice Markdown <router-link to="/practice" exact> 👉 </router-link> </h3>

  </div>

</template>

<script>
import marked from 'marked'
import List from '../../list'

export default {
  data () {
    return {
      docTitle: 'Learn Markdown : ',
      list: List,
      slug: this.$route.params.slug,
      loading: false,
      isError: false,
      email: 'mailto:levon@drim.io?subject=Fix%20this%20mate&body=Hey,%20I%20think%20something%27s%20wrong%20here:%20',
      title: '',
      content: '',
      marked: ''
    }
  },
  created () {
    this.updateData()
  },
  methods: {
    updateData () {
      this.title = List[this.slug]
      this.loading = true
      this.$http.get(`https://raw.githubusercontent.com/levonium/learning-markdown/master/src/list/${this.slug}.md`)
        .then((data) => {
          this.content = data.bodyText
          this.marked = marked(this.content)
          this.loading = false
        }).catch((error) => {
          this.email += `${this.slug}%20-%20${error.bodyText}`
          this.isError = true
          this.loading = false
        })
      document.title = this.docTitle + this.title
    }
  }
}
</script>

<style>
</style>
