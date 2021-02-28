export default {
  state: {
    homeSlide: 1,
    LAST_HOME_SLIDE: 5
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
    }
  },
  actions: {
  }
}
