import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testStr: 'This is a book.'
  },
  mutations: {
    SET_TEST_STR: (state, str) => {
      state.testStr = str
    }
  },
  getters: {
    testStr: state => state.testStr
  }
})
