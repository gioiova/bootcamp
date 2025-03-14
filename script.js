const tasks = ["Clean Room", "Go to uni", "Do exercises"];

const displayTasks = () => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = tasks.map((task) => `<li>${task}</li>`).join("");
};

displayTasks();

const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const { value: newTask } = taskInput;

  if (newTask) {
    tasks.push(newTask);
    taskInput.value = "";
    displayTasks();
    displayFilteredTasks();
  }
};

const deleteTask = () => {
  const deleteInput = document.getElementById("deleteInput");
  const { value: deletedTask } = deleteInput;

  if (deletedTask) {
    const taskIndex = tasks.findIndex(
      (task) => task.toLowerCase().trim() === deletedTask.toLowerCase().trim()
    );

    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      displayTasks();
      displayFilteredTasks();
    } else {
      alert("task not found!");
    }

    deleteInput.value = "";
  }
};

const filterTasks = (tasks) => tasks.filter((task) => task.includes("Go"));

const displayFilteredTasks = () => {
  const filteredTasks = filterTasks(tasks);
  const filteredTasksList = document.getElementById("filteredTasks");

  filteredTasksList.innerHTML = filteredTasks
    .map((task) => `<li>${task}</li>`)
    .join("");
};

displayFilteredTasks();
