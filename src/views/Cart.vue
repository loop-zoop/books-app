<template>
    <div class='container'>
        <h2 class='mb-5'>Your orders:</h2>
        <Orders v-if='!isCartEmpty' />
        <div v-else>
            <p>You have no orders</p>
            <button class='btn btn btn-outline-info' type='button' @click='goBackToHome'>Go back to Home Page</button>
        </div>
        <p class='text-right'>Total price: {{this.$store.state.orders.totalPrice}} UAH</p>
        <button @click="completeOrder" type="button" class="btn btn-primary col-sm-12 mb-5" :disabled="isCartEmpty">Order</button>
    </div>
</template>

<script>
import Orders from '../components/Orders'
import router from '../router'
import { mapActions } from 'vuex'

export default {
    components: {
        Orders
    },
    computed: {
        isCartEmpty() {
            if (this.$store.state.orders.items.length === 0) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        ...mapActions(['completeOrder']),
        goBackToHome() {
            router.push('/')
        }
    }

}
</script>

<style scoped>

</style>
