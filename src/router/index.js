import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/partials/List'
import Single from '@/components/partials/Single'
import Practice from '@/components/partials/Practice'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/list/:slug',
      name: 'Single',
      component: Single
    },
    {
      path: '/practice',
      name: 'Practice',
      component: Practice
    }
  ]
})
