import Vue from 'vue'
import Vuex from 'vuex'
import VueClock from '@dangvanthanh/vue-clock';
import axios from '../apis/server'

Vue.use(Vuex)
Vue.use(VueClock);
export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {
    SET_IS_LOGIN: function(state, payload = false){
      state.isLogin = payload
    },
  },
  actions: {
    login: function(_, payload){
      return axios({
        method: "POST",
        url: "/authentication/login",
        data: payload
      })
    }
  },
  modules: {
  }
})
