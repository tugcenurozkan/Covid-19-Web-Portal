import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Contact from '../views/Contact.vue'
import Questions from '../views/Questions.vue'
import Duyurular from '../views/Duyurular.vue'
import Korunma from '../views/Korunma.vue'
import GuncelGelismeler from '../views/GuncelGelismeler.vue'
import TürkiyeSonDurum from '../views/TürkiyeSonDurum.vue'
import DunyaSonDurum from '../views/DunyaSonDurum.vue'





Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },

  {
    path: '/questions',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/guncelGelismeler',
    name: 'GuncelGelismeler',
    component: GuncelGelismeler
  },
  {
    path: '/türkiyeSonDurum',
    name: 'TürkiyeSonDurum',
    component: TürkiyeSonDurum
  },
  {
    path: '/dunyaSonDurum',
    name: 'DunyaSonDurum',
    component: DunyaSonDurum
  },
  {
    path: '/korunma',
    name: 'Korunma',
    component: Korunma
  },
  {
    path: '/duyurular',
    name: 'Duyurular',
    component: Duyurular
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
{
  path: '/login',
  name: 'Login',
  component: Login
},


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
