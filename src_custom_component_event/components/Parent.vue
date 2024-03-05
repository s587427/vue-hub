<template>
    <div :style="{padding: '8px',background:'pink' }">
        <h2> Parent,  Children Say: {{ childrenMsg }}</h2>

        <!-- 綁定自定義事件 @customEventName="xxx" | v-on:customEventName="xxx", 也可以透過ref綁定, 適合在mounted做 可以用於子傳父資料 -->
        <!-- 原生事件必須.native否則會當成自定義事件 -->
        <!-- 注意: 組件實例被銷毀其自定義事件都將無效包含所有子組件, 除了原生dom綁定的事件eg. click -->
        
        <Children @customEvent="showMsg" @click.native="clickChildren" ref="children"/>

        <!-- 一次有效 <Children @customEvent.once="showMsg" @click.native="clickChildren" ref="children"/> -->
    </div>
</template>

<script>

    import Children from "./Children.vue"

    export default {
        name: "Parent",
        data(){
            return {
                childrenMsg: ""
            }
        },

        components: {
            Children
        },

        methods:{
            showMsg(msg, ...params){
                console.log(msg, params)
                this.childrenMsg = msg
            },
            sayHello(){
                // 這邊的this已經綁定在了自身組件實例, 故不會有匿名函數的問題
                console.log(this, "hello");
            },
            clickChildren(){
                // console.log("Children 被點擊");
            }
        },

        mounted(){

           // 透過ref綁定自定義事件, 可以更靈活如延遲3秒後再綁定
           this.$refs.children.$on("customEvent2", this.sayHello)

           // 匿名函數必須要用箭頭函數這樣this, 才會指向當前組件的實例, 否則會是觸發這個事件的組件實例
           this.$refs.children.$on("customEvent3", () => {
                console.log(this)
           })
            
           // 一次有效寫法
           // this.$refs.children.$once
        }
    }

</script>

