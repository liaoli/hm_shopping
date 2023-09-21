import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'
import Search from '@/views/search'
import SearchList from '@/views/search/list'
import MyOrder from '@/views/myorder'
import ProDetail from '@/views/prodetail'
import Pay from '@/views/pay'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/category',
          component: Category
        },
        {
          path: '/cart',
          component: Cart
        },
        {
          path: '/user',
          component: User
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/searchList',
      component: SearchList
    },
    {
      path: '/myOrder',
      component: MyOrder
    },
    {
      path: '/proDetail/:id',
      component: ProDetail
    },
    {
      path: '/pay',
      component: Pay
    }
  ]
})
const authUrl = [
  '/pay',
  '/myOrder'
]

router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (!authUrl.includes(to.path)) {
    next()
    return
  }
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
