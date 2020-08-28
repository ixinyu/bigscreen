import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/styles/base.scss'
// import 'lib-flexible'
import http from './utils/http.js'
import router from '@/router/index'
import VueWechatTitle from 'vue-wechat-title'
import echarts from 'echarts'



Vue.use(VueWechatTitle)
Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$echarts = echarts
Vue.use(Vant)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
