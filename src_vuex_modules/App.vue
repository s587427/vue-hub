<template>
    <div>
        <!-- 全局 -->
        <div>當前所有狀態: {{ this.$store.getters.testGetter }}</div>
        <div id="boss-info">
            <!-- 直接取法 -->
            <!-- <h2>(state)當前Boss血量{{ $store.state.worldBoss.hp }}</h2> -->

            <!-- computed取法 -->
            <div>
                Boss: {{ bossName }} 血量: {{ bossHp }}, 攻擊力: {{ bossAttack }}, 困難模式血量:{{
                    bossBigHp
                }}
            </div>
            <div>正在跟{{ role1Name }}和{{ role2Name }}戰鬥中...</div>
        </div>

        <Role />
        <hr />
        <Role2 />
    </div>
</template>

<script>
import Role from "./components/Role.vue"
import Role2 from "./components/Role2.vue"

import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

export default {
    name: "App",
    components: {
        Role,
        Role2,
    },
    computed: {
        // 第一種寫法
        ...mapState("worldBoss", {
            bossHp: (state) => state.hp,
            bossAttack: (state) => state.attack,
            bossName: (state) => state.name,
        }),

        // 第二種寫法
        ...mapState({
            role1Name: (state) => state.role1.name,
            role1Attack: (state) => state.role1.attack,
        }),

        ...mapState("role2", {
            role2Name: (state) => state.name,
            role2Attack: (state) => state.attack,
        }),

        // $store.getters["worldBoss/bossBigHp"] 直接取法
        ...mapGetters("worldBoss", ["bossBigHp"]),
    },
    mounted() {
        console.log(this, this.$store)
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
div {
    margin: 4px;
}
</style>
