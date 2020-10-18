<template>
    <div class="cart">
        <div @click="closeCart" class="cart__overlay"></div>
        <div class="cart__box">
            корзина
            <span @click="closeCart" class="cart__box--close">&times;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Cart',
        methods: {
            closeCart(){
                this.$emit('closeCart');
            }
        }
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
            &--close {
                font-size: 40px;
                line-height: 1;
                position: absolute;
                top: 5px;
                right: 10px;
                cursor: pointer;
            }
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