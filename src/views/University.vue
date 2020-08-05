<template>
    <div class="university">
        <h1>University</h1>
            <h3>{{universities.title}}</h3>
            <p>{{universities.longDescr}}</p>
    </div>
</template>
<script>

// import {mapGetters} from 'vuex'
    export default {
        name: 'University',
        data() {
            return {
            // universities: null
            id: this.$route.params.id,
            universities: {}
            };
        },
        //  computed:{
        // ...mapGetters([
        //     'UNIVERSITIES'
        // ]),
        created(){
        this.$axios.get('http://localhost:3001/universities/' + this.id)
            .then(response => (this.universities = response.data))
            .then(response => (console.log(response)));
        },
    }
</script>

