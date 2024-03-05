// 定義plugin

export default {
    install(Vue, ...args) {
        // 可以做一些全局配置

        console.log(Vue, args)

        // Vue.filter(...)
        // Vue.directive(...)
        // Vue.mixin(...)

        Vue.prototype.customFn = function () {
            alert("hello world")
        }
    },
}
