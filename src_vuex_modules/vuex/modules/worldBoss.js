const worldBoss = {
    namespaced: true,
    state: {
        hp: 1000,
        attack: 2000,
        name: "牛魔王",
    },
    actions: {},
    mutations: {},
    getters: {
        bossBigHp: (state) => {
            // 局部內的state
            console.log(state)
            return state.hp * 10
        },
    },
}

export default worldBoss
