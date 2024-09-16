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
      path: '/globallocalcomponent',
      name: 'dinamikusKomponens',
      component: () => import('../views/GlobalLocalComponens.vue')
    },
    {
      path: '/dinamikuskomponens',
      name: 'dinamikuskomponens',
      component: () => import('../views/DinamikusKomponens.vue')
    },
    {
      path: '/slots',
      name: 'slots',
      component: () => import('../views/Slots.vue')
    },
    
  ]
})

export default router
