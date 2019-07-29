import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // refresh.vue
  beforeRouteEnter (to, from, next) {
    console.log('1111111')
    next(vm => {
      vm.$router.replace(from.fullPath)
    })
  },
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      meta: {
        keepAlive: false // true 表示需要使用缓存 false表示不需要被缓存
      }
    }, {
      path: '/refresh',
      name: 'refresh',
      component: resolve => require(['@/components/refresh'], resolve),
      meta: {
        keepAlive: true // true 表示需要使用缓存 false表示不需要被缓存
      }
    }
  ]
})
