import Vue from "vue"
import App from "./App.vue"
import store from "./vuex/store"

const vm = new Vue({})

Vue.config.productionTip = false
Vue.prototype.$bus = vm

new Vue({
    render: (h) => h(App),
    store,
}).$mount("#app")
