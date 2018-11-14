// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//normalize.css
import "normalize.css/normalize.css";
//rty-vue-components
import 'rty-vue-components/dist/rty-vue-components.min.css'
import { rtyButton, rtyProgress } from 'rty-vue-components'
Vue.component('rtyButton',rtyButton)
Vue.component('rtyProgress',rtyProgress)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
