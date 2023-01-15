function newTodo(value, completed = false) {
  const todo = document.createElement("div");
  const todoText = document.createElement("p");
  const todoCheckBox = document.createElement("input");
  const todoCheckBoxLabel = document.createElement("label");
  const todoCross = document.createElement("span");

  todoText.textContent = value;
  todoCheckBox.type = "checkbox";
  todoCheckBox.id = `${value.replace(/\s+/g, "")}`;
  todoCheckBox.name = `${value.replace(/\s+/g, "")}`;
  todoCheckBox.title = "checkbox";
  todoCheckBox.checked = completed;
  todoCheckBoxLabel.htmlFor = `${value.replace(/\s+/g, "")}`;

  todoCheckBoxLabel.addEventListener("click", function (e) {
    if (todoCheckBox.checked) {
      todoText.classList.remove("strikethrough");
      todoCheckBoxLabel.classList.remove("active");
      updateTodos(value, false);
      countComplted();
    } else {
      updateTodos(value, true);
      countComplted();
      todoText.classList.add("strikethrough");
      todoCheckBoxLabel.classList.add("active");
    }
  });

  todoText.addEventListener("click", function (e) {
    if (todoCheckBox.checked) {
      todoCheckBox.checked = false;
      todoText.classList.remove("strikethrough");
      todoCheckBoxLabel.classList.remove("active");
      updateTodos(value, false);
      countComplted();
    } else {
      todoCheckBox.checked = true;
      updateTodos(value, true);
      countComplted();
      todoText.classList.add("strikethrough");
      todoCheckBoxLabel.classList.add("active");
    }
  });

  todoCross.addEventListener("click", function (e) {
    e.target.parentElement.remove();
    todos = todos.filter((t) => t.value !== value);
    countComplted();
    if (todos.length === 0) {
      updateUi(true);
    }
  });

  todo.classList.add("todo");
  todoCheckBoxLabel.classList.add("circle");
  if (todoCheckBox.checked) {
    todoCheckBoxLabel.classList.add("active");
    todoText.classList.add("strikethrough");
  }
  todoCross.classList.add("cross");

  todo.appendChild(todoCheckBox);
  todo.appendChild(todoCheckBoxLabel);
  todo.appendChild(todoText);
  todo.appendChild(todoCross);

  todosContainer.appendChild(todo);
}

function isBefore(elem1, el2) {
  for (
    var cur = elem1.previousSibling;
    cur && cur.nodeType !== 9;
    cur = cur.previousSibling
  )
    if (cur === el2) return true;
  return false;
}

