<template>
  <div class="excirsion-form">
    <h2>Закажите Экскурсию</h2>
    <form @submit.prevent="validateFormExcursion" class="excirsion-form__form">
      <div class="excirsion-form__form__item">
        <label class="excirsion-form__form__item--label" for="firstName"
          >Имя</label
        >
        <input
          class="excirsion-form__form__item--input"
          type="text"
          id="firstName"
          placeholder="Имя..."
          required
        />
      </div>
      <div class="excirsion-form__form__item">
        <label class="excirsion-form__form__item--label" for="lastName"
          >Фамилия</label
        >
        <input
          class="excirsion-form__form__item--input"
          type="text"
          id="lastName"
          placeholder="Фамилия..."
          required
        />
      </div>
      <select class="excirsion-form__form__item--input" v-model="selectedUniversity">
        <option disabled value="Выберите университет">
          Выберите университет
        </option>
        <option v-for="(university, index) in universities" :key="index">
          {{ university.title }}
        </option>
      </select>
      <!-- <button @click="buyExcursionBtn">Заказать</button> -->
      <Btn v-if="!buyExcursion" :title="'Заказать'" :success="true" @click="buyExcursionBtn"/>
    </form>

    <div v-if="buyExcursion" class="excirsion-form__buy">
      <!-- так делать не рекомендуется, подумать как заменить -->
      <div v-for="(university, index) in universities" :key="index">
        <div v-if="selectedUniversity == university.title" class="excirsion-form__buy__box">
          <div>
            <img class="excirsion-form__buy__box--img" :src="require('../assets/img/' + university.img)" alt="university.title" />
          </div>
          <div class="excirsion-form__buy__box--text">
            <div>
              <span><strong>Название:</strong> {{ university.title }}</span>
            </div>
            <div>
              <span><strong>Страна:</strong> {{university.country}}</span>
            </div>
            <div>
              <span><strong>Цена:</strong> {{ university.price }}</span>
            </div>
          </div>
          <div class="excirsion-form__buy__box__btn">
            <Btn @click="addExcursion(index)" :title="'Купить'" :success="true"/>
            <Btn @click="cancelExcursion" :title="'Отменить'" :cancel="true"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Btn from '../components/Btn.vue';
export default {
  name: "ExcursionForm",
  props: ["universities"],
  components:{
    Btn
  },
  data() {
    return {
      selectedUniversity: "Выберите университет",
      buyExcursion: false,
    };
  },
  methods: {
    buyExcursionBtn() {
      if (this.selectedUniversity != "Выберите университет") {
        this.buyExcursion = !this.buyExcursion;
      } else {
        this.buyExcursion = false;
      }
    },
    validateFormExcursion() {},
    cancelExcursion(){
      this.buyExcursion = false;
    },
    addExcursion(index){
      this.universities[index].inCart = true
    }
  },
};
</script>  
<style lang="scss">
.excirsion-form {
  &__form {
    min-width: 350px;
    min-height: 400px;
    &__item {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      &--input {
        width: 200px;
        height: 30px;
        background-color: lightgray;
        outline: none;
        border: none;
      }
      &--label {
        margin-bottom: 5px;
      }
    }
  }
  &__buy {
    padding: 10px 10px;
    background: white;
    box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
    &__box{
      display: flex;
      &--img{
        width: 70px;
        height: 70px;
      }
      &--text {
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      &__btn{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-end;
        flex: 1;
      }
    }
    
  }
}
</style>