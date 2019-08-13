import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import sign from '@/components/sign.vue'
import index from '@/components/index.vue'
import contactus from '@/components/contactus.vue'
import information from '@/components/information.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sign',
      component: sign
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: contactus
    },
    {
      path: '/infomation',
      name: 'infomation',
      component: information,
    },
    {
      path: 'http://localhost:8080',
      name: 'post',
    },
    {
      path: 'http://localhost:8080',
      name: 'get',
    },
    {
      path: 'http://localhost:8080',
      name: 'put',
    },
    {
      path: 'http://localhost:8080',
      name: 'delete',
    },
  ]
})