const app = new Vue({
 el: "#root",
 data: {
  todos: [
   {
    name: "Venerdi, ore 10:00 - Prove libere 1",
    done: true,
   },
   {
    name: "Venerdi, ore 14:00 - Prove libere 2",
    done: true,
   },
   {
    name: "Sabato, ore 11:00 - Prove libere 3",
    done: false,
   },
   {
    name: "Sabato, ore 14:00 - Qualifica",
    done: false,
   },
   {
    name: "Domenica, ore 14:00 - Gara",
    done: false,
   },
  ],
  newTodo: "",
 },
 methods: {
  addTodo: function () {
   if (this.newTodo != "") {
    this.todos.push({
     name: this.newTodo,
     done: false,
    });
    this.newTodo = "";
   }
  },
  removeTodo: function (todoIndex) {
   this.todos.splice(todoIndex, 1);
  },
 },
});
