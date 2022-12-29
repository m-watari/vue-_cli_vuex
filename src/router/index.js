import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: () => import(/* webpackChunkName: "invoice" */ '../views/invoice/List.vue')
  },
// http://localhost:8080/invoice/detail/932でアクセス
  {
    path: '/invoice/detail/:id',
    name: 'invoice-detail',
    component: () => import(/* webpackChunkName: "invoice" */ '../views/invoice/Detail.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
