import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: process.env.VUE_APP_GOOGLE_BOOKS_API,
    books: [],
    orders: {
      items: [],
      totalPrice: 0
    },
    orderIndex: Number,
    isAlertActive: false,
    alertMessage: '',
    isLoading: false
  },
  mutations: {
    updateBooks(state, books) {
      state.books = []
      state.books = books
    },
    updateTotalPrice(state, totalPrice) {
      state.orders.totalPrice = totalPrice;
    },
    clearAllOrders(state) {
      state.orders.items = []
      state.orders.totalPrice = 0
    },
    showAlert(state, alertMessage) {
      state.alertMessage = alertMessage
      state.isAlertActive = true
    },
    hideAlert(state) {
      state.isAlertActive = false
      state.alertMessage = ''
    },
    startLoading(state) {
      state.isLoading = true
    },
    stopLoading(state) {
      state.isLoading = false
    }
  },
  actions: {
    fetchBooks({commit, state}, keyWord) {
      commit('startLoading')
      fetch(`${state.api_url}?q=${keyWord}`)
        .then(response => response.json())
        .then(json => commit('updateBooks', json.items))
        .then(commit('stopLoading'))
    },
    calcPrices({ commit, state }) {
      let totalPrice = 0;
      state.orders.items.forEach(order => {
        if (order.saleInfo.saleability == "NOT_FOR_SALE") {
          totalPrice += 20;
        } else {
          totalPrice += order.saleInfo.retailPrice.amount || 0;
        }
        commit('updateTotalPrice', totalPrice);
      });
    },
    completeOrder({ commit, state }) {
      router.push('/')
      const alertMessage = `Your purchase of ${state.orders.totalPrice} UAH is complete!`
      commit('showAlert', alertMessage)
      setTimeout(() => {
        commit('hideAlert')
      }, 3000);
      commit('clearAllOrders')
    }
  }
})
