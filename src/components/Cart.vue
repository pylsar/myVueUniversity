<template>
  <div class="cart">
    <div @click="closeCart" class="cart__overlay"></div>
    <div class="cart__box">
      <h2 class="cart__box--title">Корзина</h2>
      <span @click="closeCart" class="cart__box--close">&times;</span>
      <div v-for="(university, index) in universities" :key="index">
        <!-- так делать не рекомендуется, подумать как заменить -->
        <div v-if="university.inCart">
          <div class="cart__box__item">
            <div class="cart__box__item__content">
              <div class="cart__box__item__content__img">
                <img
                  class="cart__box__item__content__img--img"
                  :src="require('../assets/img/' + university.img)"
                  alt="university.title"
                />
              </div>
              <span class="cart__box__item__content--title">{{
                university.title
              }}</span>
            </div>
            <div class="cart__box__item__btn">
              <Btn
                @click="buyTickets(index)"
                :title="'Купить'"
                :success="true"
                :class="{'btn_unable' : university.hasTicket}"
                class="cart__box__item__btn--button"
              />
              <Btn
                @click="removeExcursion(index)"
                :title="'Передумал'"
                :cancel="true"
                :class="{'btn_unable' : university.hasTicket}"
                class="cart__box__item__btn--button"
              />
            </div>
          </div>
          <div v-if="university.hasTicket">
            <hr />
            <ul>
              <li>
                Вы забранировали экскурсию в университет {{ university.title }}
              </li>
              <li>Вам необходимо купить билеты до {{ university.country }}</li>
              <li>Иметь хорошее настроение</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "../components/Btn.vue";
export default {
  name: "Cart",
  props: ["universities"],
  components: {
    Btn,
  },
  data() {
    return {
    };
  },
  methods: {
    closeCart() {
      this.$emit("closeCart");
    },
    removeExcursion(index) {
      this.universities[index].inCart = false;
    },
    buyTickets(index) {
      this.universities[index].hasTicket = true;
    },
  },
};
</script>
<style lang="scss">
.cart {
  &__box {
    width: 600px;
    height: 600px;
    border-radius: 6px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    overflow: auto;
    &--title {
      text-align: center;
      margin-top: 20px;
    }
    &--close {
      font-size: 40px;
      line-height: 1;
      position: absolute;
      top: 5px;
      right: 10px;
      cursor: pointer;
      &:hover {
        transform: rotate(360deg);
        transition: 0.3s;
      }
    }
    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      &__btn {
        display: flex;
        &--button {
          margin-right: 5px;
        }
      }
      &__content {
        display: flex;
        align-items: center;
        &__img {
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          &--img {
            width: 100%;
          }
        }
        &--title {
          margin-right: 40px;
        }
      }
    }
  }
  &__overlay {
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.6;
  }
}

.btn_unable{
    pointer-events: none;
    opacity: .1;
}
</style>