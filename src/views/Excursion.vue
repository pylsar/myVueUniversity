<template>
  <div class="excursion">
    <ExcursionForm :universities="universities"/>
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
        <ExcursionTable v-for="(university, index) in universities" :key="index" :university="university"/>
      </tbody>
    </table>  
  </div>
</template>

<script>
import axios from 'axios';
import ExcursionForm from '../components/ExcursionForm.vue';
import ExcursionTable from '../components/ExcursionTable.vue';
export default {
  name: 'Excursion',
  components: {
    ExcursionForm,
    ExcursionTable
  },
  data(){
    return {
      universities: {}
    }
  },
  methods: {
    sortByTitle(){
      return this.universities.sort((a,b) => a.title > b.title ?  1 : -1);
    },
    sortByCounrty(){
      return this.universities.sort((a,b) => a.country > b.country ? 1 : -1) ;
    },
    sortByPriceUp(){
      return this.universities.sort((a,b) => a.price-b.price);
    },
    sortByPriceDown(){
      return this.universities.sort((a,b) => b.price-a.price);
    },
    sortByTopUp(){
      return this.universities.sort((a,b) => a.topNumber-b.topNumber);
    },
    sortByTopDown(){
      return this.universities.sort((a,b) => b.topNumber-a.topNumber);
    },
  },
  mounted(){
    axios.get('http://localhost:3001/universities')
         .then(response => (this.universities = response.data))
         .catch(error => console.log(error));
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