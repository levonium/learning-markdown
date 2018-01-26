<template>
  <div class="header">

    <nav class="nav is-black">
      <div class="container">

        <div class="nav-brand">
          <a class="nav-item" href="/" v-html="title">
          </a>
        </div>

        <div class="nav-menu">
          <div class="nav-item">
            <router-link class="" to="/list" exact>Learn</router-link>
          </div>
          <div class="nav-item">
            <router-link class="" to="/practice" exact>️Practice</router-link>
          </div>
        </div>

      </div>
    </nav>

  </div>
</template>

<script>
import List from '../list'

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      list: List
    }
  }
}
</script>

<style>
/*** header ***/
.header {
  margin-bottom: 2em;
}
.nav .container {
  display: flex;
  align-items: center;
}
.nab-brand {
  flex: 1;
}
.nav-menu {
  flex: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.nav-item {
  padding: 0 1em;
}
.header .nav-item .router-link-active {
  color:#ff4500;
}
</style>
