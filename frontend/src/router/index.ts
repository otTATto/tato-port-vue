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
    // 個別の works ページ
    {
      path: '/works/:slug',
      name: 'workDetail',
      component: () => import('../views/WorkdetailView.vue'),
    },
    // 404 ページ
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotfoundView.vue'),
    },
  ],
  // @brief ハッシュ付き URL に対して該当要素までスクロールする
  // @detail スムーズスクロールではなく、一瞬でジャンプする
  // @detail 上部マージンを確保するため、要素位置 から 25px 上に調整
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        const offset = element.getBoundingClientRect().top + window.pageYOffset - 25; // 25px 上に調整
        window.scrollTo({ top: offset, behavior: 'auto' }); // 一瞬でスクロール
      }
      return false; // Vue Router のデフォルト動作を無効化
    } else {
      return { top: 0 };
    }
  },
})

export default router
