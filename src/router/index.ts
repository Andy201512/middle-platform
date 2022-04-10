import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/content/Home.vue'
import Children1 from '@/views/content/Children1.vue'
import Children11 from '@/views/content/Children11.vue'
import About from '@/views/content/About.vue'
import Test from '@/views/content/Test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
      {
        path: '/home/children1',
        name: 'children1',
        component: Children1,
        children: [
          {
            path: '/home/children1/children11',
            name: 'children11',
            component: Children11
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