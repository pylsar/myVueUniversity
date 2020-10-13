<template>
  <div class="excursion">
    <h2>Закажите Экскурсию</h2> 
    <form >
      <div>
        <label for="firstName">Имя</label>
        <input type="text" id="firstName" placeholder="Имя..." required>
      </div>
      <div>
        <label for="lastName">Фамилия</label>
        <input type="text" id="lastName" placeholder="Фамилия..." required>
      </div>
      <div>
        <label for="universityName">Выберите Университет</label>
        <input type="text" id="universityName" placeholder="Выберите университет..." required>
      </div>
      <button>Заказать</button>
    </form>   
    <div>
      <ul>
        <li v-for="(university, index) in UNIVERSITIES" :key="index">{{university.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'Excursion',
  components: {
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