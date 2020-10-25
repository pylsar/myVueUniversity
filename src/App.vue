<template>
  <div id="app">
    <TheHeader />
    <main>
      <TheSidebar />
      <TheContent />
    </main>
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader.vue'
  import TheSidebar from '@/components/TheSidebar.vue'
  import TheContent from '@/components/TheContent.vue'

  export default {
    name: 'App',
    components: {
      TheHeader,
      TheSidebar,
      TheContent,
    }
  }
</script>

<style lang="scss">

</style>
