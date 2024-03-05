<template>
    <div>
        <!-- 不借用computed -->

        <div id="boss-info">
            <h1>(state)當前Boss血量{{ $store.state.worldBoss.hp }}</h1>
            <h2>(getters)Boss死亡下一次血量{{ $store.getters.bossBigHp }}</h2>

            <!--  借用computed -->
            <h1>(state)當前Boss血量{{ worldBoss.hp }}</h1>
            <h2>(getters)Boss死亡下一次血量{{ bossBigHp }}</h2>

            <button @click="addBossHp(2000)">addBossHpByDispatch + 2000</button>
            <button @click="addBossHpByCommit(2000)">addBossHpByCommit + 2000</button>
        </div>

        <Role />
        <hr />
        <Role2 />
    </div>
</template>

<script>
import Role from "./components/Role.vue"
import Role2 from "./components/Role2.vue"

import { mapState, mapGetters, mapActions, mapMutations, Vue } from "vuex"

export default {
    name: "App",
    components: {
        Role,
        Role2,
    },
    methods: {
        showAttackBossInfo(val) {
            console.log(`我被${val.name}攻擊, 受到傷害${val.attack}`)
        },

        // 不借用輔助函數寫法
        // addBossHp(val) {
        //     this.$store.dispatch("addBossHp", val)
        // },
        // addBossHpByCommit(val) {
        //     this.$store.commit("ADD_BOOS_HP_BY_COMMIT", val)
        // },

        // 借用輔助函數寫法
        ...mapActions(["addBossHp"]),
        ...mapMutations({ addBossHpByCommit: "ADD_BOOS_HP_BY_COMMIT" }),
    },
    computed: {
        // 不借用輔助函數寫法
        // worldBoss(){
        //     return this.$store.state.worldBoss
        // },
        // bossBigHp(){
        //     return this.$store.getters.bossBigHp
        // },

        // 借用輔助函數寫法
        // ...mapState({worldBoss :"worldBoss"}),
        ...mapState(["worldBoss"]),
        ...mapGetters(["bossBigHp"]),
    },
    mounted() {
        console.log(this, this.$store)
        // 利用bus event傳遞數據
        this.$bus.$on("showAttackBossInfo", this.showAttackBossInfo)
    },
}
</script>

<style scoped>
#boss-info {
    margin-bottom: 32px;
    padding: 8px;
    border: 1px solid black;
}
h1 {
    margin-bottom: 16px;
}
</style>
