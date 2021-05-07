const doneToDos = [];

function addATodo() {
  let toAddTodo = document.getElementById("todo").value;

  let addedTodo = document.createElement("li");
  let toDoDone = document.createElement("input");
  let toDoList = document.getElementById("ToDo-List");

  addedTodo.innerHTML = toAddTodo;
  toDoDone.setAttribute("type", "checkbox");
  toDoList.appendChild(addedTodo);
  addedTodo.appendChild(toDoDone);

  doneToDos.push(addedTodo);
  doneToDos.push(toDoDone);
}

function removeDoneToDos() {
  for (todo of doneToDos) {
    if (todo.checked == true) {
      todo.parentElement.remove();
    }
  }
}
