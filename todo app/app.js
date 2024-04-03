const submitButton = document.getElementById("submit");
const listItems = document.querySelector(".list-items");
let taskDone = document.getElementById("task-done");
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function deleteTask() {
  const taskItem = this.parentNode;
  taskItem.remove();
}

submitButton.addEventListener("click", function () {
  let input = document.getElementById("add-task").value;

  const li = document.createElement("li");
  const p = document.createElement("p");
  const deleteButton = document.createElement("div");
  let alert = document.getElementById("alert");

  if (!input == 0) {
    alert.style.display = "none";
    input = capitalize(input);
    deleteButton.className = "delete";
    li.className = "item";
    deleteButton.textContent = "Delete";

    listItems.appendChild(li);
    li.appendChild(p);
    li.appendChild(deleteButton);
    p.textContent = input;
    document.getElementById("add-task").value = "";

    deleteButton.addEventListener("click", deleteTask);
  } else {
    alert.style.display = "flex";
  }
});

taskDone.addEventListener("click", function () {
  let numListDone = document.getElementsByClassName("numTaskDone");
  let popup = document.getElementById("done");
  let background = document.getElementById("background");
  popup.style.display = "flex";
  background.style.display = "block";
});
