<template>
   <div>
        <h2>{{name}}</h2>
        <button @click="shareMethod">測試MixinMethdos</button>
   </div>
</template>


<script>

    import { mixin, mixin2 } from "../mixin.js"


    export default{
        name: "Monster",
        data(){
            return {
                // 與mixin有相同的資料會被會使用這裡蓋調mixin
                shareX: "moster define shareX",
                name: "我是怪物"
            }
        },
        // mixins裡的hook都會被執行, 測試結果順序mixin mounted > 自身 mounted
        mounted(){
            console.log("Monster mounted");
        },
        mixins: [mixin, mixin2]
    }

</script>