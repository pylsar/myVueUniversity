<template>
  <div class="content">
    <h1>Content</h1>
    <!-- выводим на экран контент роутера -->
    <router-view/>
  </div>
</template>

<script>
export default {

  name: 'Content',
  components: {
  }
}
</script>

<style lang="scss">
    .content {
        width: calc(100vw - 200px);
        height: calc(100vh - 70px);
        background: yellowgreen;
    }
</style>