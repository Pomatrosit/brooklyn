import axios from 'axios'
const API_URL = 'http://cy83453.tmweb.ru'

export default {
  state: {
    apartmentList: []
  },
  getters: {
    apartmentList (state) {
      return state.apartmentList
    }
  },
  mutations: {
    setApartmentList (state, payload) {
      state.apartmentList = payload
    }
  },
  actions: {
    async loadData ({ commit }) {
      try {
        const response = await axios.get(`${API_URL}/api/apartments`)
        commit('setApartmentList', response.data.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
