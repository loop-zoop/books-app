import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: process.env.VUE_APP_GOOGLE_BOOKS_API,
    books: [],
    orders: {
      items: [],
      totalPrice: 0
    },
    orderIndex: Number
  },
  mutations: {
    fetchBooks(state, key_word) {
      state.books = []
      fetch(`${state.api_url}?q=${key_word}`)
      .then(response => response.json())
      .then(json => state.books = json.items)
    },
    updateTotalPrice(state, totalPrice) {
      state.orders.totalPrice = totalPrice;
    }
  },
  actions: {
    calcPrices({commit, state}) {
      let totalPrice = 0;
      state.orders.items.forEach(order => {
        if(order.saleInfo.saleability == "NOT_FOR_SALE") {
          totalPrice += 0;
        } else {
          totalPrice += order.saleInfo.retailPrice.amount || 0;
        }
        commit('updateTotalPrice', totalPrice);
      });
    }
  }
})
