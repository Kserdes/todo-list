function getCompletedTasksArray() {
  return toDoList.filter((task) => task.completed);
}

function getActiveTasksArray() {
  return toDoList.filter((task) => !task.completed);
}

function deleteTask(index) {
  toDoList.splice(index -1, 1)

}

function clearCompletedTasks() {
  toDoList = toDoList.filter((task) => !task.completed)
}

function setCompletedTask(taskId){
  let task = toDoList.find(task => task.id == taskId);
  task.completed = true;
}
function setActiveTask(taskId){
  let task = toDoList.find(task => task.id == taskId);
  task.completed = false;
}
function addTask(taskName) {
  task = {
    id: toDoList.length + 1,
    name: taskName,
    completed: false,
  };
  toDoList.push(task);
}

function getButtonText() {
  let buttonText;
  statusButton.forEach((button) => {
    if (button.classList.contains("clicked")) {
      buttonText = button.textContent;
    }
  });
  return buttonText;
}

function setTaskLeftText(buttonText) {
  const itemCount = document.createElement("p");
  const itemsCompleted = toDoList.filter((task) => task.completed).length;
  const listSize = toDoList.length;

  if (buttonText === "All") {
    itemCount.textContent = `${listSize} left`;
  } else if (buttonText === "Active") {
    itemCount.textContent = `${listSize - itemsCompleted} active`;
  } else if (buttonText === "Completed") {
    itemCount.textContent = `${itemsCompleted} completed`;
  } else itemCount.textContent = `${listSize} left`;

  taskLeftContainer.innerHTML = "";
  taskLeftContainer.appendChild(itemCount);
}
