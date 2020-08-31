<template>
    <div class="university">
        <h1>{{university.title}}</h1>
        <div class="university__box">
            <span @click="excursionRedirect">Заказать экскурсию</span>
            <img class="university__box--img" :src="require('../assets/img/' + university.img)" alt="university.title" />
            <span>Галерея</span>
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
            
            &--img {
            max-width: 400px;
            display: block;
            margin: 20px auto;
            }
        }
        
    }
</style>