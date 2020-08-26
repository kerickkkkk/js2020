import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // 如果有隨意輸入path全都回login
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        // 內層不用 /
        path: '',
        component: () => import('../views/layout/Index.vue')
      },
      {
        // 內層不用 /
        path: 'about',
        component: () => import('../views/layout/About.vue')
      },
      {
        path: 'products',
        component: () => import('../views/layout/Products.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/layout/Cart.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue'),
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
