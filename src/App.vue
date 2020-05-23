<template>
  <div id="app">
    <Header />
    <main>
      <Sidebar />
      <Content />
    </main>

     
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Sidebar from '@/components/Sidebar.vue'
  import Content from '@/components/Content.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Sidebar,
      Content
    }
  }
</script>

<style lang="scss">

</style>
