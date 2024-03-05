<template>

    <div id="app">
      
        <Person name="孫悟空" :age="21"/>
        <Person name="豬八戒" :age="18"/>
        <Person :age="60"/>
    </div>

</template>

<script>

    import Person from "./components/Person.vue"

    export default {
        name: "App",
        components: {
            Person,
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
