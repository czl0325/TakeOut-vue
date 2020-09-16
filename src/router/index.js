import Vue from 'vue'
import Router from 'vue-router'

import Site from '../pages/site/Site'
import Profile from '../pages/profile/Profile'
import Order from '../pages/order/Order'
import Search from '../pages/search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/site'
    },
    {
      path: '/site',
      component: Site
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
