//Add array for done ToDos
const doneToDos = [];

//Function for adding a ToDo to the List of ToDos
function addATodo() {
  const toAddTodo = document.getElementById("todo").value;
  const addedTodo = document.createElement("li");
  const toDoDone = document.createElement("input");
  const toDoList = document.getElementById("todo-list");

  addedTodo.innerHTML = toAddTodo;
  toDoDone.setAttribute("type", "checkbox");
  toDoList.appendChild(addedTodo);
  addedTodo.appendChild(toDoDone);

  doneToDos.push(addedTodo);
  doneToDos.push(toDoDone);
}

//Function to remove the done ToDos from the List of ToDos
function removeDoneToDos() {
  for (todo of doneToDos) {
    if (todo.checked == true) {
      todo.parentElement.remove();
    }
  }
}
