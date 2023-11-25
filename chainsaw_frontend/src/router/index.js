import {createRouter, createWebHistory} from 'vue-router'

import homePage from "../views/homepage"
import AddressForm from "../views/revsubformview"
import aboutPage from "../views/aboutpage"

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
    },
    {
      path: '/aboutpage',
      name: 'aboutPage',
      component: aboutPage
    }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
