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
      path: '/lifecycle',
      name: 'lifecycle',
      component: () => import('../views/LifeCycle.vue')
    },
    
  ]
})

export default router
