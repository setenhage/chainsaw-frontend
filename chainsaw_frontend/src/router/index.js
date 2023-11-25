import {createRouter, createWebHistory} from 'vue-router'

import homePage from "../views/homepage"
import revSubFormView from "../views/revsubformview"
import aboutUs from "../views/aboutus.vue"

const routes = [
    {
      path: '/homepage',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/homepage/revsubformview',
      name: 'revSubFormView',
      component: revSubFormView
    },
    {
      path: '/homepage/about',
      name: 'aboutUs',
      component: aboutUs
    }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
