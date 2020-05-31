<template>
    <div class="university">
        <div v-for="university in universities" :key="university.id">
            <h3>{{university.title}}</h3>
            <p>{{university.longDescr}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'University',
        mounted(){
        this.$axios.get('http://localhost:3001/universities')
            .then(response => (this.universities = response.data));
            // .then(response => (console.log(response)));
        },
    }
</script>

