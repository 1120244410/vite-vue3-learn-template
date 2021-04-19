import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
const routes = [
  { path: '/', component: Main, name: 'Main', meta: { title: '首页' } },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
