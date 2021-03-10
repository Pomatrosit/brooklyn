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
  },
  {
    path: '/apartments/parameters/:id',
    name: 'ApartmentsParameters',
    component: () => import('../views/ApartmentsParameters.vue')
  },
  {
    path: '/flat/:id',
    name: 'ApartmentsFlat',
    component: () => import('../views/ApartmentsFlat.vue')
  },
  {
    path: '/gallery',
    name: 'GalleryMain',
    component: () => import('../views/GalleryMain.vue')
  },
  {
    path: '/gallery/:id',
    name: 'GalleryCategory',
    component: () => import('../views/GalleryCategory.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/news/:id',
    name: 'NewsSingle',
    component: () => import('../views/NewsSingle.vue')
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import('../views/Progress.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
