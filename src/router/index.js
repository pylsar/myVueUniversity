import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Top from '../views/Top.vue'
import Excursion from '../views/Excursion.vue'
import Gallary from '../views/Gallary.vue'
import Auth from '../views/Auth.vue'
import University from '../views/University.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/top',
    name: 'Top',
    component: Top
  },
  {
    path: '/excursion',
    name: 'Excursion',
    component: Excursion
  },
  {
    path: '/gallary',
    name: 'Gallary',
    component: Gallary
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/university/:id',
    name: 'University',
    component: University,
    props: true
  },
  { 
    path: '/pagenotfound', 
    name: 'PageNotFound', 
    component: PageNotFound, 
  }, { 
    path: '*', 
    redirect: '/pagenotfound' 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
