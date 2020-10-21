<template>
  <div class="spinner">
    <div class="spinner__img">
      <img
        class="spinner__img--img"
        :src="require('../assets/img/spinner.png')"
        alt="spinner"
      />
    </div>
    <div class="spinner__box">
      <span class="spinner__box--dot"></span>
      <span class="spinner__box--dot"></span>
      <span class="spinner__box--dot"></span>
      <span class="spinner__box--dot"></span>
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
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      display: flex;
      align-items: center;
      &__img {
        width: 50px;
        height: 50px;
        &--img{
            width: 100%;
        }
      }
      &__box{
        display: flex;
          &--dot{
          width: 5px;
          height: 5px;
          display: block;
          background: black;
          margin: 3px;
          border-radius: 50%;
          &:not(:last-child){
            animation: spinnerAnimateLiniar 1.5s linear infinite;
          }
          &:last-child{
            animation: spinnerAnimateDesipiar 1.5s ease-in-out infinite;
          }
        }
      }
    }

    @keyframes spinnerAnimateLiniar {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(8px);
      }
    }
    @keyframes spinnerAnimateDesipiar {
      0%{
        opacity: 1;
      }
      10%{
        opacity: .5;
      }
      90%{
        transform: translateX(-38px);
        opacity: .5
      }
      100% {
        
        opacity: 1;
      }
    }
</style>