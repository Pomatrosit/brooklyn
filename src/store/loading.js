export default {
  state: {
    isLoading: true
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    }
  },
  mutations: {
    showLoader (state) {
      state.isLoading = true
    },
    hideLoader (state) {
      state.isLoading = false
    }
  },
  actions: {
  }
}
