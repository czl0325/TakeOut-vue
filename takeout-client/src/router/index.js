import Vue from 'vue'
import Router from 'vue-router'

import Site from '../pages/site/Site'
import Profile from '../pages/profile/Profile'
import Order from '../pages/order/Order'
import Search from '../pages/search/Search'
import Login from '../pages/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/site'
    },
    {
      path: '/site',
      component: Site,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
