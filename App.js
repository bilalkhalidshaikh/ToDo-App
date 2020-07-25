var todoInput = document.getElementById("Todo_Input");
var todoList = document.getElementById("todoList");
var editInput = document.createElement("input");
editInput.type = "text";

function addTodo() {
  var li = document.createElement("li");
  li.className = "li";
  var hr = document.createElement("hr");
  var deleteBtn = document.createElement("i");
  deleteBtn.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
  var editBtn = document.createElement("i");
  editBtn.innerHTML =
    "<i class='fa fa-pencil-square-o' aria-hidden='true'></i>";
  if (todoInput.value === "") {
    alert("Please Enter ToDo....");
  } else {
    var todoText = document.createTextNode(todoInput.value);
  }
  editBtn.className = "editbtn";
  deleteBtn.className = "delbtn";
  deleteBtn.setAttribute("onclick", "delBtn(this)");
  editBtn.setAttribute("onclick", "editBtn(this)");

  todoList.appendChild(li);
  todoList.appendChild(hr);
  li.appendChild(todoText);
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  todoInput.value = "";
}
function delBtn(e) {
  e.parentNode.remove();
}

function editBtn(e) {
  var todoItem = e.parentNode.firstChild.nodeValue;
  var editValue = prompt("Enter edit ToDO...", todoItem);
  e.parentNode.firstChild.nodeValue = editValue;
}

function delAll() {
  todoList.remove();
}
