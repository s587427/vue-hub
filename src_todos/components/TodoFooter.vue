<template>
    <div v-show="todoCount">
       <label for="checkAll">
            <input type="checkbox" id="checkAll" v-model="isCheckAllTodo">
            已完成{{ todoDoneCount }} / 全部{{ todoCount }}
       </label>

       <button @click="deleteAllTodo">清除已完成任務</button>
    </div>
</template>


<script>
    export default{

        name: "TodoFooter",
        props: ["todos", "toggleAllTodo", "deleteAllTodo"],
        computed: {

            todoCount(){
                return this.todos.length
            },

            todoDoneCount(){

                let checkedCount = 0
                this.todos.forEach((todo, index)=>{
                    if(todo.done) checkedCount+=1
                })

                return checkedCount;
            },

            isCheckAllTodo:{
                // 計算屬性面可以用到其他計算屬性
                get(){
                    return this.todoCount === this.todoDoneCount
                },
                set(val){
                    this.toggleAllTodo(val)
                }
            }
        }
    }
</script>
