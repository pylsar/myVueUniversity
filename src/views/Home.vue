<template>
  <div class="home">
    <h1>Made By Alexey Kysov</h1>
    <div class="home__item">
      <Skills @click="clickHtml" :title="'html'" />
      <SkillsData v-show="htmlIsOpen" :nameOne="'html5'" :nameTwo="'семантическая верстка'"/>
    </div> 
    <div class="home__item">
      <Skills @click="clickCss" :title="'css'" />
      <SkillsData v-if="cssIsOpen" :nameOne="'css3'"/>
    </div> 
    <div class="home__item"> 
      <Skills @click="clickJs" :title="'js'"/>
      <SkillsData v-if="jsIsOpen" :nameOne="'Vanilla Js'" :nameTwo="'Vue'"/>
    </div>
    <div class="home__item">  
      <Skills @click="clickDif" :title="'others'"/>
      <SkillsData v-if="difIsOpen" :nameOne="'git'" :nameTwo="'webpack'"/>
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
  &__item{
    display: flex;
  }
}
  

</style>
