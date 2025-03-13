let tasks = [
    { title: "Clean Room" },
    { title: "Go to uni" },
    { title: "Do exercises" },
];
function displayTasks() {
    const taskList = document.getElementById("taskList");
    if (!taskList)
        return;
    taskList.innerHTML = "";
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task.title;
        taskList.appendChild(li);
    });
}
displayTasks();
function addTask() {
    const taskInput = document.getElementById("taskInput");
    if (!taskInput)
        return;
    const newTaskTitle = taskInput.value.trim();
    if (newTaskTitle) {
        tasks.push({ title: newTaskTitle });
        taskInput.value = "";
        displayTasks();
    }
}
const filterTasks = (tasks) => {
    return tasks.filter((task) => task.title.includes("Go"));
};
function displayFilteredTasks() {
    const filteredTasks = filterTasks(tasks);
    const filteredTasksList = document.getElementById("filteredTasks");
    if (!filteredTasksList)
        return;
    filteredTasksList.innerHTML = "";
    filteredTasks.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task.title;
        filteredTasksList.appendChild(li);
    });
}
displayFilteredTasks();
