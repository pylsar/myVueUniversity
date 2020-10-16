<template>
    <div class="excirsion-form">
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
    </div>
</template>
<script>
export default {
    name: 'ExcursionForm',
}
</script>  