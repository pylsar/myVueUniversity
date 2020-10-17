<template>
    <div class="excirsion-form">
        <h2>Закажите Экскурсию</h2>
        <form @submit.prevent="validateFormExcursion">
            <div>
                <label for="firstName">Имя</label>
                <input type="text" id="firstName" placeholder="Имя..." required>
            </div>
            <div>
                <label for="lastName">Фамилия</label>
                <input type="text" id="lastName" placeholder="Фамилия..." required>
            </div>
            <select v-model="selectedUniversity">
                <option disabled value="Выберите университет">Выберите университет</option>
                <option v-for="(university, index) in universities" :key="index">{{university.title}}</option>
            </select>
            <button @click="buyExcursionBtn">Заказать</button>
        </form>

        
        <div v-if="buyExcursion" class="excirsion-form__buy">
            <span>Выбрано: {{ selectedUniversity }}</span>
            <!-- так делать не рекомендуется, подумать как заменить -->
            <div v-for="(university, index) in universities" :key="index">
            <div v-if="selectedUniversity == university.title">
                {{university.title}}{{university.price}}
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ExcursionForm',
    props: ['universities'],
    data(){
        return {
            selectedUniversity: 'Выберите университет',
            buyExcursion: false
        }
    },
    methods: {
        buyExcursionBtn(){
            if(this.selectedUniversity != 'Выберите университет'){
                this.buyExcursion = !this.buyExcursion;
            }else{
                this.buyExcursion = false;
            }
        },
        validateFormExcursion(){

        }
    }
}
</script>  
<style lang="scss">
.excirsion-form{
    &__buy {
        background: white;
    }
}
</style>