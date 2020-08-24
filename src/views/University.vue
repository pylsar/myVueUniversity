<template>
    <div class="university">
        <h1>University</h1>
            <h3>{{university.title}}</h3>
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
    },
    mounted(){
        this.GET_UNIVERSITIES_FROM_API()
    },       
       
    }
</script>

