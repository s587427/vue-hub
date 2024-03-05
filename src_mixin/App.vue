<template>

    <div id="app">   
        <Person/>
        <hr/>
        <Monster/>
    </div>

</template>

<script>

    import Person from "./components/Person.vue"
    import Monster from "./components/Monster.vue"

    export default {
        name: "App",
        components: {
            Person,
            Monster,
        }
    }

</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
