import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { store } from '@/store/index'
import Home from '@/views/content/Home.vue'
import Children1 from '@/views/content/Children1.vue'
import Children11 from '@/views/content/Children11.vue'
import About from '@/views/content/About.vue'
import Test from '@/views/content/Test.vue'
import TableExample from '@/views/content/TableExample.vue'
import Login from '@/views/content/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/middle-platform/',
    redirect: '/middle-platform/about'
  },
  {
    path: '/middle-platform/home',
    name: 'home',
    component: Home,
    meta: {
      title: 'home',
      requireAuth: true
    },
    children:[
      {
        path: '/middle-platform/home/children1',
        name: 'children1',
        component: Children1,
        meta: {
          title: '菜单递归测试1',
          requireAuth: true
        },
        children: [
          {
            path: '/middle-platform/home/children1/children11',
            name: 'children11',
            component: Children11,
            meta: {
              title: '菜单递归测试11',
              requireAuth: true
            }
          }
        ]
      }
    ]
  },
  {
    path: '/middle-platform/about',
    name: 'about',
    component: About,
    meta: {
      title: '关于',
      requireAuth: true
    }
  },
  {
    path: '/middle-platform/table',
    name: 'table',
    component: TableExample,
    meta: {
      title: '表格、表单',
      requireAuth: true
    }
  },
  {
    path: '/middle-platform/test',
    name: 'test',
    component: Test,
    meta: {
      title: '试验场',
      requireAuth: true
    }
  },
  {
    path: '/middle-platform/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录',
      requireAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

// 添加全局路由守卫检查是否登录

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 检查是否需要登录权限
    if (store.state.user.firstName == '--') { // 检查是否已登录
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
});

export { routes, router}