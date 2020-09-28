<template>
  <div class="auth">
      <div class="auth__box" :class="{'sign_up-active' : signUp}">
        <div class="auth__box__overlay-container">
          <div class="auth__box__overlay">
            <div class="auth__box__overlay__left">
              <h2>С возвращением</h2>
              <p>Введите свои даные чтобы зарегестрироваться</p>
              <button id="signIn" @click="toggleAuth">Войти</button>
            </div>
            <div class="auth__box__overlay__right">
              <h2>Приветствуем Вас</h2>
              <p>Введите логин и пароль</p>
              <button id="signUp" @click="toggleAuth">Зарегестрироваться</button>
            </div>
          </div>
        </div>
        <form class="auth__form sign_up" action="#" @submit.prevent="validateFormRegestration">
          <h2>Создайте Аккаунт</h2>
          <input type="text" placeholder="Name" v-model="nameRegistration">
          <input type="email" placeholder="Email" v-model="emailRegistration">
          <input type="password" placeholder="Password" v-model="passwordRegistration">
          <button>Зарегестрироваться</button>
            <ul>
              <li v-for="(errorReg, index) in errorsReg" :key="index">
                <span class="auth__form--error">{{errorReg}}</span>
              </li>
            </ul>
        </form>
        <form class="auth__form sign_in" action="#" @submit.prevent="validateFormLogin">
          <h2>Войти</h2>
          <input type="email" placeholder="Email" v-model="emailLogin">
          <input type="password" placeholder="Password" v-model="passwordLogin">
          <button>Войти</button>
          <ul>
            <li v-for="(errorLog, index) in errorsLog" :key="index">
              <span class="auth__form--error">{{errorLog}}</span>
            </li>
          </ul>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      signUp: false,
      errorsReg: [],
      errorsLog: [],
      nameRegistration: null,
      emailRegistration: null,
      passwordRegistration: null,
      emailLogin: null,
      passwordLogin: null
    };
  },
  methods: {
    toggleAuth() {
      this.signUp = !this.signUp;
    },
    validateFormRegestration(){
      if (this.nameRegistration && this.emailRegistration && this.passwordRegistration) {
        return true;
      }
      // чтобы не дублтровать ошибки
      this.errorsReg = []

      if(!this.nameRegistration){
        this.errorsReg.push('заполните поле с именем')
      }
      if(!this.emailRegistration){
        this.errorsReg.push('заполните поле с email')
      }
      if(!this.passwordRegistration){
        this.errorsReg.push('заполните поле с паролем')
      }
      if(this.passwordRegistration.length < 6){
        this.errorsReg.push('пароль должен содержать не менее 6 сиволов')
      }
    },
    validateFormLogin(){
      if (this.emailLogin && this.passwordLogin) {
        return true;
      }
      // чтобы не дублтровать ошибки
      this.errorsLog = []
      if(!this.emailLogin) {
        this.errorsLog.push('введите email')
      }
      if(!this.passwordLogin){
        this.errorsLog.push('введите пароль')
      }
    }

  }
};
</script>

<style lang="scss">
.auth{
  &__box {
    position: relative;
    width: 768px;
    height: 480px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    background: green;
    margin: 30px auto;
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
      background: skyblue;
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
        // width: calc(50% - 80px);
        // height: calc(100% - 140px);
        width: 50%;
        height: 100%;
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
  &__form {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 90px 60px;
    // width: calc(50%-120px);
    // height: calc(100% - 180px);
    width: 50%;
    height: 100%;
    text-align: center;
    transition: all 0.5s ease-in-out;
    &--error{
      color: red;
    }
  }
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
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show-auth-anim 0.5s;
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

@keyframes show-auth-anim {
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
