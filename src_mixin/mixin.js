// 共享配置 data, hook, methods, ... 等等

export const mixin = {
    data() {
        return {
            shareX: "sx",
            shareY: "sy",
        }
    },
    methods: {
        shareMethod() {
            console.log(this, "call shareMethod in mixin")
        },
    },
    mounted() {
        console.log("mixin mounted")
    },
}

export const mixin2 = {
    data() {
        return {
            shareZ: "shareZ",
        }
    },
}
