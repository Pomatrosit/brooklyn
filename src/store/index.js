import Vue from 'vue'
import Vuex from 'vuex'
import homepage from './homepage'
import modal from './modal'
import loading from './loading'
import isDesktop from './isDesktop'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    homepage,
    modal,
    loading,
    isDesktop,
    api
  }
})
