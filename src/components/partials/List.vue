<template>
  <div class="md-list section">

    <h1>Learning Markdown</h1>

    <div class="list-grid">
      <div class="list-item" v-for="(item, index) in list" :key="index">
        <router-link :to="'/list/' + index" class="">
          <app-icon :iconName="index"></app-icon>
          <span class="item-name">{{ item }}</span>
        </router-link>
      </div>
    </div>

    <h3>Practice Markdown <router-link to="/practice" exact> 👉 </router-link> </h3>

  </div>
</template>

<script>
import Icon from './Icon.vue'
import List from '../../list'

export default {
  components: {
    'app-icon': Icon
  },
  name: 'List',
  data () {
    return {
      list: List,
      docTitle: 'Learn Markdown'
    }
  },
  created () {
    if (this.$route.name === 'List') {
      document.title = this.docTitle
    }
  }
}
</script>

<style>
.list-grid {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat( 4, 1fr );
  margin: 2em 0;
}
@media screen and (max-width: 899px) {
  .list-grid {
    grid-template-columns: repeat( 3, 1fr );
  }
}
@media screen and (max-width: 749px) {
  .list-grid {
    grid-template-columns: repeat( 2, 1fr );
  }
}
@media screen and (max-width: 599px) {
  .list-grid {
    grid-template-columns: 1fr;
    grid-gap: 1em;
  }
}
.list-item {
  padding: 2em 0;
  border-radius: 0;
  text-align: center;
  border: 1px solid #c2d8f5;
}
span.item-icon {
  width: 3em;
  height: 4em;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
span.item-icon svg {
  fill: #79a3da;
  flex-grow: 1;
}
span.item-name {
  display: block;
  margin-top: 1em;
  color: #000;
}
</style>
