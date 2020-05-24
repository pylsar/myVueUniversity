<template>
    <div class="sidebar">
        <ul>
            <!-- <li>МГУ</li>
            <li>Стенфорд</li>
            <li>Гарвард</li>
            <li>Калтех</li>
            <li>Оксфорд</li>
            <li>Ель</li> -->
            <li v-for="university in universities" :key="university.id">{{university.title}}</li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'Sidebar',
        data() {
            return {
            universities: null
            };
        },
        
        mounted(){
        this.$axios.get('http://localhost:3001/universities')
            .then(response => (this.universities = response.data));
            // .then(response => (console.log(response)));
        }
    }
</script>

<style lang="scss">
    .sidebar {
        width: 200px;
        background: violet;
        height: calc(100vh - 70px);
    }
</style>