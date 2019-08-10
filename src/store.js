import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: process.env.VUE_APP_GOOGLE_BOOKS_API,
    books: []
  },
  mutations: {
    fetchBooks(state, key_word) {
      state.books = []
      fetch(`${state.api_url}?q=${key_word}`)
      .then(response => response.json())
      .then(json => state.books = json.items)
    }
  },
  actions: {

  }
})
