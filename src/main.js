import Vue from 'vue'
import App from './App.vue'
import store from './store'
import initElementUI from './tools/element'

Vue.config.productionTip = false

initElementUI()

new Vue({
  store,
  el: '#app',
  render: h => h(App),
})
