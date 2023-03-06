export default function addTaskSectionToDOM(nameOfProjet) {
  const tasksSection = document.createElement("div");
  tasksSection.className = "task-section-container";
  tasksSection.id = tasksSection.className;

  const projectName = document.createElement("p");
  projectName.textContent = nameOfProjet;
  projectName.id = "project-name";

  const addTask = document.createElement("p");
  addTask.textContent = "+Add Task";
  addTask.id = "add-task";

  const tasksContainer = document.createElement("div");
  tasksContainer.className = "tasks";
  tasksContainer.id = "tasks";

  const deleteCompletedTasksBtn = document.createElement("button");
  deleteCompletedTasksBtn.id = "delete-tasks";
  deleteCompletedTasksBtn.textContent = "DELETE COMPLETED TASKS";

  tasksSection.appendChild(projectName);
  tasksSection.appendChild(addTask);
  tasksSection.appendChild(tasksContainer);
  tasksSection.appendChild(deleteCompletedTasksBtn);

  return tasksSection;
}
