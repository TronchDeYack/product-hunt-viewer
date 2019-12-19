import Vue from 'vue';
import VueRouter from 'vue-router';

import ProductViewer from '@/views/ProductViewer.vue';
import PostDetails from '@/views/PostDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'product-viewer',
    component: ProductViewer,
  },
  {
    path: '/post/:id',
    name: 'posts-details',
    component: PostDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
