import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/content/Home.vue'
import About from '@/views/content/About.vue'
import Test from '@/views/content/Test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export { routes, router}