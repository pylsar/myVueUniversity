<template>
  <div class="excursion">
    <ExcursionForm/>
    <table class="excursion__table">
      <thead>
          <tr>
              <th>Университет</th> <th>Страна</th> <th>Цена</th>
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
    
  },
  computed: {
    ...mapGetters([
        'UNIVERSITIES'
    ]),
    university() {
        //необходимо привести к числу
    return this.$store.getters.universityById(+this.$route.params.id);
    }
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
    }
  }

</style>