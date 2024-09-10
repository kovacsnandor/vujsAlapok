import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/databind',
      name: 'databind',
      component: () => import('../views/DataBind.vue')
    },
    {
      path: '/vif',
      name: 'vif',
      component: () => import('../views/Vif.vue')
    },
    {
      path: '/vshow',
      name: 'vshow',
      component: () => import('../views/Vshow.vue')
    }
  ]
})

export default router
