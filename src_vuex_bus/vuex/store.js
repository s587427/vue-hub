import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// 資料
const state = {
    worldBoss: {
        hp: 1000,
        attack: 2000,
        name: "黑魔法師",
    },
}

// 可以一些業務邏輯
// (使用dispatch來對應action, action裡的callback在commit給mutations)
// 第一個callback參數還有小型的store屬性及方法很有用
const actions = {
    attackBoss: (context, value) => {
        // 其實可以直接在component發起僅限於無業務邏輯但是這樣會無法讓devtool偵測
        context.commit("ATTACK_BOSS", value)
    },
    addBossHp: (context, value) => {
        context.commit("ADD_BOSS_HP", value)
    },
}

// 直接修改資料的地方(業務邏輯不應該在這邊做), 過程是同步的
// callback僅接收兩個參數
const mutations = {
    ATTACK_BOSS: (state, value) => {
        // console.log(state, value)
        if (state.worldBoss.hp === 0) {
            alert("boss die")
        }
        state.worldBoss.hp = state.worldBoss.hp - value < 0 ? 0 : state.worldBoss.hp - value
    },
    ATTACK_BOSS2: (state, value) => {
        // console.log(state, value)
        if (state.worldBoss.hp === 0) {
            alert("boss die")
        }
        state.worldBoss.hp = state.worldBoss.hp - value < 0 ? 0 : state.worldBoss.hp - value
    },
    ADD_BOSS_HP: (state, value) => {
        state.worldBoss.hp += value
    },
    ADD_BOOS_HP_BY_COMMIT: (state, value) => {
        state.worldBoss.hp += value
    },
}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    // 類似computed屬性, 避免重用components時還需要複製一次computed的函數
    getters: {
        bossBigHp: (state) => {
            return state.worldBoss.hp * 10
        },
    },
})

export default store
