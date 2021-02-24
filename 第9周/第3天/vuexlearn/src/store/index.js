import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increament(state) {
      state.count++
    },
    decreament(state) {
      state.count--
    }
  }
})

export default store