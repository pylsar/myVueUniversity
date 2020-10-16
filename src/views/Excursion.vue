<template>
  <div class="excursion">
    <ExcursionForm/>
    <table class="excursion__table">
      <thead>
          <tr>
              <th>Университет</th> <th>Страна</th> <th>Цена</th><th>№ в топе</th>
          </tr>
          <tr>
              <th class="excursion__table--sort" @click="sortByTitle">по алфавиту</th>
              <th class="excursion__table--sort" @click="sortByCounrty">по алфавиту</th> 
              <th class="excursion__table--errow"><span @click="sortByPriceUp" >↑</span><span @click="sortByPriceDown" >↓</span></th>
              <th class="excursion__table--errow"><span @click="sortByTopUp" >↑</span><span @click="sortByTopDown" >↓</span></th>
          </tr>
      </thead>
      <tbody>
        <ExcursionTable v-for="(university, index) in UNIVERSITIES" :key="index" :university="university"/>
      </tbody>
    </table>  
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import ExcursionForm from '../components/ExcursionForm.vue';
import ExcursionTable from '../components/ExcursionTable.vue';
export default {
  name: 'Excursion',
  components: {
    ExcursionForm,
    ExcursionTable
  },
  methods: {
    ...mapActions([
        'GET_UNIVERSITIES_FROM_API',
    ]),
    sortByTitle(){
      return this.UNIVERSITIES.sort((a,b) => a.title > b.title ?  1 : -1);
    },
    sortByCounrty(){
      return this.UNIVERSITIES.sort((a,b) => a.country > b.country ? 1 : -1) ;
    },
    sortByPriceUp(){
      return this.UNIVERSITIES.sort((a,b) => a.price-b.price);
    },
    sortByPriceDown(){
      return this.UNIVERSITIES.sort((a,b) => b.price-a.price);
    },
    sortByTopUp(){
      return this.UNIVERSITIES.sort((a,b) => a.topNumber-b.topNumber);
    },
    sortByTopDown(){
      return this.UNIVERSITIES.sort((a,b) => b.topNumber-a.topNumber);
    },
  },
  computed: {
    ...mapGetters([
        'UNIVERSITIES'
    ]),

    // university() {
    //     //необходимо привести к числу
    // return this.$store.getters.universityById(+this.$route.params.id);
    // }
  },
  mounted(){
    this.GET_UNIVERSITIES_FROM_API()
  }, 
}
</script>

<style lang="scss">
  .excursion{
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    &__table {
      border-collapse:separate; 
      border-spacing: 15px;
      text-align: left;
      &--errow {
        & span {
          display: inline-block;
          padding-left: 5px;
          padding-right: 5px;;
          cursor: pointer;
        }
        & span:last-child {
          margin-left: 10px;;
        }
      }
      &--sort {
        cursor: pointer;
      }
    }
  }

</style>