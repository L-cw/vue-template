import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: resolve => {
      require(['@/views/layout/index.vue'], resolve)
    },
    children: [
      {
        path: '/',
        component: resolve => {
          require(['@/views/index/index.vue'], resolve)
        },
        title: '首页',
        name: 'Index'
      },
      {
        path: '/demo/form',
        component: resolve => {
          require(['@/views/demo/form.vue'], resolve)
        },
        title: 'Demo',
        name: 'Demo'
      },
      {
        path: '/demo/list',
        component: resolve => {
          require(['@/views/demo/list.vue'], resolve)
        },
        title: 'List',
        name: 'List'
      },
      {
        path: '/demo/other',
        component: resolve => {
          require(['@/views/demo/other.vue'], resolve)
        },
        title: 'Other',
        name: 'Other'
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
