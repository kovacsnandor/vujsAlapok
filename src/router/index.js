import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/globallocalcomponent',
      name: 'globallocalcomponent',
      component: () => import('../views/GlobalLocalComponens.vue'),
      meta: { title: 'Global && Local'}
    },
    {
      path: '/dinamikuskomponens',
      name: 'dinamikuskomponens',
      component: () => import('../views/DinamikusKomponens.vue'),
      meta: { title: 'Dinamikus'}
    },
    {
      path: '/slots',
      name: 'slots',
      component: () => import('../views/Slots.vue'),
      meta: { title: 'slots'}
    },
    {
      path: '/vslot',
      name: 'vslot',
      component: () => import('../views/VSlot.vue'),
      meta: { title: 'v-slot'}
    },
    {
      path: '/tablazat',
      name: 'tablazat',
      component: () => import('../views/Tablazat.vue'),
      meta: { title: 'v-slot'}
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - Komponensek` : 'Komponensek';
  next();
})

export default router
