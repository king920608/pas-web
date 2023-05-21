import Vue from 'vue'
import VueRouter from 'vue-router'
import { asyncRoutes } from './routes'

Vue.use(VueRouter)


export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login'),
    hidden: true,
    meta: { title: 'µÇÂ¼' }
  },
  {
    path: '401',
    name: '401',
    component: () => import('../views/error-page/401'),
    hidden: true,
    meta: { title: '401' }
  },
  {
    path: '404',
    name: '404',
    component: () => import('../views/error-page/404'),
    hidden: true,
    meta: { title: '404' }
  }
]

const routes = [...constantRoutes, ...asyncRoutes]

export default new Router({
  routes
})
