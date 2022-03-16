<script>
import Files from "@/Files";
import Icon from "@/components/Icon.vue";

export default {
  components: {
    Icon: Icon,
  },
  data() {
    return {
      list: Files,
    };
  },
};
</script>

<template>
  <div class="grid">
    <div v-for="(item, index) in list" :key="index" class="item shadow">
      <router-link :to="index">
        <Icon :iconName="index"></Icon>

        <span>{{ item }}</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}
.item {
  text-align: center;
  background-color: var(--color-main);
  border-radius: 0.5rem;
  transition: background 0.3s;
}
.item a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 1rem;
  color: var(--color-dark);
}
.item span {
  display: block;
  margin-top: 0.5rem;
  font-size: 1.125rem;
  font-weight: 700;
}
.item:hover {
  background-color: var(--color-main-hover);
}
</style>
