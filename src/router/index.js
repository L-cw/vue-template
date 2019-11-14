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
        name: 'Index'
      },
      {
        path: '/demo/form',
        component: resolve => {
          require(['@/views/demo/form.vue'], resolve)
        },
        name: 'Demo'
      },
      {
        path: '/demo/list',
        component: resolve => {
          require(['@/views/demo/list.vue'], resolve)
        },
        name: 'List'
      },
      {
        path: '/demo/other',
        component: resolve => {
          require(['@/views/demo/other.vue'], resolve)
        },
        name: 'Other'
      },
      {
        path: '/demo/node',
        component: resolve => {
          require(['@/views/demo/applyNetNode.vue'], resolve)
        },
        name: 'ApplyNetNode'
      },
      {
        path: '/node/index',
        component: resolve => {
          require(['@/views/node/index.vue'], resolve)
        },
        name: 'nodeIndex'
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
