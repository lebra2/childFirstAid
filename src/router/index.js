import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Haigus1 from '../views/Haigus1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/haigus1',
      name: 'haigus1',
      component: () => import('../views/Haigus1.vue')
    },
    {
      path: '/haigus1-1',
      name: 'haigus1-1',
      component: () => import('../views/Haigus1-1.vue')
    },
    {
      path: '/ennetamine1',
      name: 'ennetamine1',
      component: () => import('../views/Ennetamine1.vue')
    },
    {
      path: '/ennetamine2',
      name: 'ennetamine2',
      component: () => import('../views/Ennetamine2.vue')
    },
    {
      path: '/ennetamine3',
      name: 'ennetamine3',
      component: () => import('../views/Ennetamine3.vue')
    },
    {
      path: '/ennetamine4',
      name: 'ennetamine4',
      component: () => import('../views/Ennetamine4.vue')
    },
    {
      path: '/LakaKoha',
      name: 'LakaKoha',
      component: () => import('../views/LakaKoha.vue')
    },
    {
      path: '/Mumps',
      name: 'Mumps',
      component: () => import('../views/Mumps.vue')
    },
    {
      path: '/TuuleRouged',
      name: 'TuuleRouged',
      component: () => import('../views/TuuleRouged.vue')
    },
    {
      path: '/NinaverejooksE',
      name: 'NinaverejooksE',
      component: () => import('../views/NinaverejooksE.vue')
    },
    {
      path: '/Myrgistused2',
      name: 'Myrgistused2',
      component: () => import('../views/Myrgistused2.vue')
    },
    {
      path: '/Teadvuseta',
      name: 'Teadvuseta',
      component: () => import('../views/Teadvuseta.vue')
    },


  ]
})

export default router
