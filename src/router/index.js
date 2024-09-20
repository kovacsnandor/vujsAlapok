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
      name: 'globallocalcomponent',
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
    {
      path: '/vslot',
      name: 'vslot',
      component: () => import('../views/VSlot.vue')
    },
    
  ]
})

export default router
