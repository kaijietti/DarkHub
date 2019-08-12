import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'

import store from './store/store'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

Vue.use(axios)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
