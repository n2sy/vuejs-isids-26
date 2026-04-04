import { createRouter, createWebHistory } from 'vue-router'
import HomeAccount from './components/accounts/HomeAccount.vue'
import Accueil from './components/Accueil.vue'
import Cv from './project/Cv.vue'
import Infos from './components/Infos.vue'

const myRoutes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('./components/NotFound.vue'),
  },
  {
    path: '/',
    name: 'pageAccueil',
    component: () => import('./components/Accueil.vue'),
  },
  {
    path: '/cv',
    name: 'candidats',
    component: () => import('./project/Cv.vue'),
  },
  {
    // path: '/cv/:id/:year?',
    path: '/cv/:id',
    name: 'infos',
    component: () => import('./components/Infos.vue'),
  },
  {
    path: '/accounts',
    component: () => import('./components/accounts/HomeAccount.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
})

export default router
