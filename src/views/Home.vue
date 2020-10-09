<template>
  <div class="home">
    <h1>Made By Alexey Kysov</h1>
    <div class="home__box">
      <div>
        <div class="home__box__item">
          <Skills @click="clickHtml" :title="'html'" />
          <SkillsData v-show="htmlIsOpen" :nameOne="'html5'" :nameTwo="'семантическая верстка'"/>
        </div> 
        <div class="home__box__item">
          <Skills @click="clickCss" :title="'css'" />
          <SkillsData v-if="cssIsOpen" :nameOne="'css3'"/>
        </div> 
        <div class="home__box__item"> 
          <Skills @click="clickJs" :title="'js'"/>
          <SkillsData v-if="jsIsOpen" :nameOne="'Vanilla Js'" :nameTwo="'Vue'"/>
        </div>
        <div class="home__box__item">  
          <Skills @click="clickDif" :title="'others'"/>
          <SkillsData v-if="difIsOpen" :nameOne="'git'" :nameTwo="'webpack'"/>
        </div>  
      </div>
      <div class="home__box__photo">
        <div class="home__box__photo__img">
          <img class="home__box__photo__img--img" :src=" require(`../assets/img/myPhoto.jpg`) " alt="Alexey Kusov">
        </div>
        <div class="home__box__photo__descr">
          <ul class="home__box__photo__descr__list">
            <li>имя: Кусов Алексей</li>
            <li>дата рождения: 23.02.1986</li>
            <li>страна: Россия</li>
          </ul>
        </div> 
      </div>
    </div> 
  </div>
</template>

<script>
import Skills from '../components/Skills.vue';
import SkillsData from '../components/SkillsData.vue';
export default {
  name: 'Home',
  components: {
    Skills,
    SkillsData
  },
  data(){
    return {
      htmlIsOpen: false,
      cssIsOpen: false,
      jsIsOpen: false,
      difIsOpen: false,
    }
  },
  methods: {
    clickHtml(){
      this.htmlIsOpen = !this.htmlIsOpen;
    },
    clickCss(){
      this.cssIsOpen = !this.cssIsOpen;
    },
    clickJs(){
      this.jsIsOpen = !this.jsIsOpen;
    },
    clickDif(){
      this.difIsOpen = !this.difIsOpen;
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  &__box{
    display: flex;
    &__item{
      display: flex;
    }
    &__photo{
      border: 1px solid red;
      margin: 10px;
      &__img{
        width: 300px;
        height: 300px;
        border: 1px solid blue;
        display: flex;
        justify-content: center;
        align-items: center;
        &--img {
          width: 100%;
        }
      }
      &__descr{
        &__list {  
          & li {
            font-size: 20px;
          }
        }
      }
    }
  }
}
  

</style>
