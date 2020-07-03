import Vue from 'vue'
import App from './App.vue'
import store from './store'
import initElementUI from './element'
import { listenRefreshAll } from '../../tools/globalEvent'

Vue.config.productionTip = false

initElementUI()
listenRefreshAll()

new Vue({
  store,
  el: '#app',
  render: h => h(App),
})
