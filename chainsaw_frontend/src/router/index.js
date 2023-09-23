import {createRouter, createWebHistory} from 'vue-router'

import homePage from "../views/homepage"

const routes = [
    {
      path: '/homepage',
      name: 'homePage',
      component: homePage
    }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
