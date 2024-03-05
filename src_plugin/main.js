import Vue from "vue"
import App from "./App.vue"

import plugins from "./plugins"

Vue.config.productionTip = false

// 使用插件
Vue.use(plugins, "data1", "data2")

new Vue({
    render: (h) => h(App),
}).$mount("#app")

// console.dir(Vue.prototype.customFn())
