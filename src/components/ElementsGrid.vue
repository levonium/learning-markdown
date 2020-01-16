<template>
  <div>

    <div class="flex flex-wrap my-8">

      <div class="w-full sm:w-1/2 lg:w-1/4 mb-4" v-for="(item, index) in list" :key="index">
        <div class="mx-4 p-4 text-center bg-primary hover:bg-primary-hover shadow rounded-lg transition">

          <router-link :to="index" class="block w-full h-full text-dark">
            <md-icon :iconName="index"></md-icon>
            <span class="block mt-2 text-lg font-bold">{{ item }}</span>
          </router-link>
        </div>

      </div>

    </div>

    <p class="text-right font-bold pr-2">Markdown is cool! 😎</p>

  </div>
</template>

<script>
import Files from '@/Files'
import Icon from '@/components/Icon.vue'

export default {
  components: {
    'md-icon': Icon
  },
  name: 'List',
  data () {
    return {
      list: Files
    }
  }
}
</script>
