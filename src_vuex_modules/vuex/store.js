import Vue from "vue"
import Vuex from "vuex"
import modules from "./modules"
Vue.use(Vuex)

const store = new Vuex.Store({
    // 這邊一定都是全局
    state: {},
    actions: {},
    mutations: {},
    getters: {
        testGetter(state) {
            return JSON.stringify(state)
        },
    },
    // 模塊裡面可以決定是不是全局透過namespaced
    modules,
})

export default store
