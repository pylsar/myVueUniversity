<template>
  <div class="gallary">
    <h1>Gallary</h1>

    <div class="gallary__box">
      <div
        v-for="(gallary, index) in gallaries"
        :key="index"
        class="gallary__box__items"
        :style="{
          transform:
            'translateX' + '(' + '-' + 220 * gallaryCurent + 'px' + ')',
        }"
      >
        <div class="gallary__box__items__img">
          <img
            :src="require('../assets/img/' + gallary.img)"
            alt=""
            class="gallary__box__items__img--img"
          />
        </div>
        <div class="gallary__box__items--name">
          {{ gallary.name }}
        </div>
        <div class="gallary__box__items--name">
          {{ gallary.country }}
        </div>
        <div class="gallary__box__items__icon">
          <img
            :src="require('../assets/img/up.png')"
            alt="стрелка вверх"
            class="gallary__box__items__icon--img"
          />
        </div>
      </div>
    </div>

    <div class="gallary__control">
      <div class="gallary__control__item">
        <img
          :src="require('../assets/img/arrow.png')"
          alt="стрелка влево"
          class="gallary__control__item--img"
          @click="backGallary"
        />
      </div>
      <div class="gallary__control__item">
        <img
          :src="require('../assets/img/arrow.png')"
          alt="стрелка вправо"
          class="gallary__control__item--img"
          @click="forwardGallary"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallary",
  components: {},
  data() {
    return {
      gallaryCurent: 0,
      gallaries: [
        {
          img: "mgy1.jpg",
          name: "MGY1",
          country: "Russia",
        },
        {
          img: "mgy2.jpg",
          name: "MGY2",
          country: "Russia",
        },
        {
          img: "mgy3.jpg",
          name: "MGY3",
          country: "Russia",
        },
        {
          img: "mgy4.jpg",
          name: "MGY4",
          country: "Russia",
        },
        {
          img: "mgy4.jpg",
          name: "MGY4",
          country: "Russia",
        },
        {
          img: "mgy4.jpg",
          name: "MGY4",
          country: "Russia",
        },
      ],
    };
  },
  methods: {
    forwardGallary() {
      if (this.gallaryCurent >= this.gallaries.length - 1) {
        this.gallaryCurent = 0;
      } else {
        this.gallaryCurent++;
      }
    },
    backGallary() {
      if (this.gallaryCurent > 0) {
        this.gallaryCurent--;
      }
    },
  },
};
</script>

<style lang="scss">
.gallary {
  & h1 {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
  &__box {
    display: flex;
    width: 640px;
    margin: 50px auto;
    overflow: hidden;
    &__items {
      width: 200px;
      height: 300px;
      border: 1px solid red;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;

      &:last-child {
        margin-right: 0px;
      }
      &__img {
        width: 200px;
        max-height: 160px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 20px;
        &--img {
          width: 100%;
          height: 160px;
        }
      }
      &--name {
        text-align: center;
        margin: 10px auto;
      }
      &__icon {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin: 0 auto;
        &--img {
          width: 100%;
        }
      }
    }
  }

  &__control {
    width: 200px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__item {
      width: 100px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      &--img {
        width: 100%;
        margin-left: -50px;
        cursor: pointer;
      }
      &:last-child {
        transform: rotate(180deg);
      }
    }
  }
}
</style>