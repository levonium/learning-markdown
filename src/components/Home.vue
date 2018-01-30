<template>
  <div class="home">

    <md-list></md-list>

    <hr>
    <div class="spacer"></div>

    <div class="desc">

      <h2>What is Markdown?</h2>

      <p>
        Here's how
        <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank">Wikipedia</a>
        defines Markdown:
      </p>

      <blockquote>
        Markdown is a lightweight markup language with plain text formatting syntax.
        It is designed so that it can be converted to HTML and many other formats using a tool by the same name.
        Markdown is often used to format readme files, for writing messages in online discussion forums,
        and to create rich text using a plain text editor.
        As the initial description of Markdown contained ambiguities and unanswered questions, many implementations
        and extensions of Markdown appeared over the years to answer these issues.
      </blockquote>

      <p>
        Until recently, I wasn't paying much attention to it and knew some basics of Markdown only.
        I wanted to learn it and started prcaticing and created <code>.md</code> files.
        Later when I started learning <a href="https://vuejs.org" target="_blank">Vue.js</a> I just put them together as a website.
      </p>

      <p>
        The source files: <a href="https://github.com/levonium/learning-markdown" target="_blank">Markdown</a>
      </p>

      <div class="spacer"></div>

      <h3 style="text-align: right;">Markdown 🔥🔥🔥🔥🔥 </h3>

    </div>

  </div>
</template>

<script>
import ListTemplate from './partials/List.vue'

export default {
  components: {
    'md-list': ListTemplate
  },
  name: 'Home',
  data () {
    return {
      docTitle: 'Markdown ✔️ Learn and Practice'
    }
  },
  created () {
    document.title = this.docTitle
  }
}
</script>
