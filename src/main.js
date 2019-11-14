import 'normalize.css/normalize.css' // A modern alternative to CSS resetsß
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueClipboard from 'vue-clipboard2'
import CopyText from '@/components/CopyText'
import codeConfig from '@/utils/codeConfig'

Vue.use(ElementUI)
Vue.use(VueClipboard)
Vue.component('copy-text', CopyText)

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
