import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/expenses',
    name: 'Expenses',
    component: () => import(/* webpackChunkName: "about" */ '../views/Expenses.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/accountDetails',
    name: 'AccountDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/AccountDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
