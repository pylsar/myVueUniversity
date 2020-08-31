<template>
    <div class="pageNotFound">
        <div 
            :class="{'pageNotFound__overlay' : popupIsShown}"
            @click="closePopup"    
        ></div>
        <h2>Ашипка 404</h2>
        <span @click="showPopup" class="pageNotFound--subtitle">Не понял, можно поподробнее?</span>
        <div class="pageNotFound__navigation">
            <router-link to="/"><a>Вернуться на главную</a></router-link>
            <router-link :to="-1"><a @click="$router.go(-1)">Вернуться назад</a></router-link>
        </div>
        <img class="pageNotFound--img" src="../assets/img/404.png" alt="ошибка">
        <div v-show="popupIsShown" class="pageNotFound__popup">
            <h3>Чтото пошло не так</h3>
            <p>Ошибка 404 или Not Found («не найдено») — стандартный код ответа HTTP о том, что клиент был в состоянии общаться с сервером, но сервер не может найти данные согласно запросу.</p>
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

    .pageNotFound {
        & h2{
            text-align: center;
            font-size: 50px;
            margin: 70px 0px 40px 0px;
        }
        &--subtitle {
            display: block;
            font-size: 32px;
            text-align: center;
            cursor: pointer;
            &:hover {
                text-shadow: 2px 2px 1px gray;
            }
        }
        &--img {
            width: 400px;
            position: absolute;
            bottom: 0px;
            right: 0px;
        }
        &__navigation{
            display: flex;
            flex-direction: column;
            margin-top: 30px;
            & a {
                display: block;
                padding: 5px 20px;
                font-size: 26px;
                color: black;
                &:hover {
                    opacity: .8;
                }
            }
        }
        &__popup{
            width: 60vw;
            height: 60vh;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: skyblue;
            text-align: center;
            & h3 {
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