const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const doneBtn = document.createElement("button");
  doneBtn.className = "done-btn";
  doneBtn.textContent = "Done";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  doneBtn.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  actions.appendChild(doneBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
  taskInput.value = "";
}
