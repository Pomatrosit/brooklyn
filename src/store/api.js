import axios from 'axios'
const API_URL = 'http://cy83453.tmweb.ru'

function getApartments () {
  return axios.get(`${API_URL}/api/apartments`)
}

function getGallery () {
  return axios.get(`${API_URL}/api/gallery`)
}

function getNews () {
  return axios.get(`${API_URL}/api/news`)
}

function getProgress () {
  return axios.get(`${API_URL}/api/progress`)
}

export default {
  state: {
    apartmentList: [],
    gallery: [],
    news: [],
    progressItems: []
  },
  getters: {
    apartmentList (state) {
      return state.apartmentList
    },
    gallery (state) {
      return state.gallery
    },
    news (state) {
      return state.news.reverse()
    },
    progressItems (state) {
      return state.progressItems
    }
  },
  mutations: {
    setApartmentList (state, payload) {
      state.apartmentList = payload
    },
    setGallery (state, payload) {
      state.gallery = payload
    },
    setNews (state, payload) {
      state.news = payload
    },
    setProgressItems (state, payload) {
      state.progressItems = payload
    }
  },
  actions: {
    loadData ({ commit }) {
      Promise.all([getApartments(), getGallery(), getNews(), getProgress()])
        .then(function (results) {
          commit('setApartmentList', results[0].data.data)
          commit('setGallery', results[1].data.data)
          commit('setNews', results[2].data.data)
          commit('setProgressItems', results[3].data.data)
        })
    }
  }
}
