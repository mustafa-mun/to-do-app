import editIcon from "../assets/pencil.png";
import closeIcon from "../assets/cancel.png";

export default function addTasksToDOM(parent, taskTitle, taskDate, count) {
  const taskContainer = document.createElement("div");
  taskContainer.className = "task";
  taskContainer.id = `task${count}`;

  const taskLeftSectionContainer = document.createElement("div");
  taskLeftSectionContainer.className = "task-left-container";

  const priorityColor = document.createElement("div");
  priorityColor.className = "priority";
  priorityColor.id = `priority${count}`;

  const checkButton = document.createElement("div");
  checkButton.className = "check";
  checkButton.id = `check${count}`;

  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";

  const title = document.createElement("p");
  title.textContent = taskTitle;
  title.id = `title${count}`

  taskLeftSectionContainer.appendChild(priorityColor);
  taskLeftSectionContainer.appendChild(checkButton);
  taskLeftSectionContainer.appendChild(titleContainer);
  titleContainer.appendChild(title);

  const taskRightSectionContainer = document.createElement("div");
  taskRightSectionContainer.className = "task-right-container";

  const taskDetailsBtn = document.createElement("button");
  taskDetailsBtn.id = `task-details-btn${count}`;
  taskDetailsBtn.className = "task-details-btn";
  taskDetailsBtn.textContent = "Details";

  const date = document.createElement("p");
  date.textContent = taskDate;

  const editButton = document.createElement("img");
  editButton.src = editIcon;
  editButton.className = "task-icon";
  editButton.alt = "edit";
  editButton.id = `edit-task-btn${count}`;

  const closeButton = document.createElement("img");
  closeButton.src = closeIcon;
  closeButton.className = "task-icon";
  closeButton.alt = "delete";
  closeButton.id = `delete-task-btn${count}`;

  taskRightSectionContainer.appendChild(taskDetailsBtn);
  taskRightSectionContainer.appendChild(date);
  taskRightSectionContainer.appendChild(editButton);
  taskRightSectionContainer.appendChild(closeButton);

  taskContainer.appendChild(taskLeftSectionContainer);
  taskContainer.appendChild(taskRightSectionContainer);

  parent.appendChild(taskContainer);
}
