<template>
    <div class="university">
        <h1>{{university.title}}</h1>
        <div class="university__box">
            <div class="university__box__item university__box__left">
                <div class="university__box__item__folder" @click="showPopup">
                    <div class="university__box__item__folder__back">
                        <div class="university__box__item__folder__back__paper"></div>
                        <div class="university__box__item__folder__back__paper"></div>
                        <div class="university__box__item__folder__back__paper"></div>
                        <div class="university__box__item__folder__back__front"></div>
                        <div class="university__box__item__folder__back__front university__box__item__folder__back__right">Досье</div>
                    </div>
                </div>
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
        <div class="university__description">
            <p>{{university.longDescr}}</p>
        </div>
        <div v-if="popupShow" @click="closeUniversityPopup" class="university__darkLay"></div>
        <transition name="universityPopup" appear>
            <div class=university__popup v-show="popupShow">
                <h4 class="university__popup--title">{{university.title}}</h4>
                <div class="university__popup__body">
                    <p>Год основания: <strong>{{university.since}}</strong></p>
                    <p>Кем основан: <strong>{{university.father}}</strong></p>
                    <p>Позиция в рейтинге: <strong>{{university.topNumber}}</strong></p>
                </div>
                <span @click="closeUniversityPopup" class="university__popup--close">&times;</span>
            </div>
        </transition>
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
        height: 200px;
        &__item{
            width: 300px;
            height: 200px;
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
            &__folder{
                transition: all 0.2s ease-in;
                position: absolute;
                top:0;
                left:0;
                cursor: pointer;
                &__back{
                    position: relative;
                    width: 100px;
                    height: 80px;
                    background: orange;
                    border-radius: 0px 5px 5px 5px;
                    &::after {
                        position: absolute;
                        bottom: 98%; 
                        left: 0;
                        content: "";
                        width: 30px;
                        height: 10px;
                        background: red; 
                        border-radius: 5px 5px 0 0;
                    }
                    &__paper {
                        position: absolute;
                        bottom: 10%;
                        left: 50%;
                        transform: translate(-50%, 10%);
                        width: 70%;
                        height: 80%;
                        background: yellow;
                        border-radius: 5px;
                        transition: all 0.3s ease-in-out;
                        &:nth-child(2) {
                            background: blue;
                            width: 80%;
                            height: 70%;
                        }
                        &:nth-child(3) {
                            background: green;
                            width: 90%;
                            height: 60%;
                        }
                    } 
                    &__front {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background: red;
                        border-radius: 5px;
                        transform-origin: bottom;
                        transition: all 0.3s ease-in-out;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }   
                }
                &:hover {
                    transform: translateY(-8px);
                }
                &:hover .university__box__item__folder__back__paper {
                    transform: translate(-50%, 0%);
                }
                 &:hover .university__box__item__folder__back__front {
                    transform: skew(15deg) scaleY(0.6);
                }
                &:hover .university__box__item__folder__back__right {
                    transform: skew(-15deg) scaleY(0.6);
                }
            }
            &--img {
                border: 1px solid blue;
                display: flex;
                justify-content: center;
                align-items: center;
                    & img {
                    max-width: 100%;
                    max-height: 100%;
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
    &__description{
        padding: 10px;
    }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.universityPopup-enter-active,
.universityPopup-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.universityPopup-enter,
.universityPopup-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>