<template>
    <div class="university">
        <h1>{{university.title}}</h1>
        <div class="university__box">
            <div class="university__box__excursion">
                <span @click="excursionRedirect">Заказать экскурсию</span>
            </div>
            <div class="university__box__img">
                <img  :src="require('../assets/img/' + university.img)" alt="university.title" />
            </div>
            <div class="university__box__gallery">
                <div class="university__box__gallery__items">
                    <img :src="require('../assets/img/' + university.gallary1)" alt="university.title" />
                    <img :src="require('../assets/img/' + university.gallary2)" alt="university.title" />
                </div>
                <div class="university__box__gallery__items">
                    <img :src="require('../assets/img/' + university.gallary3)" alt="university.title" />
                    <img :src="require('../assets/img/' + university.gallary4)" alt="university.title" />
                </div>
            </div>
        </div>
        <p>{{university.longDescr}}</p>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'University',
        data() {
            return {
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
            excursionRedirect(){
                this.$router.push({ name: 'Excursion' })
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
            display: flex;
            align-items: center;
            justify-content: center;
                border:1px solid pink;
            &__excursion, &__img, &__gallery{
                width: 33%;
                display: flex;
                justify-content: center;
            }
            &__excursion{
                border: 1px solid orange;
            }
            &__img {
                border: 1px solid blue;
                & img {
                max-width: 100%;
                }
            }
            &__gallery {
                display: flex;
                flex-direction: column;
                border: 1px solid red;
                &__items{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid green;
                    & img {
                        max-width: 50%;
                        cursor: pointer;    
                    }    
                }
                
            }
        }
        
    }
</style>