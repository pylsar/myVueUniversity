<template>
  <div class="auth">
      <div class="auth__box" :class="{'sign_up-active' : signUp}">
        <div class="auth__box__overlay-container">
          <div class="auth__box__overlay">
            <div class="auth__box__overlay__left">
              <h2>С возвращением</h2>
              <p>Введите свои даные чтобы зарегестрироваться</p>
              <button class="invert" id="signIn" @click="toggle">Войти</button>
            </div>
            <div class="auth__box__overlay__right">
              <h2>Приветствуем Вас</h2>
              <p>Введите логин и пароль</p>
              <button class="invert" id="signUp" @click="toggle">Зарегестрироваться</button>
            </div>
          </div>
        </div>
        <form class="sign_up" action="#">
          <h2>Create login</h2>
          <div>Use your email for registration</div>
          <input type="text" placeholder="Name">
          <input type="email" placeholder="Email">
          <input type="password" placeholder="Password">
          <button>Sign Up</button>
        </form>
        <form class="sign_in" action="#">
          <h2>Sign In</h2>
          <div>Use your acount</div>
          <input type="email" placeholder="Email">
          <input type="password" placeholder="Password">
          <a href="#">forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      signUp: false
    };
  },
  methods: {
    toggle() {
      this.signUp = !this.signUp;
    }
  }
};
</script>

<style lang="scss">
.auth{
  margin: 50px auto;
  &__box {
    position: relative;
    width: 768px;
    height: 480px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    background: green;
    &__overlay-container {
      position: absolute;
      top: 0;
      left: 50%;
      width: 50%;
      height: 100%;
      overflow: hidden;
      transition: transform 0.5s ease-in-out;
      z-index: 100;
    }
    &__overlay {
      position: relative;
      left: -100%;
      height: 100%;
      width: 200%;
      background: linear-gradient(to bottom right, #7FD625, #009345);
      color: #fff;
      transform: translateX(0);
      transition: transform 0.5s ease-in-out;
      &__left,
      &__right {
        position: absolute;
        top: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        padding: 70px 40px;
        width: calc(50% - 80px);
        height: calc(100% - 140px);
        text-align: center;
        transition: transform 0.5s ease-in-out;
      }
      &__left {
        transform: translateX(-20%);
      }
      &__right {
        transform: translateX(0);
        right: 0;
      }
    }
  }
}


form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 90px 60px;
  width: calc(50%-120px);
  height: calc(100% - 180px);
  text-align: center;
  transition: all 0.5s ease-in-out;
}

.sign_in {
  left: 0;
  z-index: 2;
}
.sign_up {
  left: 0;
  z-index: 1;
  opacity: 0;
}

.sign_up-active {
  .sign_in {
    transform: translateX(-50%);
  }

  .sign_up {
    transform: translateX(120%);
    opacity: 1;
    z-index: 5;
    animation: show 0.5s;
  }

  .auth__box__overlay-container {
    transform: translateX(-100%);
  }

  .auth__box__overlay {
    transform: translateX(50%);
  }

  .auth__box__overlay__left {
    transform: translateX(0);
  }
  .auth__box__overlay__right {
    transform: translateX(20%);
  }
}

@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }
  49% {
    opacity: 0;
    z-index: 1;
  }
  50% {
    opacity: 1;
    z-index: 10;
  }
}
</style>
