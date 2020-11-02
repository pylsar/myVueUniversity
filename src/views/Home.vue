<template>
  <div class="home">
    <h1>Made By Alexey Kysov</h1>
    <div class="home__box">
      <div>
        <div class="home__box__item">
          <Skills @click="clickHtml" :title="'html'" />
          <transition name="slide-fade">
            <SkillsData v-show="htmlIsOpen" :nameOne="'html5'" :nameTwo="'семантическая верстка'" :nameThree="'адаптивная верстка'"/>
          </transition>  
        </div> 
        <div class="home__box__item">
          <Skills @click="clickCss" :title="'css'" />
          <transition name="slide-fade">
            <SkillsData v-if="cssIsOpen" :nameOne="'css3'" :nameTwo="'scss'" :nameThree="'less'"/>
          </transition>  
        </div> 
        <div class="home__box__item"> 
          <Skills @click="clickJs" :title="'js'"/>
          <transition name="slide-fade">
            <SkillsData v-if="jsIsOpen" :nameOne="'Vanilla Js'" :nameTwo="'Vue'" :nameThree="'React'" :nameFour="'JQuery'"/>
          </transition>  
        </div>
        <div class="home__box__item">  
          <Skills @click="clickDif" :title="'others'"/>
          <transition name="slide-fade">
            <SkillsData v-if="difIsOpen" :nameOne="'git'" :nameTwo="'webpack'" :nameThree="'Bitrix Framework'" :nameFour="'WordPress'" :nameFive="'Jira'"/>
          </transition>  
        </div>  
      </div>
      <HomeBio />
    </div> 
  </div>
</template>

<script>
import Skills from '../components/Skills.vue';
import SkillsData from '../components/SkillsData.vue';
import HomeBio from '../components/HomeBio.vue';
export default {
  name: 'Home',
  components: {
    Skills,
    SkillsData,
    HomeBio
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
  }
}
  
.slide-fade-enter-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
