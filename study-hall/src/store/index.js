import Vue from 'vue'
import Vuex from 'vuex'
import VueClock from '@dangvanthanh/vue-clock';
import axios from '../apis/server'

Vue.use(Vuex)
Vue.use(VueClock);
export default new Vuex.Store({
  state: {
    isLogin: false,
    threads: []
  },
  mutations: {
    SET_IS_LOGIN: function(state, payload = false){
      state.isLogin = payload
    },
    SET_THREAD: function(state, payload){
      state.threads = payload
    },
  },
  actions: {
    login: function(_, payload){
      return axios({
        method: "POST",
        url: "/authentication/login",
        data: payload
      })
    },
    register: function(_, payload){
      return axios({
        method: "POST",
        url: "/authentication/register",
        data: payload
      })
    },
    showQuote: function (){
      return axios({
        method: "GET",
        url: "/quote",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
    },
    getForum: function (context){
      axios({
        method: "GET",
        url: "/thread",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
      .then(({ data }) => {
        (data);
        context.commit("SET_THREAD", data)
      })
      .catch((err) => {
        (err);
      })
    },
    createForm: function (_, payload){
     return axios({
        method: "POST",
        url: "/thread",
        headers: {
          access_token: localStorage.getItem("access_token")
        },
        data: payload
      })
    },
  },
  modules: {
  }
})
