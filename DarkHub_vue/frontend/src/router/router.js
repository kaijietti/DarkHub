import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import sign from '@/components/sign.vue'


export default new Router({
  routes: [
    {
      path: '/',
      name: 'sign',
      component: sign
    },
  ]
})