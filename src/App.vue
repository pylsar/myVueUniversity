<template>
  <div id="app">
    <Header />
    <!-- выводим на экран контент роутера -->
    <router-view/> 
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style lang="scss">

</style>
