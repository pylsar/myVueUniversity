<template>
    <div class="sidebar">
        <ul>
            <li 
            v-for="university in UNIVERSITIES" 
            :key="university.id"
            class="sidebar--items"
            >
            <router-link :to="'/university/' + university.id" tag="a">{{university.title}}</router-link>
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
        &--items{
            padding: 0px 10px;
            margin-top: 10px;
            font-size: 18px;
            font-weight: bold;
            & a{
                color: black;
                &:hover{
                    opacity: .7;
                }
            }
        }
    }
</style>