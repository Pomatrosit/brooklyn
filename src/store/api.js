import axios from 'axios'
import { loadImages } from '@/utils/utils'

const API_URL = 'http://bruklyn.tmweb.ru'

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

function getAdvantages () {
  return axios.get(`${API_URL}/api/advantages`)
}

function getAll () {
  return axios.get(`${API_URL}/api/all`)
}

function getTitles () {
  return axios.get(`${API_URL}/api/titles`)
}

export default {
  state: {
    apartmentList: [],
    gallery: [],
    news: [],
    progressItems: [],
    advantages: [],
    allInfo: [],
    titles: [],
    isApiLoading: true
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
    },
    advantages (state) {
      return state.advantages
    },
    allInfo (state) {
      return state.allInfo
    },
    titles (state) {
      return state.titles
    },
    isApiLoading (state) {
      return state.isApiLoading
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
    },
    setAdvantages (state, payload) {
      state.advantages = payload
    },
    setAllInfo (state, payload) {
      state.allInfo = payload
    },
    setTitles (state, payload) {
      state.titles = payload
    },
    setApiLoadingFalse (state) {
      state.isApiLoading = false
    }
  },
  actions: {
    loadData ({ commit }) {
      Promise.all([getApartments(), getGallery(), getNews(), getProgress(), getAdvantages(), getAll(), getTitles()])
        .then(function (results) {
          commit('setApartmentList', results[0].data.data)
          commit('setGallery', results[1].data.data)
          commit('setNews', results[2].data.data)
          commit('setProgressItems', results[3].data.data)
          commit('setAdvantages', results[4].data.data)
          commit('setAllInfo', results[5].data.data)
          commit('setTitles', results[6].data.data)
          commit('setApiLoadingFalse')
          console.log('api was loaded')
          // прекеширование всех изображений
          const imgArr = []
          results[5].data.data[0].sections.forEach(el => imgArr.push(el.path))
          results[0].data.data.forEach(el => imgArr.push(el.image.path))
          results[1].data.data.forEach(el => {
            imgArr.push(el.primary_image.path)
            imgArr.push(el.icon.path)
            el.secondary_image.forEach(el => imgArr.push(el.path))
          })
          imgArr.push(results[3].data.data[0].image[0].path)
          imgArr.push(results[3].data.data[1].image[0].path)
          imgArr.push(results[3].data.data[2].image[0].path)
          results[2].data.data.forEach(el => imgArr.push(el.image[0].path))
          loadImages(imgArr)
        })
    }
  }
}
