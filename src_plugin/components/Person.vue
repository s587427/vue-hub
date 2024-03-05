<template>

    <h2> {{msg}} 我是{{name}}, 今年{{age}}歲</h2>

</template>

<script>

    export default {
        name: "Person",

        data(){
            return {
                msg: "大家好", 
                name: "sheng",
                age: 20,
            }
        },
        mounted(){
            console.log("Person mounted");
        },

    }

</script>

