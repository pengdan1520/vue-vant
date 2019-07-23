import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import refresh from '@/components/refresh'

Vue.use(Router)

export default new Router({
  // refresh.vue
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$router.replace(from.fullPath)
    })
  },
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/refresh',
      name: 'refresh',
      component: refresh
    }
  ]
})
