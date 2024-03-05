import Vue from "vue"
import App from "./App.vue"
import store from "./vuex/store"

const vm = new Vue({})

Vue.config.productionTip = false

new Vue({
    render: (h) => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    },
}).$mount("#app")
