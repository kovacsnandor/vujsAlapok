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
      path: '/szulo2gyerek',
      name: 'szulo2gyerek',
      component: () => import('../views/Szulo2Gyerek.vue')
    },
    {
      path: '/szuloodavisszagyerek',
      name: 'szuloodavisszagyerek',
      component: () => import('../views/SzuloOdaVisszaGyerek.vue')
    },
    {
      path: '/gyerek2gyerek',
      name: 'gyerek2gyerek',
      component: () => import('../views/Gyerek2gyerek.vue')
    },
    {
      path: '/provideinject',
      name: 'provideinject',
      component: () => import('../views/ProvideInject.vue')
    },
    
  ]
})

export default router
