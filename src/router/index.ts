import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// eslint-disable-next-line import/no-unresolved
import Layout from '@/layout/default.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Layout,
    children: [
      {
        path: '/login',
        // eslint-disable-next-line import/no-unresolved
        component: () => import('@/views/login/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
