import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/apartments/visual',
    name: 'ApartmentsVisual',
    component: () => import('../views/ApartmentsVisualFirst.vue')
  },
  {
    path: '/apartments/visual/:id',
    name: 'ApartmentsVisualSecond',
    component: () => import('../views/ApartmentsVisualSecond.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
