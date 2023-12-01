import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

/* Create routing beetwen pages */

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
      path: '/mydata',
      name: 'mydata',
      component: () => import('../views/MyDataView.vue')
    },
    {
      path: '/changeuserdata/:id',
      name: 'changeuserdata',
      component: () => import('../views/UserDataView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/personlist',
      name: 'personlist',
      component: () => import('../views/ListPersonView.vue')
    },
    {
      path: '/searchResult',
      name: 'searchResult',
      component: () => import('../views/SearchResultView.vue')
    },
    {
      path: '/emailconfirmsucces',
      name: 'emailconfirmsucces',
      component: () => import('../views/succesConfirmView.vue')
    },
    {
      path: '/emailconfirmerror',
      name: 'emailconfirmerror',
      component: () => import('../views/errorConfirmView.vue')
    },
  ]
})



export default router
