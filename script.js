function addATodo() {
  let toAddTodo = document.getElementById("todo").value;

  console.log(toAddTodo);

  let addedTodo = document.createElement("li");
  let toDoDone = document.createElement("input");
  let toDoList = document.getElementById("ToDo-List");

  addedTodo.innerHTML = toAddTodo;
  toDoDone.setAttribute("type", "checkbox");
  toDoList.appendChild(addedTodo);
  toDoList.appendChild(toDoDone);
}
