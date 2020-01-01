import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
var {
  state,
  getters,
  actions,
  mutations}=user;
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    user
  }
})
