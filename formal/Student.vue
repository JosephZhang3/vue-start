<template>
    <div class="demo">
        <h2>name : {{ name }}</h2>
        <h2>age : {{ age }}</h2>
        <button type='button' @click='tips'>bubble</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return { name: 'zjh', age: 29 }
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