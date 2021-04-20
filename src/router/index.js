import { createRouter, createWebHashHistory } from 'vue-router';
import options from './options';

const routes = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "options" */ '@/pages/Main.vue'),
    name: 'Main',
    meta: { title: '首页' },
  },
  options,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
