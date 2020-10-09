import 'normalize.css/normalize.css' // A modern alternative to CSS resetsß
import '@/assets/styles/reset.scss'
import '@/assets/styles/common.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import '@/assets/styles/element-ui-reset.scss'
import { getPageTitle } from '@/utils/tools'

locale.use(lang)
Vue.use(ElementUI)

import filtersCommon from './utils/filters/index'
import filtersEnum from './utils/filters/fmtEnum'
const filters = { ...filtersCommon, ...filtersEnum }
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 设置页签标题
router.beforeEach((to, from, next) => {
  document.title = getPageTitle(to.meta.title)
  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
