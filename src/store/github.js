import axios from 'axios'

export default {
  state: {
    repos: null
  },
  mutations: {
    setRepos(state, payload) {
      state.repos = payload;
    }
  },
  actions: {
    setRepos({dispatch, commit}){
      axios
        .get(`https://api.github.com/users/${state.search}/repos`)
        .then(res => {
          dispatch('changeError', null)
          commit('setRepos', res.data)
        })
        .catch(err => {
          console.log(err)
          dispatch('changeError', 'Can`t find this user')
          commit('setRepos', null)
        })
    }
  },
  getters: {
    getRepos(state) {
      return state.repos
    }
  }
};
