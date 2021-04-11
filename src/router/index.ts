import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  },
  {
    path: '/j4mesen',
    name: 'j4mesen',
    redirect: () => {
      window.location.replace('https://manczak.net')
      return '/j4mesen'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router