const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const editModal = document.getElementById("editModal");
const editInput = document.getElementById("editInput");
const saveEditBtn = document.getElementById("saveEditBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");

let currentTaskText = null;

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

saveEditBtn.addEventListener("click", saveEditedTask);

cancelEditBtn.addEventListener("click", closeEditModal);

editInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    saveEditedTask();
  }
});

editModal.addEventListener("click", function (event) {
  if (event.target === editModal) {
    closeEditModal();
  }
});

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;

  const buttonBox = document.createElement("div");
  buttonBox.className = "buttons";

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.className = "done-btn";
  doneBtn.onclick = function () {
    span.classList.toggle("done");
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = function () {
    openEditModal(span);
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    li.remove();
  };

  buttonBox.appendChild(doneBtn);
  buttonBox.appendChild(editBtn);
  buttonBox.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonBox);

  taskList.appendChild(li);

  taskInput.value = "";
}

function openEditModal(taskTextElement) {
  currentTaskText = taskTextElement;
  editInput.value = taskTextElement.textContent;
  editModal.classList.add("show");
  editInput.focus();
}

function closeEditModal() {
  editModal.classList.remove("show");
  editInput.value = "";
  currentTaskText = null;
}

function saveEditedTask() {
  const newText = editInput.value.trim();

  if (newText === "") {
    alert("Task cannot be empty");
    return;
  }

  if (currentTaskText) {
    currentTaskText.textContent = newText;
  }

  closeEditModal();
}
