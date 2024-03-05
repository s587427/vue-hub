<template>
     <div>
        {{ name }}, 攻擊力{{attack}}
        <button @click="attackBoss">點我攻擊boss</button>
     </div> 
</template>


<script>
    export default {
        name: "Role2",
        data(){
           return {
                name: "我是勇者二號",
                attack: 200
           } 
        },
        methods: {
            attackBoss(){
                // 可以攜帶多個參數
                // 發送一個action
                this.$store.dispatch("attackBoss", this.attack)
            }
        },
        mounted(){
            // 此時使用Vuex, 實例對象上有了this.$store
            // 包含常用的兩個fn commit/dispatch 兩個對象state/getters
            // console.log(this.$store.state)
        }

    }
</script>