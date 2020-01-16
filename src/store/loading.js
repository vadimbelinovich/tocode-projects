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
    changeLoading({ dispatch }, payload) {
      dispatch("changeLoading", payload);
    }
  },
  getters: {
    getLoading(state) {
      return state.loading;
    }
  }
};
