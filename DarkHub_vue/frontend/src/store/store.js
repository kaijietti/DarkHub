import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    loginStatus: false,
  },
  mutations: {
    login(state,username){
      state.username = username;
      state.loginStatus = true;
    },
    logout(state) {
      state.username = "";
      state.loginStatus = false;
    }
  }
})