<template>
    <div class="demo">
        <h2>name : {{ name }}</h2>
        <h2>address : {{ address }}</h2>
        <button type='button' @click='tips'>bubble</button>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return { name: 'Peking', address: 'CN' }
    },
    methods: {
        tips() {
            alert('tips')
        }
    }
}
</script>

<style>
.demo {
    background-color: aqua;
}
</style>