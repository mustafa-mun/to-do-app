import addProjectToDOM from "./addProjectDOM";
import * as elements from "./elements";
import flowHandler from "./flowHandler";

export default function addStorageProjectsToDOM() {
  elements.storageProjects.forEach((item) => {
    elements.section.appendChild(addProjectToDOM(item.name, item.id));
  });
  flowHandler(elements.storageProjects);
}
