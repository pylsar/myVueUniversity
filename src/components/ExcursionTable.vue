<template>
    <tr>
        <td>{{university.title}}</td> <td>{{university.country}}</td> <td>{{university.price}}</td>
    </tr>
</template>
<script>
export default {
    name: 'ExcursionTable',
    props: ['university']
}
</script>

<style lang="scss" scoped>

</style>