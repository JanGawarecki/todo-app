//Add array for added ToDos
const addedToDos = [];

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

  addedToDos.push(addedTodo);
  addedToDos.push(toDoDone);

  document.getElementById("todo").value = " ";
}

//Function to remove the done ToDos from the List of ToDos
function removeDoneToDos() {
  for (todo of addedToDos) {
    if (todo.checked == true) {
      let deleteToDoIndex = addedToDos.indexOf(todo.parentElement);
      addedToDos.splice(deleteToDoIndex, 2);
      todo.parentElement.remove();
    }
  }
}

//Function to show only done ToDos
function showOnlyDoneToDos() {
  for (todo of addedToDos) {
    if (todo.checked == false) {
      todo.parentElement.style.visibility = "hidden";
    } else {
      todo.parentElement.style.visibility = "visible";
    }
  }
}

//Function to show only open ToDos
function showOnlyOpenToDos() {
  for (todo of addedToDos) {
    if (todo.checked == true) {
      todo.parentElement.style.visibility = "hidden";
    } else {
      todo.parentElement.style.visibility = "visible";
    }
  }
}

//Function to make all ToDos visible
function showAllToDos() {
  for (todo of addedToDos) {
    todo.parentElement.style.visibility = "visible";
  }
}
