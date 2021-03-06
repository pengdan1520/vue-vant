// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// featrue
import Vue from 'vue';
import App from './App';
import router from './router';
// import Vant from 'vant'
// import 'vant/lib/index.css'
import api from './servers/api';

import mandMobile from 'mand-mobile';
import 'mand-mobile/lib/mand-mobile.css';

import { store } from './store/store.js';
Vue.use(mandMobile);
Vue.prototype.$api = api;// 将api挂载到vue的原型上
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
