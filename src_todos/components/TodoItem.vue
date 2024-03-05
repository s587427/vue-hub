<template>

     <li>
        <label :for="todo.id">
            <input type="checkbox":id="todo.id" :checked="todo.done" @click="toggleTodo(todo.id)">
            {{ todo.title }}
        </label>

        <button @click="deleteTodoById($event, todo.id)">Delete</button>
    </li>
</template>


<script>

    export default {
        name: "TodoItem",
        props: ["todo", "toggleTodo", "deleteTodoById"],
    }
</script>


