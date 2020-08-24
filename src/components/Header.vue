<template>
    <div class="header">
        <span><router-link to="/">Best University</router-link></span>
        <nav class="header__navigation">
            <ul>
                <li><router-link to="/excursion">Заказать экскурсию</router-link></li>
                <li><router-link to="/top">Топ институтов</router-link></li>
                <li><router-link to="/auth">Регистрация</router-link></li>    
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Header',

    }
</script>

<style lang="scss">
    .header{
        height: 70px;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: skyblue;
        &__navigation {
            & ul{
                width: 70vw;
                display: flex;
                justify-content: space-around;
            }
        }
    }
</style>