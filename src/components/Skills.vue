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
    width: 100px;
    height: 100px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
}    
</style>   