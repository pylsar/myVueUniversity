<template>
    <div class="header">
        <span>Best University</span>
        <nav>
            <ul>
                <li>Заказать экскурсию</li>
                <li>Топ институтов</li>
                <li>Регистрация</li>
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
        & nav {
            & ul{
                width: 70vw;
                display: flex;
                justify-content: space-around;
            }
        }
    }
</style>