<template>
  <div class="gallary">
    <h1>Gallary</h1>

    <div class="gallary__box">
      <div v-for="(gallary, index) in gallaries" :key="index" class="gallary__box__items" :style="{'transform' : 'translateX' + '(' + '-' + (220 * gallaryCurent) + 'px' + ')'}">
        <div class="gallary__box__items__img">
          <img :src="require('../assets/img/' + gallary.img)" alt="" class="gallary__box__items__img--img"/>
        </div>
        <div>
          {{gallary.name}}
        </div>
      </div>
    </div>

    <div class="gallary__control">
      <div @click="backGallary">назад</div>
      <div @click="forwardGallary">вперед</div> 
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallary",
  components: {
  },
  data(){
    return{
      gallaryCurent: 0,
        gallaries: [
            {
                img : "mgy1.jpg",
                name: "МГУ1",
            },
            {
                img : "mgy2.jpg",
                name: "МГУ2",
            },
            {
                img : "mgy3.jpg",
                name: "МГУ3",
            },
            {
                img : "mgy4.jpg",
                name: "МГУ4",
            },
             {
                img : "mgy4.jpg",
                name: "МГУ4",
            },
             {
                img : "mgy4.jpg",
                name: "МГУ4",
            }
        ]
    }
  },
  methods:{
    forwardGallary(){
      if(this.gallaryCurent >= this.gallaries.length - 1){
        this.gallaryCurent = 0;
      }else{
        this.gallaryCurent++;
      }
    },
    backGallary(){
      if(this.gallaryCurent > 0){
        this.gallaryCurent--
      }
    }
  }
};
</script>

<style lang="scss">
  .gallary{
    & h1{
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;
    }
    &__control{
      width: 100px;
      border: 1px solid red;
      margin: 0px auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__box{
      display: flex; 
      width: 640px;
      margin: 50px auto;
      overflow: hidden;
      border: 1px solid red;
      &__items{
        width: 200px;
        height: 300px;
        border: 1px solid red;
        margin-right: 20px;
        &:last-child{
          margin-right: 0px;
        }
        &__img {
          width: 200px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          &--img{
            width: 100%;
          }
        }
      }
    }
  }
</style>