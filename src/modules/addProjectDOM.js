import threeDot from "../assets/dots.png";

export default function addProjectToDOM(name, count) {
  // Count variable is for matcing id's.
  const projectsContainer = document.createElement("div");
  projectsContainer.className = "projects";
  projectsContainer.id = `project${count}`;

  const projectsProjectContainer = document.createElement("div");
  projectsProjectContainer.className = "projects-project-container";

  const projectName = document.createElement("p"); // This will change with user input.
  projectName.textContent = name;
  projectName.id = `project-name${count}`;

  const dot = document.createElement("img");
  dot.src = threeDot;
  dot.className = "three-dots";
  dot.alt = "three-dot";
  dot.id = `three-dot${count}`;

  projectsProjectContainer.appendChild(projectName);
  projectsProjectContainer.appendChild(dot);

  projectsContainer.appendChild(projectsProjectContainer);
  return projectsContainer;
}
