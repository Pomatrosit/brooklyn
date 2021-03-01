export default {
  state: {
    currentNavOption: 1,
    currentScreen: 1
  },
  getters: {
    currentNavOption (state) {
      return state.currentNavOption
    },
    currentScreen (state) {
      return state.currentScreen
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
