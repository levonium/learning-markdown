<template>
  <div id="app">
    <site-header :title="title"/>
    <div class='main container'>
      <router-view/>
    </div>
    <site-footer :title="title"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    'site-header': Header,
    'site-footer': Footer
  },
  name: 'App',
  data () {
    return {
      title: '✔️ <span class="smx">Learning</span> Markdown'
    }
  }
}
</script>

<style>
:root {
  --main-color: #efefef;
  --link-color: #2b7eda;
  --text-color: #2c3e50;
  --font-size: 16px;
}
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Fira Code';
  font-size: var(--font-size);
  color: var(--text-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  box-sizing: inherit;
}
.container {
  width: 1232px;
  margin: 0 auto;
  padding: 1em;
}
@media screen and (max-width: 1231px) {
  .container {
    width: 100%;
  }
}
.spacer {
  min-height: 1px;
  margin: 2em 0;
}
@media screen and (max-width: 599px) {
  .smx {
    display: none;
  }
}
a,
a:visited {
  color: var(--link-color);
}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
}
.is-black {
  background-color: #000;
  color: #fff;
}
.is-black a {
  color: #fff;
}
blockquote {
  margin-left: 0;
  padding-left: 2em;
  border-left: 2px solid var(--main-color);
}
code {
  color: #ff4500;
  background-color: var(--main-color);
  padding: 0.5em;
  border-radius: 3px;
  padding: 2px 6px;
}
hr {
    border-color: var(--main-color);
    border-style: solid;
}
.loading {
  max-width: 200px;
  text-align: center;
  margin: 1em auto;
}
.danger {
  background: #e66666;
  padding: 0.5em;
  margin: 1em 0;
}
/*** layout ***/
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header {
  flex: 0;
}
.main {
  flex: 1;
}
.footer {
  flex: 0;
}
/*** markdown ***/
.md-item {
  overflow-y: scroll;
}
.md-grid {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 1231px) {
  .md-grid {
    grid-template-columns: 1fr;
  }
}
.content,
.marked {
  padding: 1em;
  box-shadow: 0px 0px 6px var(--main-color);
}
.content {
  min-height: 400px;
  background-color: var(--main-color);
  border: 1px solid var(--main-color);
  font-size: 1em;
}
.content:focus {
  outline: 1px solid #ff4500;
}
.marked {
  border: 1px solid var(--main-color);
}
.marked h1 {
  margin-bottom: 1em;
}
.marked p {
  margin-bottom: .5em;
}
.marked img {
  max-width: 100%;
}
.marked pre,
.marked code {
  color: #ff4500;
  background-color: var(--main-color);
  padding: 0.5em;
  border-radius: 3px;
}
.marked code {
  padding: 2px 6px;
}
.marked hr {
    border-color: var(--main-color);
    border-style: solid;
}
.marked blockquote {
  margin-left: 0;
  padding-left: 2em;
  border-left: 2px solid var(--main-color);
}
.marked table,
.marked th,
.marked td {
  border: 1px solid var(--main-color);
}
.marked table {
  border-collapse: collapse;
}
.marked th,
.marked td {
  padding: 0.125em 0.5em;
}
</style>
