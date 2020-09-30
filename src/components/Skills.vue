<template>
    <div class="skills" @click="clicked">
        {{title}}
    </div>
</template>
<script>
export default{
    name: 'Skills',
    props: {
        title: {
        type: String,
        required: true
        },
    },
    methods: {
        clicked() {
        this.$emit("click");
        }
    },
}   
</script>
<style>
.skills{
    width: 150px;
    height: 150px;
    border: 1px solid red;
}    
</style>   