const addTaskInput = document.querySelector("#add-task-input");
const todoContainer = document.querySelector(".todo-container");
const clearCompletedButton = document.querySelector(".status-clear");
const taskLeftContainer = document.querySelector(".items-left");
const statusButton = document.querySelectorAll(".status-button");
let completedTasks = [];

createToDoList(toDoList);

addTaskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask(addTaskInput.value);
    updateView();
  }
});

todoContainer.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".delete-button");
  const checkbox = event.target.closest(".checkbox");

  if (deleteButton) {
    const taskId = parseInt(
      deleteButton.closest(".task").querySelector(".checkbox").dataset.taskId
    );
    console.log(taskId)
    deleteTask(taskId);
    updateView();
  }

  if (checkbox) {
    const toggleCheckbox = checkbox.closest(".task");
    const taskId = checkbox.closest(".task").querySelector(".checkbox").dataset.taskId;
    if (toggleCheckbox) {
      if (!toggleCheckbox.classList.contains("checked")) {
        toggleCheckbox.classList.add("checked");
        setCompletedTask(taskId);
        updateView();
      } else {
        toggleCheckbox.classList.remove("checked");
        setActiveTask(taskId);
        updateView();
      }
    }
  }
});
//Sortowanie widoku przy kliknięciu przycisku
statusButton.forEach((button) => {
  button.addEventListener("click", () => {
    statusButton.forEach((active) => active.classList.remove("clicked"));
    button.classList.add("clicked");
    updateView();
  });
});
//Usuwanie zadań ukończonych po kliknięciu przycisku
clearCompletedButton.addEventListener("click", () => {
  clearCompletedTasks();
  updateView();
});
