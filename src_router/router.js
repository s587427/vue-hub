import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import Post from "./pages/Post.vue"

Vue.use(VueRouter)

// 我們稱根據route變化的組件稱為路由通常會存放在pages | views資料夾
const router = new VueRouter({
    mode: "history", // 後端必須要有相關配置不然會發生notfound404 hash路由是因為#後面的http請求不會發給後端
    routes: [
        {
            name: "hoo", // 幫route取名
            path: "/home",
            component: Home,
            meta: { requiresAuth: true }, // 可以添加克制化資料
            beforeEnter: (to, from, next) => {
                // 可以做與router.beforeEach的事
                console.log("home-route-exclusive")
                next()
            },
            // 嵌套路由
            children: [
                {
                    path: "post", // 此時不需要再加/
                    component: Post,
                },
                {
                    // dymaic route :
                    name: "yee",
                    path: "post/:id", // 此時不需要再加/
                    component: Post,
                    // 路由組件傳參(3種寫法)
                    // props: true, // route.params 将会被设置为组件属性。
                    // props: { data1: "value" }, // 等同於props接收的
                    // 可拿到params與query然後再回傳對象給props最強大
                    props: (route) => ({ id: route.params.id, search: route.query.search }),
                },
            ],
        },
        {
            path: "/about",
            component: About,
            meta: { requiresAuth: true },
        },
    ],
})

router.beforeEach((to, from, next) => {
    // 在改變路由進入前都會調用可以在這邊判斷一些邏輯例如權限
    // 符合的話再放行 next
    console.log("router-beforeEach", { to, from })
    next()
})

router.afterEach((to, from) => {
    // 在改變路由進入後都會調用
    // 符合的話再放行 next
    console.log("router-afterEach", { to, from })
})

export default router
