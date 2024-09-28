const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");
const lanes = document.getElementById("lanes")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;
  addNewLane(value)
});

function addNewLane(title) {
  const newLane = document.createElement("div")
  newLane.classList.add("swim-lane")
  const laneHeader = document.createElement("div")
  laneHeader.classList.add("laneHeader")
  const laneHeading = document.createElement("h3")
  const addBtn = document.createElement("span")
  addBtn.classList.add("listAddBtn")
  addBtn.innerText = "Add +"
  laneHeading.innerText = title
  laneHeading.classList.add("heading")
  laneHeader.appendChild(laneHeading)
  laneHeader.appendChild(addBtn)
  newLane.appendChild(laneHeader)
  lanes.appendChild(newLane)
}


// for adding new todo
  // newTask.classList.add("task");
  // newTask.setAttribute("draggable", "true");
  // newTask.innerText = value;

  // newTask.addEventListener("dragstart", () => {
  //   newTask.classList.add("is-dragging");
  // });

  // newTask.addEventListener("dragend", () => {
  //   newTask.classList.remove("is-dragging");
  // });

  // todoLane.appendChild(newTask);

  // input.value = "";