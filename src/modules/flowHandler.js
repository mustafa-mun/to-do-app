import format from "date-fns/format";
import * as elements from "./elements";
import addTaskSectionToDOM from "./addTaskSectionDOM";
import buttonToggles from "./buttonToggle";
import formSubmitter from "./formSubmit";
import formModal from "./formModal";
import editInputForDOM from "./projectEditDOM";
import * as storage from "./handleStorage";
import refresh from "./refresh";
import addEditProjectInputToDOM from "./editProjectInputDOM";
import * as taskListener from "./tasksEventListeners";

export default function flowHandler(array) {
  array.forEach((item) => {
    const domProjects = document.getElementById(`project${item.id}`);
    domProjects.addEventListener("click", () => {
      refresh(elements.tasksSection); // Remove previous taskSection from dom
      elements.tasksSection.appendChild(addTaskSectionToDOM(item.name));

      const tasksContainer = document.getElementById("tasks");

      if (item.tasks) {
        item.tasks.forEach((task, index) => {
          const formattedDate = format(new Date(task.dueDate), "MMM/do");

          taskListener.tasksEventListener(
            tasksContainer,
            formattedDate,
            task.title,
            task.description,
            task.dueDate,
            task.priority,
            task.isDone,
            index,
            task,
            item.tasks
          );

          if (task) {
            const check = document.getElementById(`check${index}`);
            const copyTask = task;
            const titleEl = document.getElementById(`title${index}`);

            if (!task.isDone) {
              titleEl.style.textDecoration = "none";
              check.style.background = "white";
              copyTask.isDone = false;
            } else {
              titleEl.style.textDecoration = "line-through";
              check.style.background = "black";
              copyTask.isDone = true;
            }
          }
        });
      }

      const deleteTasks = document.getElementById("delete-tasks");
      // Remove completed tasks
      deleteTasks.addEventListener("click", () => {
        item.tasks.forEach((el, index) => {
          if (el.isDone) {
            const tasksThatWillbeRemoved = document.getElementById(
              `task${index}`
            );
            tasksContainer.removeChild(tasksThatWillbeRemoved);
          }
        });
      });

      let deleteItemsCount = 0;
      deleteTasks.addEventListener("click", () => {
        // Find the deleteItemsCount
        item.tasks.forEach((el) => {
          if (el.isDone) {
            deleteItemsCount += 1;
          }
        });
      });

      deleteTasks.addEventListener("click", () => {
        // Delete completed tasks from storage
        item.tasks.forEach((el, index) => {
          if (el.isDone) {
            item.tasks.splice(index, deleteItemsCount);
            taskListener.checkStorageAndUpdate();
          }
        });
      });

      const threeDot = document.getElementById(`three-dot${item.id}`);

      if (threeDot) {
        // Edit project name options
        threeDot.addEventListener("click", () => {
          // Edit project name
          const editProjectSection = document.getElementById(
            "projects-button-container"
          );
          if (!editProjectSection) {
            // This is for preventing multiple clicks
            editInputForDOM(domProjects);

            const deleteProjectBtn =
              document.getElementById("project-delete-btn");

            deleteProjectBtn.addEventListener("click", (event) => {
              // Delete project
              refresh(elements.tasksSection);
              event.stopPropagation(); // Stop bubbling
              elements.section.removeChild(domProjects);
              if (elements.storageProjects) {
                storage.removeStorageItem(item, elements.storageProjects);
                storage.updateStorage(elements.storageProjects);
              } else {
                storage.removeStorageItem(
                  item,
                  elements.projectsContainer.projects
                );
                storage.updateStorage(elements.projectsContainer.projects);
              }
              // This function removes the project and updates local storage
            });

            const editProjectBtn = document.getElementById("project-edit-btn");

            editProjectBtn.addEventListener("click", () => {
              // Edit project btn event listeners
              const editButtons = document.getElementById(
                "projects-button-container"
              );
              domProjects.removeChild(editButtons);
              addEditProjectInputToDOM(domProjects);
              const editProjectInputEl = document.getElementById(
                "edit-project-input-container"
              );

              const cancelEditProjectBtn = document.getElementById(
                "cancel-edit-project-icon"
              );
              cancelEditProjectBtn.addEventListener("click", () => {
                // Cancel edit button
                domProjects.removeChild(editProjectInputEl);
              });

              const confirmEditBtn = document.getElementById(
                "check-edit-project-icon"
              );
              confirmEditBtn.addEventListener("click", () => {
                // Confirm edit button
                const editInputValue = document.getElementById(
                  "edit-project-name-input"
                ).value;
                if (editInputValue) {
                  const copy = item;
                  copy.name = editInputValue;
                  if (elements.storageProjects) {
                    storage.changeStorageItem(
                      item,
                      elements.storageProjects,
                      copy
                    );
                    storage.updateStorage(elements.storageProjects);
                  } else {
                    // If localStorage array is null
                    storage.changeStorageItem(
                      item,
                      elements.projectsContainer.projects,
                      copy
                    );
                    storage.updateStorage(elements.projectsContainer.projects);
                  }

                  const projectName = document.getElementById(
                    `project-name${item.id}`
                  );
                  projectName.textContent = item.name; // Edit Dom project name
                  domProjects.removeChild(editProjectInputEl); // Remove edit section
                }
              });
            });
          }
        });
      }

      const addTaskBtn = document.getElementById("add-task");
      addTaskBtn.addEventListener("click", () => {
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
          const formStatus = document.getElementById("status");

          if (elements.storageProjects) {
            formSubmitter(
              item.tasks,
              formTitle,
              formDescription,
              formDueDate,
              formPriority
            );

            const tasksContainers = document.getElementById("tasks");
            const formattedDate = format(new Date(formDueDate), "MMM/do");

            taskListener.tasksEventListener(
              tasksContainers,
              formattedDate,
              formTitle,
              formDescription,
              formDueDate,
              formPriority,
              formStatus,
              item.tasks.indexOf(item.tasks.at(-1)),
              item.tasks.at(-1),
              item.tasks
            );

            storage.updateStorage(elements.storageProjects);
          } else {
            formSubmitter(
              item.tasks,
              formTitle,
              formDescription,
              formDueDate,
              formPriority,
              item.tasks.at(-1),
              item.tasks
            );

            const tasksContainers = document.getElementById("tasks");
            const formattedDate = format(new Date(formDueDate), "MMM/do");

            taskListener.tasksEventListener(
              tasksContainers,
              formattedDate,
              formTitle,
              formDescription,
              formDueDate,
              formPriority,
              formStatus,
              item.tasks.indexOf(item.tasks.at(-1)),
              item.tasks.at(-1),
              item.tasks
            );

            storage.updateStorage(elements.projectsContainer.projects);
          }
          const modal = document.getElementById("modal");
          buttonToggles(elements.main, modal);
        });
      });
    });
  });
}
