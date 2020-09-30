<template>
    <div class="university">
        <h1>{{university.title}}</h1>
        <div class="university__box">
            <div class="university__box__item university__box__left">
                <div class="university__box__item--summary" @click="showPopup">?</div>
                <div class="university__box__item__link">
                    <router-link to='/excursion'>Заказать экскурсию</router-link>
                </div>
                <div class="university__box__item__link">
                    <router-link to='/comments'>Комментарии</router-link>
                </div>
                <div class="university__box__item__link">
                    <router-link to='/gallary'>Галерея</router-link>
                </div>
            </div>
            <div class="university__box__item">
                <div class="university__box__item--img">
                <img  :src="require('../assets/img/' + university.img)" alt="university.title" />
                </div>
            </div>
        </div>
        <p>{{university.longDescr}}</p>
        <div v-if="popupShow" @click="closeUniversityPopup" class="university__darkLay"></div>
        <div class=university__popup v-show="popupShow">
            <h4 class="university__popup--title">{{university.title}}</h4>
            <div class="university__popup__body">
                <p>Год основания: <strong>{{university.since}}</strong></p>
                <p>Кем основан: <strong>{{university.father}}</strong></p>
                <p>Позиция в рейтинге: <strong>{{university.topNumber}}</strong></p>
            </div>
            
            <span @click="closeUniversityPopup" class="university__popup--close">&times;</span>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'University',
        data() {
            return {
                popupShow: false
            };
        },
       computed:{
        ...mapGetters([
            'UNIVERSITIES'
        ]),
        university() {
                //необходимо привести к числу
            return this.$store.getters.universityById(+this.$route.params.id);
            }
        },
        methods:{
            ...mapActions([
                'GET_UNIVERSITIES_FROM_API',
            ]),
            showPopup(){
                this.popupShow = !this.popupShow
            },
            closeUniversityPopup(){
                this.popupShow = false;
            }
        },
        mounted(){
            this.GET_UNIVERSITIES_FROM_API()
        },       
       
    }
</script>

<style lang="scss">
    .university{
        & h1 {
            text-align: center;
            margin-top: 20px;
        }
        &__box {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            border:1px solid pink;
            &__item{
                width: 50%;
                display: flex;
                justify-content: center;
                &__link{
                    margin-bottom: 10px;
                    width: 200px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: skyblue;
                    border: 1px solid orange;
                    border-radius: 5px;
                }
                &--summary{
                    position: absolute;
                    top: 0;
                    left: 0;
                    cursor: pointer;
                    background: lightgray;
                    padding: 10px;
                    font-weight: bold;
                }
                &--img {
                    border: 1px solid blue;
                        & img {
                        max-width: 100%;
                    }
                }    
            }
            &__left {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                width: 50%;
            }
        }
        &__popup{
            width: 50vw;
            height: 50vh;
            background: lightgray;
            position:absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            &--title {
                text-align: center;
                margin: 20px 0px;
            }
            &__body {
                display: flex;
                flex-direction: column;
                & p {
                    margin-bottom: 20px;
                    padding-left: 10px;
                }
            }
            &--close {
                position: absolute;
                top: 0px;
                right: 20px;
                font-size: 50px;
                font-weight: bold;
                cursor: pointer;
                &:hover {
                    color: green;
                }
            }
        }
        &__darkLay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: black;
            opacity: .5;
        }
        
    }
</style>