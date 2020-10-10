<template>
    <div class="home-bio">
        <div class="home-bio__img">
          <img class="home-bio__img--img" :src=" require(`../assets/img/myPhoto.jpg`) " alt="Alexey Kusov">
        </div>
        <div class="home-bio__descr">
          <ul class="home-bio__descr__list">
            <li>имя: Кусов Алексей</li>
            <li>дата рождения: 23.02.1986</li>
            <li>страна: Россия</li>
          </ul>
        </div> 
    </div>
</template>   

<script>
    export default {
        name: 'HomeBio',

    }
</script>
<style lang="scss">
 .home-bio{
    border: 1px solid red;
    margin: 10px;
    &__img{
        width: 300px;
        height: 300px;
        border: 1px solid blue;
        display: flex;
        justify-content: center;
        align-items: center;
        &--img {
            width: 100%;
        }
    }
    &__descr{
        &__list {  
            & li {
            font-size: 20px;
            }
        }
    }
}
</style>