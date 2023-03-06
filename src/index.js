import "./style.scss";
import * as elements from "./modules/elements";
import projectInputForDOM from "./modules/projectInputDOM";
import * as projectClass from "./modules/projectClass";
import * as storage from "./modules/handleStorage";
import addStorageProjectsToDOM from "./modules/storageProjectsDOM";
import trackID from "./modules/idTracker";
import flowHandler from "./modules/flowHandler";
import addProjectToDOM from "./modules/addProjectDOM";

if (elements.storageProjects) {
  // If there is a project on local storage, reflect them.
  addStorageProjectsToDOM();
}

elements.addProject.addEventListener("click", () => {
  // Add Projects
  const projectInputEl = document.getElementById(
    "project-name-input-container"
  );
  // This prevents multiple add projects.
  if (!projectInputEl) {
    elements.section.appendChild(projectInputForDOM());

    const addProjectBtn = document.getElementById("add-project-btn");
    addProjectBtn.addEventListener("click", () => {
      const input = document.getElementById("project-name-input").value;
      if (input) {
        const inputContainer = document.getElementById(
          "project-name-input-container"
        );

        elements.section.removeChild(inputContainer); // Remove input field

        const newProject = projectClass.project(input);

        if (elements.storageProjects) {
          if (elements.storageProjects.length > 0) {
            // Track projects ids'.
            trackID(
              newProject,
              elements.storageProjects[elements.storageProjects.length - 1].id
            );
          }
        }

        if (
          // This handles when local storage array is null
          elements.projectsContainer.projects.length > 0 &&
          !elements.storageProjects
        ) {
          trackID(
            newProject,
            elements.projectsContainer.projects[
              elements.projectsContainer.projects.length - 1
            ].id
          );
        }

        elements.section.appendChild(
          addProjectToDOM(newProject.name, newProject.id)
        );

        elements.projectsContainer.addProject(newProject); // Add project to projects array

        storage.storeProjects(
          // Store projects in local storage.
          elements.storageProjects,
          elements.projectsContainer.projects,
          newProject
        );

        flowHandler(elements.projectsContainer.projects);
      }
    });

    const closeBtn = document.getElementById("close-project-input-btn");
    closeBtn.addEventListener("click", () => {
      // close add project field
      const inputContainer = document.getElementById(
        "project-name-input-container"
      );
      elements.section.removeChild(inputContainer);
    });
  } else {
    console.log("input on screen already");
  }
});
