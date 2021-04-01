export default {
  state: {
    homeSlide: 1,
    LAST_HOME_SLIDE: 5,
    isHomePageShowed: false,
    isWheelAvailable: true
  },
  getters: {
    homeSlide (state) {
      return state.homeSlide
    },
    lastHomeSlide (state) {
      return state.LAST_HOME_SLIDE
    },
    progress (state) {
      return (state.homeSlide - 1) * 25
    },
    isHomePageShowed (state) {
      return state.isHomePageShowed
    },
    isWheelAvailable (state) {
      return state.isWheelAvailable
    }
  },
  mutations: {
    slideUp (state) {
      if (state.homeSlide > 1) state.homeSlide--
    },
    slideDown (state) {
      if (state.homeSlide < state.LAST_HOME_SLIDE) state.homeSlide++
    },
    setStartSlide (state) {
      state.homeSlide = 1
    },
    setHomePageShowed (state) {
      state.isHomePageShowed = true
    },
    stopWheel (state) {
      state.isWheelAvailable = false
    },
    unstopWheel (state) {
      state.isWheelAvailable = true
    }
  },
  actions: {
    setWheelUnavailable ({ commit }) {
      commit('stopWheel')
      setTimeout(() => {
        commit('unstopWheel')
      }, 3000)
    }
  }
}
