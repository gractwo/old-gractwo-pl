import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/discord',
    name: 'Discord',
    alias: ['/dsc', '/dc'],
    redirect: () => {
      window.location.replace('https://discord.gg/NBXq95C');
      return '/discord';
    },
  },
  {
    path: '/facebook',
    name: 'Facebook',
    alias: '/fb',
    redirect: () => {
      window.location.replace('https://facebook.com/groups/gractwo');
      return '/facebook';
    },
  },
  {
    path: '/github',
    name: 'GitHub',
    alias: '/git',
    redirect: () => {
      window.location.replace('https://github.com/Gractwo');
      return '/github';
    },
  },
  {
    path: '/j4mesen',
    name: 'j4mesen',
    redirect: () => {
      window.location.replace('https://manczak.net');
      return '/j4mesen';
    },
  },
  {
    path: '/kuolek',
    name: 'kuolek',
    redirect: () => {
      window.location.replace(
        'https://steamcommunity.com/profiles/76561198381997060'
      );
      return '/kuolek';
    },
  },
  {
    path: '/be-elephant',
    name: 'beElephant',
    redirect: () => {
      window.location.replace(
        'https://steamcommunity.com/profiles/76561198309722571'
      );
      return '/be-elephant';
    },
  },
  {
    path: '/jarooko',
    name: 'jarooko',
    redirect: () => {
      window.location.replace('https://steamcommunity.com/id/jarooko');
      return '/jarooko';
    },
  },
  {
    path: '/mollin',
    name: 'mollin',
    redirect: () => {
      window.location.replace(
        'https://steamcommunity.com/profiles/76561198264001711'
      );
      return '/mollin';
    },
  },
  {
    path: '/bavil-gravlax',
    name: 'bavilGravlax',
    redirect: () => {
      window.location.replace(
        'https://steamcommunity.com/profiles/76561198855251311'
      );
      return '/bavil-gravlax';
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
