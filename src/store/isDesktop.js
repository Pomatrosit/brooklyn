export default {
  state: {
    isDesktop: true
  },
  getters: {
    isDesktop (state) {
      return state.isDesktop
    }
  },
  mutations: {
    setDesktop (state, bool) {
      state.isDesktop = bool
    }
  },
  actions: {
  }
}
