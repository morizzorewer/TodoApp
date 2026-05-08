const inputwrapper1=document.getElementById("inputwrapper1");
const inputbox1=document.getElementById("inputbox1");
const taskArea = document.getElementById("task-area");
const Addbutton=document.getElementById("Add-button");


Addbutton.addEventListener("click", () => {
  const task = inputbox1.value.trim();
  if (task) {
    // Create task card
    const card = document.createElement("div");
    card.className = "task-card";

    // Task text
    const span = document.createElement("span");
    span.textContent = task;

    // Buttons
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    const clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear";
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";

    // Button actions
    updateBtn.addEventListener("click", () => {
      const newTask = prompt("Enter new task:");
      if (newTask) span.textContent = newTask;
    });
    deleteBtn.addEventListener("click", () => card.remove());
    clearBtn.addEventListener("click", () => span.textContent = "");
    doneBtn.addEventListener("click", () => {
      span.style.textDecoration = "line-through";
    });

    // Put everything together
    card.appendChild(span);
    card.appendChild(updateBtn);
    card.appendChild(deleteBtn);
    card.appendChild(clearBtn);
    card.appendChild(doneBtn);

    // Add card to task area
    taskArea.appendChild(card);

    inputbox1.value = ""; // clear input
  }
});