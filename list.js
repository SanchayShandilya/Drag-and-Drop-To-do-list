const taskList = document.getElementById("taskList");
let draggedTask = null;

taskList.addEventListener("dragstart", (event) => {
    draggedTask = event.target;
    event.target.style.opacity = "0.5";
});

taskList.addEventListener("dragend", (event) => {
    event.target.style.opacity = "1";
});

taskList.addEventListener("dragover", (event) => {
    event.preventDefault();
});

taskList.addEventListener("drop", (event) => {
    event.preventDefault();
    if (event.target.tagName === "LI") {
        event.target.style.opacity = "1";
        taskList.insertBefore(draggedTask, event.target);
    }
});
