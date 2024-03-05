const role1 = {
    namespaced: true, // 默認default是全局, 全局可以讓同個mutataion/action做出響應
    state: {
        name: "孫悟空",
        age: 18,
        attack: 200,
    },
    actions: {
        attackBoss: ({ state, commit, rootState }, val) => {
            // console.log(state, commit, rootState, val, "@@")
            // state 是模塊內的局部對象
            // rootState整個根state
            commit("ATTACK_BOSS", { rootState, val })
        },
    },
    mutations: {
        ATTACK_BOSS: (state, { rootState, val }) => {
            // state 是模塊內的局部對象
            console.log(state, rootState, val)
            rootState.worldBoss.hp -= val
        },
    },
    getters: {
        // getter1: (state, getters, rootState) => {},
    },

    // 裡面還可以再進行模塊嵌套
    // modules: {
    // }
}

export default role1
