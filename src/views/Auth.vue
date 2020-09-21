<template>
  <div class="auth">
    <div class="auth__box">
      <div class="auth__box__overlay">
        <div class="auth__box__overlay__left" :class="{'welcome-back' : isSignUp}">
          <h2>С возвращением</h2>
          <p>Введите свои данные</p>
          <button type="submit">Зарегестрироваться</button>
        </div>
        <div class="auth__box__overlay__right"  :class="{'to-left' : isSignUp}">
          <h2>Приветствуем Вас</h2>
          <p>Введите свои данные</p>
          <button type="submit" @click="signUp">Зарегестрироваться</button>
        </div>
      </div>
      <div class="auth__box__overlay__form">
        <form class="auth__box__overlay__form__left">
          <h2>Войти</h2>
          <div>Используйте Ваш акаунт</div>
          <input type="email" placeholder="Email">
          <input type="password" placeholder="Password">
          <a href="#">Забыли пароль?</a>
          <button type="submit">Войти</button>
        </form>
        <form class="auth__box__overlay__form__right">
          <h2>Создайте логин</h2>
          <div>Используйте почту для регистрации</div>
          <input type="text" placeholder="Name">
          <input type="email" placeholder="Email">
          <input type="password" placeholder="Password">
          <button type="submit" >Зарегестрироваться</button>
        </form>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  components: {
  },
  data(){
    return {
      isSignUp: false
    }
  },
  methods: {
    signUp(){
      this.isSignUp = !this.isSignUp;
    }
  }
}
</script>

<style scoped lang="scss">
  .auth {
    &__box {
      border: 1px solid red;
      width: 900px;
      height: calc(100vh - 170px);
      margin: 50px auto;
      position: relative;
      &__overlay{
        border: 1px solid blue;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &__left, &__right{
          border: 1px solid orange;
          width: 50%;
          height: 100%;
          background: pink;
        }
        &__right {
          z-index: 2;
        }
        &__form{
          position: absolute;
          top: 0;
          left: 0;
          border: 1px solid blue;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          &__left, &__right {
            border: 1px solid orange;
            width: 50%;
            height: 100%;
            background: purple;
          }
        }
      }
    }
    .to-left {
      transform: translateX(-100%);
    }
    .welcome-back{
      z-index: 3;
    }
  }
</style>