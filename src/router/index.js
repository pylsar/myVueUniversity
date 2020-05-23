import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Top from '../views/Top.vue'
import Excursion from '../views/Excursion.vue'
import Auth from '../views/Auth'

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
    path: '/auth',
    name: 'Auth',
    component: Auth
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
