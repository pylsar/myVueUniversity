<template>
    <div class="sidebar">
        <ul>
            <li v-for="university in universities" 
            :key="university.id"
            >
            <router-link :to="{name: 'University', params: {id: university.id }}">{{university.title}}</router-link> 
            <!-- <router-link :to="'/university/' + university.id">{{university.title}}</router-link>  -->
            </li>
        </ul>
    </div>
</template>
<script>

    export default {

        name: 'Sidebar',
        data() {
            return {
            // id: this.$route.params.id,
            universities: null
            };
        },
        mounted(){
        this.$axios.get('http://localhost:3001/universities')
            .then(response => (this.universities = response.data));
            // .then(response => (console.log(response)));
        },

    }
</script>

<style lang="scss">
    .sidebar {
        width: 200px;
        background: violet;
        height: calc(100vh - 70px);
    }
</style>