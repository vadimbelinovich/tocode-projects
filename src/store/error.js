export default {
  state: {
    error: null
  },
  mutations: {
    changeError(state, payload) {
      state.loading = payload;
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