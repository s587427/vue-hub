<template>
    <div>
        使用輔助函數寫法-{{ name }}, 攻擊力{{ attack }}
        <div>
            <button @click="attackBoss(attack)">attackBossByDispatch</button>
            <button @click="attackBossByCommit">attackBossByCommit</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex"

export default {
    name: "Role2",
    methods: {
        // 若methods名稱與action一樣可以用陣列寫法
        ...mapActions("role2", ["attackBoss"]),
        // ...mapActions("role2", {
        //     attackBoss: "attackBoss",
        // }),

        ...mapMutations("role2", {
            attackBoss2: "ATTACK_BOSS",
        }),

        attackBossByCommit() {
            this.attackBoss2({ rootState: this.$store.state, val: this.attack })
        },
    },
    computed: {
        ...mapState("role2", ["name", "attack"]),
    },
    mounted() {},
}
</script>
