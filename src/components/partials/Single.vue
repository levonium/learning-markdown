<template>

  <div class="md-item section">

    <h1 class="main-title">{{ title }}</h1>

    <div class="loading" v-if="loading">
      <img src="../../assets/loading.svg" alt="Loading...">
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
