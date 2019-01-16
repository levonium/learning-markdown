import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/practice',
      name: 'practice',
      component: () => import(/* webpackChunkName: "learn" */ './views/Practice.vue')
    },
    {
      path: '/:slug',
      name: 'show',
      component: () => import('./views/Show.vue')
    }
  ]
})
