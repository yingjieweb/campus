import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    permission: ''
  },
  mutations: {
    getUserInfo(state, username) {
      state.username = username
    },
    getUserPermission(state, permission) {
      state.permission = permission !== 'admin'
    }
  },
  actions: {},
  modules: {}
})
