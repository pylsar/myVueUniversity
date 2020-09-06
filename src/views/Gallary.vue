<template>
    <div class="gallary">
        <div v-for="(gallary, index) in gallaries" :key="index" class="gallary__items" :class="{'big': gallary.current}">
            <img :src="require('../assets/img/' + gallary.img)" alt="" @click="gallary.current = !gallary.current" />
             <div v-show="gallary.current" class="gallary__items--name">
                 {{gallary.name}}
            </div>
        </div>
    </div>
</template> 
<script>
export default {
    name: 'Gallary',
    data(){
        return{
            gallaries: [
                {
                    img : "mgy1.jpg",
                    name: "МГУ1",
                    current: false
                },
                {
                    img : "mgy2.jpg",
                    name: "МГУ2",
                    current: false
                },
                {
                    img : "mgy3.jpg",
                    name: "МГУ3",
                    current: false
                },
                {
                    img : "mgy4.jpg",
                    name: "МГУ4",
                    current: false
                }
            ]
        }
    }
}
</script>  
<style lang="scss">
.gallary{
    display: flex;
    &__items {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        border: 1px solid red;
        & img {
            width: 100%;
        }
        &--name{
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            font-size: 32px;
        }
    }
}
.big {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;

}

</style> 
