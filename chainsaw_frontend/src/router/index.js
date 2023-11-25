import {createRouter, createWebHistory} from 'vue-router'

import homePage from "../views/homepage"
import AddressForm from "../views/revsubformview"

const routes = [
    {
      path: '/homepage',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/homepage/revsubformview',
      name: 'revSubFormView',
      component: AddressForm
    }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
