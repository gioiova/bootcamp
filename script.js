hoistedFunct();

function hoistedFunct() {
  console.log("im hoisted");
}

let tasks = ["Clean Room", "Go to uni", "Do exercises"];

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}

displayTasks();

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const newTask = taskInput.value;

  if (newTask) {
    tasks.push(newTask);
    taskInput.value = "";
    displayTasks();
  }
}

const filterTasks = function (tasks) {
  return tasks.filter((task) => task.includes("Go"));
};

function displayFilteredTasks() {
  const filteredTasks = filterTasks(tasks);
  const filteredTasksList = document.getElementById("filteredTasks");
  filteredTasksList.innerHTML = "";
  filteredTasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    filteredTasksList.appendChild(li);
  });
}

displayFilteredTasks();
