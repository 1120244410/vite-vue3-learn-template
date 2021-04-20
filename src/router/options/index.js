const routes = {
  path: '/options',
  component: () =>
    import(/* webpackChunkName: "options" */ '@/pages/options/index.vue'),
  name: 'Options',
  meta: { title: '设置' },
};

export default routes;
