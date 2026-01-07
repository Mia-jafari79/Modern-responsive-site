const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let draggedItem = null;

/* ---------- ADD TODO (SUBMIT) ---------- */
form.addEventListener("submit", addTodo);

function addTodo(e) {
  e.preventDefault();

  const text = todoInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.className = "todo";
  li.draggable = true;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const customCheckbox = document.createElement("label");
  customCheckbox.className = "custom-checkbox";
  customCheckbox.innerHTML = `<i class="ri-check-line"></i>`;

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-button";
  deleteBtn.innerHTML = `<i class="ri-delete-bin-6-line"></i>`;

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.append(checkbox, customCheckbox, span, deleteBtn);
  todoList.appendChild(li);

  enableDragAndDrop(li);

  todoInput.value = "";
  todoInput.focus();
}

/* ---------- DRAG & DROP ---------- */
function enableDragAndDrop(item) {
  item.addEventListener("dragstart", () => {
    draggedItem = item;
    item.classList.add("dragging");
  });

  item.addEventListener("dragend", () => {
    draggedItem = null;
    item.classList.remove("dragging");
  });

  item.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (!draggedItem || draggedItem === item) return;

    const rect = item.getBoundingClientRect();
    const middle = rect.top + rect.height / 2;

    if (e.clientY > middle) {
      item.after(draggedItem);
    } else {
      item.before(draggedItem);
    }
  });
}
