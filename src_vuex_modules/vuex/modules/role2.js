const role2 = {
    namespaced: true,
    state: {
        name: "豬八戒",
        age: 21,
        attack: 400,
    },
    actions: {
        attackBoss: ({ state, commit, rootState }, val) => {
            commit("ATTACK_BOSS", { rootState, val })
        },
    },
    mutations: {
        ATTACK_BOSS: (state, { rootState, val }) => {
            console.log(state, rootState, val)
            rootState.worldBoss.hp -= val
        },
    },
    getters: {},
}

export default role2
