import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {},
    permission: '',
    isLogin: false
  },
  mutations: {
    getUserInfo(state, currentUser) {
      state.currentUser = currentUser
      state.permission = currentUser.permission !== 'admin'
    },
    changeLoginStatus(state, status) {
      state.isLogin = status
    }
  },
  actions: {},
  modules: {}
})
