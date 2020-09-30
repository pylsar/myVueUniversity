<template>
    <div class="sidebar">
        <ul>
            <li 
            v-for="(university, index) in UNIVERSITIES" 
            :key="university.id"
            class="sidebar__items"
            @click="chooseActiveLink(index)"
            :class="[choosenLink  === index ? 'sidebar__items--active' : '']"
            >
            <router-link 
            :to="'/university/' + university.id" 
            tag="a"
            class="sidebar__items--link"
            >
            {{university.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
    export default {

    name: 'Sidebar',
    data() {
        return {
            isActive : true,
            choosenLink: null
        };
    },
    computed:{
    ...mapGetters([
        'UNIVERSITIES'
    ]),
    },
    methods:{
        ...mapActions([
            'GET_UNIVERSITIES_FROM_API',
        ]),
        chooseActiveLink(index){
            this.choosenLink = index;
        }
    },
    mounted(){
        this.GET_UNIVERSITIES_FROM_API()
    },

    }
</script>

<style lang="scss">
    .sidebar {
        width: 200px;
        background: violet;
        height: calc(100vh - 70px);
        &__items{
            width: 100%;
            &--link{
                color: black;
                padding: 5px 10px;
                display: block;
                font-size: 18px;
                font-weight: bold;
                &:hover{
                    opacity: .7;
                    background: grey;
                }
            }
            &--active {
                background: lightgray;
            }
        }
    }
</style>