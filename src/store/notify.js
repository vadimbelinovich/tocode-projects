import loadMore from "../assets/js/loadMore.js";

export default {
  state: {
    messages: [],
    messagesMain: []
  },
  mutations: {
    setMessage(state, payload) {
      state.messages = payload;
    },
    setMessageMain(state, payload) {
      state.messagesMain = payload;
    },
    loadMessages(state, payload) {
      state.messagesMain = [...state.messagesMain, ...payload];
    }
  },
  actions: {
    setMessage({ commit }, payload) {
      commit("setMessage", payload);
    },
    setMessageMain({ commit }, payload) {
      commit("setMessageMain", payload);
    },
    loadMessages({ commit, getters }) {
      let res = getters.getMessageFilter;
      commit("loadMessages", loadMore(res));
    },
    getNotify({ dispatch }) {
      dispatch('changeLoading', true)
      axios
        .get('https://tocode.ru/static/c/vue-pro/notifyApi.php')
          .then(response => {
            let res = response.data.notify;
            state.messages = [];
            state.messagesMain = [];
            for (let i = 0; i < res.length; i++) {
              if (res[i].main) state.messagesMain.push(res[i])
              else state.messages.push(res[i])
            }
          })
          .catch(error => {
            console.log(error)
            dispatch('changeError', 'Error: Network Error')
          })
          .finally( () => (dispatch('changeLoading', false)))
    }
  },
  getters: {
    getMessage(state) {
      return state.messages;
    },
    getMessageFilter(state) {
      return state.messages.filter(mes => {
        return mes.main === false;
      });
    },
    getMessageMain(state) {
      return state.messagesMain;
    }
  }
};
