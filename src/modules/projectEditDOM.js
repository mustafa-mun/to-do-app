export default function editInputForDOM(parent) {
  const projectsButtonContainer = document.createElement("div");
  projectsButtonContainer.className = "projects-button-container";
  projectsButtonContainer.id = "projects-button-container";

  const editButton = document.createElement("button");
  editButton.id = "project-edit-btn";
  editButton.textContent = "EDIT";
  const deleteButton = document.createElement("button");
  deleteButton.id = "project-delete-btn";
  deleteButton.textContent = "DELETE";

  projectsButtonContainer.appendChild(editButton);
  projectsButtonContainer.appendChild(deleteButton);
  parent.appendChild(projectsButtonContainer);
}
