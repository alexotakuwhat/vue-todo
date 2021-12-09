import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Todo.vue'),
    },
    {
      path: '/:filter',
      component: () => import('../views/Todo.vue'),
    }
  ]
})

export default router
