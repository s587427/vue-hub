<template>

   <div :style="{ padding: '4px', background:'yellow' }">
        <h2>Children</h2>
        <button @click="handleClick">點我傳值給parent</button>
        <button @click="handleUnBindClick">解除傳值給parent事件</button>
   </div>
    
</template>

<script>

    export default {

        name: "Children",
        methods:{
            handleClick(){
                // 觸發自定義事件
                this.$emit("customEvent", "hello world", 2)
                this.$emit("customEvent2")
                this.$emit("customEvent3")
            },
            handleUnBindClick(){

                // 單一事件綁定解除
                //this.$off("customEvent")
                
                // 多事件綁定解除
                // this.$off(["customEvent", ...])

                // 全事件綁定解除
                this.$off()
                
            }
        }

    }
</script>

