<template>
  <div>
    <span class="mr-sm-5"> {{calcOrders}} </span>
    <router-link  to="/cart" class="btn btn-success" id="cart-button">
      <svg
        id="i-cart"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="1.7em"
        height="1.7em"
        fill="none"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2"></path>
        <circle cx="25" cy="27" r="2"></circle>
        <circle cx="12" cy="27" r="2"></circle>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    calcOrders() {
      return `Added ${this.$store.state.orders.items.length} items that cost ${this.$store.state.orders.totalPrice}UAH total`
    }
  }
};
</script>

<style lang="scss" scoped>
#i-cart {
  vertical-align: middle;
  color: #fff;
}
</style>
