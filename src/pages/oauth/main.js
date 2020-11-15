// Oauth 认证的回跳页面，例如 http://elvinn.cn/memo-vue/oauth.html?from=github
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
})
