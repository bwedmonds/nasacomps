import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _api = axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod?api_key=eskBl9APR5dBO9dYptSuggi1kwMhyeVQbmigtwep"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeImage: {},
    results: []
  },
  mutations: {
    setResults(state, data) {
      state.results = data
    },
    setActiveImage(state, data) {
      state.activeImage = data
    }
  },
  actions: {
    searchApi({ commit, dispatch }) {
      _api.get("")
        .then(res => {
          let data = res.data.results
          commit('setResults', data)
        })
    },
    setActiveImage({ commit, dispatch }, image) {
      commit('setActiveImage', image)
    }
  }
})
