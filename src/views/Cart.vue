<template>
    <div class='container'>
        <p>Hi!</p>
        <Orders />
        <p class='text-right'>Total price: {{this.$store.state.orders.totalPrice}} UAH</p>
        <button @click="completeOrder" type="button" class="btn btn-primary col-sm-12 mb-5">Order</button>
    </div>
</template>

<script>
import Orders from '../components/Orders'
import { mapActions } from 'vuex'

export default {
    components: {
        Orders
    },
    methods: {
        ...mapActions(['completeOrder'])
    }

}
</script>

<style scoped>

</style>
