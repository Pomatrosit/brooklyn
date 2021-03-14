export default {
  state: {
    isModalOpen: false,
    modalType: 1
  },
  getters: {
    isModalOpen (state) {
      return state.isModalOpen
    },
    modalType (state) {
      return state.modalType
    }
  },
  mutations: {
    toggleModal (state, id) {
      state.modalType = id
      state.isModalOpen = !state.isModalOpen
    }
  },
  actions: {
  }
}
