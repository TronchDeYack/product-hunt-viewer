import Vue from 'vue';
import VueRouter from 'vue-router';

import ProductViewer from '@/views/ProductViewer.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'product-viewer',
    component: ProductViewer,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
