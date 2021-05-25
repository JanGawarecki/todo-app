//Add array for added ToDos
const newToDo = [];

//Function for adding a ToDo to the List of ToDos
function addATodo() {
  const toAddTodo = document.getElementById("todo").value;

  if (toAddTodo.length >= 6) {
    const addedTodo = document.createElement("li");
    const toDoDone = document.createElement("input");
    const toDoList = document.getElementById("todo-list");

    addedTodo.innerHTML = toAddTodo;
    toDoDone.setAttribute("type", "checkbox");
    toDoDone.setAttribute("data-cy", "todo-item");
    toDoList.appendChild(addedTodo);
    addedTodo.appendChild(toDoDone);

    newToDo.push(addedTodo);
    newToDo.push(toDoDone);
  }

  document.getElementById("todo").value = " ";
}

//Feature allowing to add todos when pressing enter in the textbox
const textBox = document.getElementById("todo");
textBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addATodo();
  }
});

//Function to remove the done ToDos from the List of ToDos
function removeDoneToDos() {
  for (todo of newToDo) {
    if (todo.checked == true) {
      let deleteToDoIndex = newToDo.indexOf(todo.parentElement);
      newToDo.splice(deleteToDoIndex, 2);
      todo.parentElement.remove();
    }
  }
}

//Function to show only done ToDos
function showOnlyDoneToDos() {
  for (todo of newToDo) {
    if (todo.checked == false) {
      todo.parentElement.style.visibility = "hidden";
    } else {
      todo.parentElement.style.visibility = "visible";
    }
  }
}

//Function to show only open ToDos
function showOnlyOpenToDos() {
  for (todo of newToDo) {
    if (todo.checked == true) {
      todo.parentElement.style.visibility = "hidden";
    } else {
      todo.parentElement.style.visibility = "visible";
    }
  }
}

//Function to make all ToDos visible
function showAllToDos() {
  for (todo of newToDo) {
    todo.parentElement.style.visibility = "visible";
  }
}
