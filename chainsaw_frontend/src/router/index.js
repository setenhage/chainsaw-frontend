import {createRouter, createWebHistory} from 'vue-router'

import homePage from "../views/homepage"
import revSubFormView from "../views/revsubformview"

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
    }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
