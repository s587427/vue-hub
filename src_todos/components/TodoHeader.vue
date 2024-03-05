<template>
   <div>
      <label for="todo-input">代辦事項</label>  
      <input id="todo-input" type="text" placeholder="請輸入代辦事項" @keyup.enter="handleKeyUp"/>
   </div>
 </template>
 
 
 <script>
    export default{
      name: "TodoHeader",
      methods: {
         handleKeyUp(e){  
            // console.log(e.keyCode);
            if( e.target.value == ""){
               alert("請輸入代辦事項")
               return
            }

            this.addTodo({
               id: crypto.randomUUID(),
               title: e.target.value,
               done: false
            })

            e.target.value = ""
         }
      },
      props:["addTodo"]
    }
 </script>
