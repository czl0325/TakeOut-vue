import Vue from 'vue'
import Router from 'vue-router'

import Site from '../pages/site/Site'
import Profile from '../pages/profile/Profile'
import Order from '../pages/order/Order'
import Search from '../pages/search/Search'
import Login from '../pages/login/Login'
import Shop from "../pages/shop/Shop";
import ShopGoods from "../pages/shop/ShopGoods/ShopGoods";
import ShopInfo from "../pages/shop/ShopInfo/ShopInfo";
import ShopRatings from "../pages/shop/ShopRatings/ShopRatings";

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
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods,
        },
        {
          path: '/shop/info',
          component: ShopInfo,
        },
        {
          path: '/shop/rating',
          component: ShopRatings,
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
