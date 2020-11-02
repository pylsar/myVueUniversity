<template>
  <div id="app">
    <TheHeader />
    <main>
      <TheSidebar />
      <TheContent />
    </main>
    <TheFooter />
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader.vue';
  import TheSidebar from '@/components/TheSidebar.vue';
  import TheContent from '@/components/TheContent.vue';
  import TheFooter from '@/components/TheFooter.vue';

  export default {
    name: 'App',
    components: {
      TheHeader,
      TheSidebar,
      TheContent,
      TheFooter
    }
  }
</script>

<style lang="scss">

</style>
