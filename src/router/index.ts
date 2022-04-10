import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/content/Home.vue'
import About from '@/views/content/About.vue'
import Test from '@/views/content/Test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
      {
        path: '/home/children1',
        name: 'children1',
        component: Test,
        children: [
          {
            path: '/home/children1/children11',
            name: 'children11',
            component: Test
          }
        ]
      }
    ]
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