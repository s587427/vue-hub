<template>

  <h2> 我是{{name}}, 今年{{age}}歲</h2>
</template>


<script>
    export default {
        name: "Person",
        data(){
            return {
                name: "孫悟空",
                age: 21,
            }
        }
    }

</script>

<style></style>