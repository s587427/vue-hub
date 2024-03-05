<template>
    <div>
        {{ name }}, 攻擊力{{ attack }}
        <button @click="attackBoss">attackBossByDispatch</button>
        <button @click="attackBoss2">attackBossByCommit</button>
        <button @click="attackBoss3">attackBossByBusEvent</button>
    </div>
</template>

<script>
export default {
    name: "Role",
    data() {
        return {
            name: "我是勇者一號",
            attack: 100,
        }
    },
    methods: {
        attackBoss() {
            // 可以攜帶多個參數
            // 發送一個action
            this.$store.dispatch("attackBoss", 100)
            console.log(this.$store.state)
        },
        attackBoss2() {
            this.$store.commit("ATTACK_BOSS2", 200)
        },
        attackBoss3() {
            this.$bus.$emit("showAttackBossInfo", { name: this.name, attack: this.attack })
        },
    },
    mounted() {
        // 此時使用Vuex, 實例對象上有了this.$store
        // 包含常用的兩個fn commit/dispatch 兩個對象state/getters
        // console.log(this.$store.state)
    },
}
</script>
