<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Book cover</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody v-for="(order, index) in this.$store.state.orders.items" :key="index">
      <tr>
        <th scope="row">{{index}}</th>
        <td><img :src="order.volumeInfo.imageLinks.smallThumbnail" alt=""></td>
        <td>{{order.volumeInfo.description || 'none'}}</td>
        <td>{{order.saleInfo.retailPrice ? `${order.saleInfo.retailPrice.amount} UAH` : '0'}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {};
</script>

<style>
</style>
