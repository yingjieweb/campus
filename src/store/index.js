import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {},
    isLogin: false
  },
  mutations: {
    getUserInfo(state, currentUser) {
      state.currentUser = currentUser
    },
    // getUserPermission(state, permission) {
    //   state.permission = permission !== 'admin'
    // },
    changeLoginStatus(state, status) {
      state.isLogin = status
    }
  },
  actions: {},
  modules: {}
})
