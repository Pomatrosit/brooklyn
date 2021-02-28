import Vue from 'vue'
import Vuex from 'vuex'
import homepage from './homepage'
import apartments from './apartments'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    homepage,
    apartments
  }
})
