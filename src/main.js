import 'normalize.css/normalize.css' // A modern alternative to CSS resetsß
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Input } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import codeConfig from '@/utils/codeConfig'

locale.use(lang)
Vue.use(Button)
Vue.use(Input)

import filters from './utils/filter'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.prototype.$codeConfig = codeConfig
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
