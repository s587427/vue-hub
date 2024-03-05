<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
        <h2 ref="helloWorld">hello world</h2>
        <Person ref="p"/>
        <button @click="testGetRef">點我取得ref資訊</button>
    </div>
</template>

<script>

    import Person from "./components/Person.vue"

    export default {
        name: "App",
        components: {
            Person,
        },
        methods:{
            testGetRef(){
                // 透過組件實例對象.$refs取得, 並在元素的屬性上給定ref
                // this.$refs
                console.log(this.$refs.helloWorld) // html節點
                console.log(this.$refs.p) // vueComponent組件實例

            }
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
