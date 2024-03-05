<template>

    <h2> {{msg}} 我是{{name}}, 今年{{age}}歲, 虛歲{{myAge}}</h2>

</template>


<script>

    export default {
        name: "Person",
        data(){
            return {
                msg: "大家好",
                myAge: this.age + 1,
            }
        },

        // 配置接收的props, 接收優先級高於自身data

        // 簡單寫法
        // props: ["name", "age"],

        // 類型限制寫法
        // props: {
        //     name: String,
        //     age: Number,
        // },
        
        // 最高級寫法
        props: {
            name: {
                type: String,
                default: "遺失名稱",
            },  
            age: {
                type: Number,
                required: true,
            }
        }     
    }

</script>

