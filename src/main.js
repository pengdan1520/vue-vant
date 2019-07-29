// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// featrue
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import api from './servers/api'
import 'vant/lib/index.css'
import { store } from './store/store.js'
Vue.use(Vant)
Vue.prototype.$api = api // 将api挂载到vue的原型上复制代码
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
