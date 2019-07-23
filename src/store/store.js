
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count: 0,
  token: 'AAA'
}
const mutations = {
  loginSuccess (state, str) {
    state.token = str
  },
  addNumber (state) {
    state.count++
  },
  ruffNumber (state) {
    state.count--
  }

}
const store = new Vuex.Store({
  state: state,
  mutations: mutations
})

export default store
