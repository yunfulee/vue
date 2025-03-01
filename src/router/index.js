import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  }
  //   {
  //     path: '/orders',
  //     name: 'Orders',
  //     component: () => import('../views/Orders.vue')
  //   },
  //   {
  //     path: '/settings',
  //     name: 'Settings',
  //     component: () => import('../views/Settings.vue')
  //   }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
