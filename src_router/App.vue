<template>
    <div>
        <Title text="Vue-Router-Example Ver2.0"></Title>
        <nav>
            <!-- router-link會轉換為a標籤 -->
            <router-link to="/home">home</router-link>
            <router-link to="/about">about</router-link>
            <!-- 對象寫法的params必須要用name -->
        </nav>

        <!-- 根據route改變render相對的components -->
        <router-view></router-view>

        <button @click="clickBack">back</button>
        <button @click="clickGo">go</button>
        <button @click="clickProgrammaticRoute">Programmatic route</button>
    </div>
</template>

<script>
import Title from "./components/Ttile.vue"

export default {
    name: "App",
    components: {
        Title,
    },
    methods: {
        clickBack() {
            // 后退一步记录，等同于 history.back()
            // this.$router.go(-1)
            this.$router.back()
        },
        clickGo() {
            // 在浏览器记录中前进一步，等同于 history.forward()
            this.$router.go(1)
        },
        clickProgrammaticRoute() {
            // push 方法都可以替換replace, 裡面的obj資料跟router-link :to="{}"裡面的object一樣
            this.$router.push("home")
            // this.$router.push({ path: "/home" })
            // this.$router.push({ name: "yee", params: { id: "123" } })
            // this.$router.push({ path: "/home", query: { a: 1, b: 2 } })
        },
    },
    mounted() {
        // 拿到配置象的router對象
        console.log(this.$router)
        // 很有用可以查看當前route的相關屬性 (params, query, meta, fullPath... etc)
        console.log(this.$route)
    },
}
</script>

<style>
nav {
    display: flex;
    gap: 4px;
}
</style>
