import format from "date-fns/format";
import addDetailsModalToDOM from "./detailsDOM";
import addTasksToDOM from "./tasksDOM";
import * as elements from "./elements";
import * as storage from "./handleStorage";
import formModal from "./formModal";
import buttonToggles from "./buttonToggle";

export function checkStorageAndUpdate() {
  if (elements.storageProjects) {
    storage.updateStorage(elements.storageProjects);
  } else {
    storage.updateStorage(elements.projectsContainer.projects);
  }
}

export function tasksEventListener(
  taskContainer,
  formattedDate,
  taskTitle,
  taskDate,
  taskDescription,
  taskPriority,
  taskStatus,
  index,
  task,
  array
) {
  addTasksToDOM(taskContainer, taskTitle, formattedDate, index);

  const priority = document.getElementById(`priority${index}`);
  if (taskPriority === "low") {
    priority.style.backgroundColor = "green";
  } else if (taskPriority === "medium") {
    priority.style.backgroundColor = "orange";
  } else {
    priority.style.backgroundColor = "red";
  }

  const check = document.getElementById(`check${index}`);
  check.addEventListener("click", () => {
    const copyTask = task;
    const titleEl = document.getElementById(`title${index}`);

    if (task.isDone) {
      titleEl.style.textDecoration = "none";
      check.style.background = "white";
      copyTask.isDone = false;
      if (elements.storageProjects) {
        storage.updateStorage(elements.storageProjects);
      } else {
        storage.updateStorage(elements.projectsContainer.projects);
      }
    } else {
      titleEl.style.textDecoration = "line-through";
      check.style.background = "black";
      copyTask.isDone = true;
      if (elements.storageProjects) {
        storage.updateStorage(elements.storageProjects);
      } else {
        storage.updateStorage(elements.projectsContainer.projects);
      }
    }
  });

  const details = document.getElementById(`task-details-btn${index}`);
  details.addEventListener("click", () => {
    document
      .querySelector("body")
      .appendChild(
        addDetailsModalToDOM(
          taskTitle,
          taskDate,
          taskDescription,
          taskPriority,
          taskStatus
        )
      );
    const detailsPriority = document.getElementById("details-priority");
    detailsPriority.style.backgroundColor = priority.style.backgroundColor;

    const statusText = document.getElementById("status");
    statusText.textContent = task.isDone;

    const priorityText = document.getElementById("details-priority-text");
    priorityText.textContent = taskPriority;

    const closeDetailsBtn = document.getElementById("close-details-btn");

    closeDetailsBtn.addEventListener("click", () => {
      const detailsModal = document.getElementById("details-modal");
      document.querySelector("body").removeChild(detailsModal);
    });
  });

  const deleteTaskIcon = document.getElementById(`delete-task-btn${index}`);
  deleteTaskIcon.addEventListener("click", () => {
    const taskEl = document.getElementById(`task${index}`);
    taskContainer.removeChild(taskEl);
    storage.removeStorageItem(task, array);
    checkStorageAndUpdate();
  });

  const editTaskIcon = document.getElementById(`edit-task-btn${index}`);
  editTaskIcon.addEventListener("click", () => {
    // Edit task
    elements.main.appendChild(formModal());
    const closeModalBtn = document.getElementById("close-modal-btn");
    const submitTaskBtn = document.getElementById("submit-task-btn");
    closeModalBtn.addEventListener("click", () => {
      const modal = document.getElementById("modal");
      buttonToggles(elements.main, modal);
    });

    submitTaskBtn.addEventListener("click", () => {
      const formTitle = document.getElementById("title").value;
      const formDescription = document.getElementById("description").value;
      const formDueDate = document.getElementById("date").value;
      const formPriority = document.getElementById("priority").value;

      const obj = {
        title: formTitle,
        description: formDescription,
        dueDate: formDueDate,
        priority: formPriority,
        isDone: false,
      };

      const i = array.indexOf(task);
      array.splice(i, 1, obj);

      const taskEl = document.getElementById(`task${index}`);
      const updatedDate = format(new Date(formDueDate), "MMM/do");
      taskContainer.removeChild(taskEl);

      const modal = document.getElementById("modal");
      buttonToggles(elements.main, modal);
      if (elements.storageProjects) {
        storage.updateStorage(elements.storageProjects);
      } else {
        storage.updateStorage(elements.projectsContainer.projects);
      }

      // Run function again with updated inputs
      tasksEventListener(
        taskContainer,
        updatedDate,
        formTitle,
        formDescription,
        formDueDate,
        formPriority,
        obj.isDone,
        index,
        obj,
        array
      );
    });
  });
}
