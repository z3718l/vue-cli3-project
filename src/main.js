import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios'

import '@/assets/css/global.scss'

Vue.prototype.$a = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
