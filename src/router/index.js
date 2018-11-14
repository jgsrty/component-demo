import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/index'
import rtyButton from '@/components/rtyButton'
import rtyProgress from '@/components/rtyProgress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
      path: '/rtyProgress',
      name: 'rtyProgress',
      component: rtyProgress
    },
    {
      path: '/rtyButton',
      name: 'rtyButton',
      component: rtyButton
    }
  ]
})
