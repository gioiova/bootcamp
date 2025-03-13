interface Task {
  title : string;
}


let tasks: Task[] = [
  { title: "Clean Room" },
  { title: "Go to uni" },
  { title: "Do exercises" },
];

function displayTasks() : void {
  const taskList = document.getElementById("taskList") as HTMLUListElement;
  if(!taskList) return;

  taskList.innerHTML = "";
  tasks.forEach((task : Task) => {
    const li : HTMLLIElement = document.createElement("li");
    li.textContent = task.title;
    taskList.appendChild(li);
  });
}

displayTasks();

function addTask() {
  const taskInput = document.getElementById("taskInput") as HTMLInputElement;
  if(!taskInput) return;
  
  const newTaskTitle : string = taskInput.value.trim();


  if (newTaskTitle) {
    tasks.push({title : newTaskTitle});
    taskInput.value = "";
    displayTasks();
  }
}


const filterTasks = (tasks: Task[]): Task[] => {
  return tasks.filter((task: Task) => task.title.includes("Go"));
};

function displayFilteredTasks() : void {
  const filteredTasks = filterTasks(tasks);
  const filteredTasksList = document.getElementById("filteredTasks") as HTMLUListElement;
  if(!filteredTasksList) return;

  filteredTasksList.innerHTML = "";
  filteredTasks.forEach((task:Task) => {
    const li : HTMLLIElement = document.createElement("li");
    li.textContent = task.title;
    filteredTasksList.appendChild(li);
  });
}

displayFilteredTasks();