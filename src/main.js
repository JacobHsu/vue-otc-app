import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import GBem from '@/directives/GBem'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(GBem)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
