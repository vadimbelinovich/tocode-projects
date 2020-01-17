import axios from 'axios'

export default {
  state: {
    search: '',
    repos: null
  },
  mutations: {
    setRepos(state, payload) {
      state.repos = payload;
    },
  },
  actions: {
    setRepos({dispatch, commit}){
      axios
        .get(`https://api.github.com/users/${this.search}/repos`)
        .then(res => {
          this.changeError(null)
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
    getSearch(state) {
      return state.search
    },
    getRepos(state) {
      return state.repos
    }
  }
};
