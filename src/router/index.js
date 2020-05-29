import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Sklep from '../views/Sklep'
import Kontakt from '../views/Kontakt'
import Koszyk from '../views/Koszyk'
import Product from '../views/Product'
import Form from '../views/Form'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sklep',
    name: 'Sklep',
    component: Sklep
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
  },
  {
    path: '/koszyk',
    name: 'Koszyk',
    component: Koszyk
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
