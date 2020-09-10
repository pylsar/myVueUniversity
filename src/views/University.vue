<template>
    <div class="university">
        <h1>{{university.title}}</h1>
        <div class="university__box">
            <div class="university__box__item university__box__left">
                <div class="university__box__item--summary" @click="showPopup">click</div>
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
        <div v-show="popupShow">{{university.title}}</div>
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
            // excursionRedirect(){
            //     this.$router.push({ name: 'Excursion' })
            // },
            showPopup(){
                this.popupShow = !this.popupShow
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
        
    }
</style>