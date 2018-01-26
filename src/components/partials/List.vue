<template>
  <div class="md-list section">

    <h1>Learning Markdown</h1>

    <div class="list-grid">
      <div class="list-item" v-for="(item, index) in list" :key="index">
        <router-link :to="'/list/' + index" class="">
          {{ item }}
        </router-link>
      </div>
    </div>

    <h3>Practice Markdown <router-link to="/practice" exact> 👉 </router-link> </h3>

  </div>
</template>

<script>
import List from '../../list'

export default {
  name: 'List',
  data () {
    return {
      list: List
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
  padding: 1em;
  border: 1px dotted;
  border-radius: 6px;
  text-align: center;
}
</style>
