<template>
   <ul>
        <TodoItem 
            v-for="(todo, index) in todos" 
            :todo="todo" 
            :toggleTodo="toggleTodo"
            :deleteTodoById="deleteTodoById" 
            :key="todo.id"
        />
   </ul>
</template>


<script>

    import TodoItem from "./TodoItem.vue"

    export default{

        name: "TodoList",
        props:["todos", "toggleTodo", "deleteTodoById"],
        components: {
            TodoItem,
        }
       
    }

</script>