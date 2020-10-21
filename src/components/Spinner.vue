<template>
  <div class="spinner">
    <div class="spinner__img">
      <img
        class="Spinner__img--img"
        :src="require('../assets/img/spinner.png')"
        alt="spinner"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Spinner",
};
</script>  

<style lang="scss">
    .spinner{
        &__img {
            width: 50px;
            height: 50px;
            &--img{
                width: 100%;
            }
        }
    }
</style>