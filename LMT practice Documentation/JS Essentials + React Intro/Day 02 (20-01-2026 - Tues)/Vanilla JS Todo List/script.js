const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerText = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
}
