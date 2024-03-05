<template>

    <div id="app">   
        <div>
            <TodoHeader :addTodo="addTodo"/>     
            <TodoList 
                :todos="todos" 
                :toggleTodo="toggleTodo"
                :deleteTodoById="deleteTodoById"
            />
            <TodoFooter
                :todos="todos"
                :toggleAllTodo="toggleAllTodo"
                :deleteAllTodo="deleteAllTodo"
            />
        </div>
    </div>

</template>

<script>

    import TodoHeader from "./components/TodoHeader.vue"
    import TodoList from "./components/TodoList.vue"
    import TodoFooter from "./components/TodoFooter.vue"

    export default {
        name: "App",
        data(){
            return {
                todos: JSON.parse(localStorage.getItem("todos")) ?? [{id: 1, title: "等等要吃飯", done:false}]
            }
        },

        methods:{

            addTodo(todoObj){
                this.todos = [...this.todos, todoObj]
            },

            toggleTodo(id){      

                this.todos.map((todo)=>{
                    if(id === todo.id) todo.done = !todo.done
                    return todo
                })
            },

            toggleAllTodo(isChecked){

                this.todos = this.todos.map((todo)=>{
                    todo.done = isChecked
                    return todo
                })
            },

            deleteTodoById(e, id){
                console.log(e.target)
                this.todos = this.todos.filter((todo)=> id !== todo.id)
            },

            deleteAllTodo(){
                this.todos = this.todos.filter((todo)=> todo.done === false)
            }

        },
       
        components: {
            TodoHeader,
            TodoList,
            TodoFooter,
        },

        watch: {
            todos: {
                deep: true,
                handler(newVal, oldVal){
                    localStorage.setItem("todos", JSON.stringify(newVal))
                }
            }
        }
    }

    
</script>
