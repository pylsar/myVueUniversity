<template>
    <div class="pageNotFound">
        <div 
            :class="{'pageNotFound__overlay' : popupIsShown}"
            @click="closePopup"    
        ></div>
        <h3>Page Not Found</h3>
        <span @click="showPopup">More Details</span>
        <div v-show="popupIsShown" class="pageNotFound__popup">
            <h4>Чтото пошло не так</h4>
            <span>А страницы то не сущесвует</span>
            <span class="pageNotFound__popup--close" @click="closePopup">&times;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageNotFound',
        data(){
            return{
                popupIsShown: false
            }
        },
        methods:{
            showPopup(){
                this.popupIsShown = true;
            },
            closePopup(){
                this.popupIsShown = false;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .pageNotFound{
        &__popup{
            width: 60vw;
            height: 60vh;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: skyblue;
            text-align: center;
            & h4 {
                margin-top: 20px;
                margin-bottom: 40px;
            }
            &--close {
                font-size: 40px;
                position: absolute;
                top: 5px;
                right: 10px;
                &:hover{
                    transform: rotate(180deg);
                    transition-duration: .5s;
                    cursor: pointer;
                }
            }
        }
        &__overlay {
            width: 100vw;
            height: 100vh;
            background-color: black;
            position: absolute;
            top: 0;
            left: 0;
            opacity: .7;
        }
    }
</style>