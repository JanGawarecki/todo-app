function addATodo() {
  let toAddTodo = document.getElementById("todo").value;

  console.log(toAddTodo);

  let addedTodo = document.createElement("li");
  let toDoList = document.getElementById("ToDo-List");

  addedTodo.innerHTML = toAddTodo;
  toDoList.appendChild(addedTodo);
}
