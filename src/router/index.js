import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ApartmentsVisualFirst from '../views/ApartmentsVisualFirst.vue'
import ApartmentsVisualSecond from '../views/ApartmentsVisualSecond.vue'
import ApartmentsParameters from '../views/ApartmentsParameters.vue'
import ApartmentsFlat from '../views/ApartmentsFlat.vue'
import GalleryMain from '../views/GalleryMain.vue'
import GalleryCategory from '../views/GalleryCategory.vue'
import News from '../views/News.vue'
import NewsSingle from '../views/NewsSingle.vue'
import Progress from '../views/Progress.vue'
import Contacts from '../views/Contacts.vue'
import Policy from '../views/Policy.vue'
import NotFound from '../views/NotFound.vue'

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
    component: ApartmentsVisualFirst
  },
  {
    path: '/apartments/visual/:id',
    name: 'ApartmentsVisualSecond',
    component: ApartmentsVisualSecond
  },
  {
    path: '/apartments/parameters/:id',
    name: 'ApartmentsParameters',
    component: ApartmentsParameters
  },
  {
    path: '/flat/:id',
    name: 'ApartmentsFlat',
    component: ApartmentsFlat
  },
  {
    path: '/gallery',
    name: 'GalleryMain',
    component: GalleryMain
  },
  {
    path: '/gallery/:id',
    name: 'GalleryCategory',
    component: GalleryCategory
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/news/:id',
    name: 'NewsSingle',
    component: NewsSingle
  },
  {
    path: '/progress',
    name: 'Progress',
    component: Progress
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/policy',
    name: 'Policy',
    component: Policy
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
