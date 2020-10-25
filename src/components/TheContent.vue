<template>
  <div class="content">
    <!-- выводим на экран контент роутера -->
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'TheContent',
  components: {
  },
}
</script>

<style lang="scss">
@import '../styles/settings.scss';
    .content {
        width: calc(100vw - 200px);
        height: calc(100vh - 70px);
        background: $mainBg;
    }
</style>