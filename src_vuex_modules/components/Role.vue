<template>
    <div>
        沒有使用輔助函數寫法-{{ name }}, 攻擊力{{ attack }}
        <div>
            <button @click="attackBoss">attackBossByDispatch</button>
            <button @click="attackBoss2">attackBossByCommit</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Role",
    methods: {
        attackBoss() {
            // 配合命名空間
            this.$store.dispatch("role1/attackBoss", this.attack)
            // console.log(this.$store.state)
        },
        attackBoss2() {
            this.$store.commit("role1/ATTACK_BOSS", {
                rootState: this.$store.state,
                val: this.attack,
            })
        },
    },
    computed: {
        name: function () {
            return this.$store.state.role1.name
        },
        attack() {
            return this.$store.state.role1.attack
        },
    },
    mounted() {},
}
</script>
