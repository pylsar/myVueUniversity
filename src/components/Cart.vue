<template>
    <div class="cart">
        <div class="cart__overlay"></div>
        <div class="cart__box">
            корзина
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Cart',
       
    }
</script>
<style lang="scss">
    .cart{
        &__box{
            width: 600px;
            height: 600px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
        }
        &__overlay {
            background: black;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            opacity: .6;
        }
    }
</style>