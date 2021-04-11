import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/o-nas',
    name: 'o-nas',
    // redirect: to => {
      // window.location.href = 'http://google.com'
      // return '/redirecting' // not important since redirecting
    // }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/discord',
    name: 'Discord',
    alias: ['/dsc', '/dc'],
    redirect: () => {
      window.location.replace('https://discord.gg/NBXq95C')
      return '/discord'
    }
  },
  {
    path: '/facebook',
    name: 'Facebook',
    alias: '/fb',
    redirect: () => {
      window.location.replace('https://facebook.com/groups/gractwo')
      return '/facebook'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router