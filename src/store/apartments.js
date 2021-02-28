export default {
  state: {
    currentNavOption: 1
  },
  getters: {
    currentNavOption (state) {
      return state.currentNavOption
    }
  },
  mutations: {
    changeCurrentNavOption (state, payload) {
      state.currentNavOption = payload
    }
  },
  actions: {
  }
}
