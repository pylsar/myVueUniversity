<template>
  <div class="home">
    <h1>Made By Alexey Kysov</h1>
    <Skills @click="clickBtn" :title="'html'"/>
  </div>
</template>

<script>
import Skills from '../components/Skills.vue';
export default {
  name: 'Home',
  components: {
    Skills
  },
  methods: {
    clickBtn(){
      alert(1)
    }
  }
}
</script>

<style lang="scss">

</style>
