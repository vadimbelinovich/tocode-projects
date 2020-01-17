import loadMore from "../assets/js/loadMore.js";
import axios from 'axios'

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
    },
    getMessagesEmpty(state) {
      state.messages = [];
      state.messagesMain = [];
    },
    pushMessages(state, payload) {
      state.messages.push(payload)
    },
    pushMessagesMain(state, payload) {
      state.messagesMain.push(payload)
    },
  },
  actions: {
    getNotify({ dispatch, commit }) {
      dispatch('changeLoading', true)
      axios
        .get('https://tocode.ru/static/c/vue-pro/notifyApi.php')
        .then(response => {
          let res = response.data.notify;
          commit('getMessagesEmpty')
          for (let i = 0; i < res.length; i++) {
            if (res[i].main) commit('pushMessagesMain', res[i])
            else commit('pushMessages', res[i])
          }
        })
        .catch(error => {
          console.log(error)
          dispatch('changeError', 'Error: Network Error')
        })
        .finally( () => (dispatch('changeLoading', false)))
    },
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
