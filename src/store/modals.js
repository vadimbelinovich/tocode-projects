export default {
  state: {
    modalView: null
  },
  mutations: {
    setModalView(state, payload) {
      state.modalView = payload;
    }
  },
  actions: {
    setModalView({ commit }, payload) {
      commit("setModalView", payload);
    }
  },
  getters: {
    getModalView(state) {
      return state.modalView;
    }
  }
};
