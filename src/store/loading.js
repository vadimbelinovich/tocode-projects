export default {
  state: {
    loading: null
  },
  mutations: {
    changeLoading(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    changeLoading({ commit }, payload) {
      commit("changeLoading", payload);
    }
  },
  getters: {
    getLoading(state) {
      return state.loading;
    }
  }
};
