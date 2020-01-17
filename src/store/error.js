export default {
  state: {
    error: null
  },
  mutations: {
    changeError(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    changeError({ commit }, payload) {
      commit("changeError", payload);
    }
  },
  getters: {
    getError(state) {
      return state.error;
    }
  }
};