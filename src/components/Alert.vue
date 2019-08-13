<template>
    <div class='alert'>
        <p>{{this.$store.state.alertMessage}}</p>
    </div>
</template>

<style lang="scss" scoped>
    .alert {
        background: #218838;
        width: 30%;
        position: fixed;
        bottom: 1%;
        right: 2%;
        p {
            color: #fff;
            padding: 0;
            margin: 0;
        }
    }
</style>
