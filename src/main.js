import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import jquery from 'jquery'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'//导入样式

Vue.config.productionTip = false

Vue.use(elementUI)

axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
Vue.prototype.$ = jquery

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
