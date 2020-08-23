import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

// 元件全域註冊
Vue.component('Loading', Loading)

// 套件加入 Vue 的 instance
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
