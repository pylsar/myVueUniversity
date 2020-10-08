<template>
    <div class="skills-data">
        <ul>
            <li>{{nameOne}}</li>
            <li>{{nameTwo}}</li>
        </ul>
    </div>
</template>    
<script>
export default{
    name: 'SkillsData',
    props: {
        nameOne: {
            type: String,
            required: true
        },
        nameTwo: {
            type: String,
            default: ''
        }
    },
}
</script>
<style lang="scss">
.skills-data{
    width: 500px;
    height: 100px;
    margin: 10px;
    border: 1px solid red;
    animation: skillsAnim 1s;
}

@keyframes skillsAnim{
    0% {
        transform: rotate(180deg);
        opacity: 0;
    }
    30%{
        opacity: .5;
    }
    100% {
        transform: rotate(0deg);
        opacity: 1;
    }
}

</style>