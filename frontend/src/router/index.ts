import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/ToppageView.vue'),
    },
    {
      path: '/works/',
      name: 'works',
      component: () => import('../views/WorksView.vue'),
    },
    {
      path: '/about-me/',
      name: 'about-me',
      component: () => import('../views/AboutmeView.vue'),
    },
    // 404 ページ
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotfoundView.vue'),
    }
  ],
})

export default router
