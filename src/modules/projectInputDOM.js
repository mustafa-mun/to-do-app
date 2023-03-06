export default function projectInputForDOM() {
  const inputContainer = document.createElement("div");
  inputContainer.className = "project-name-input-container";
  inputContainer.id = "project-name-input-container";

  const projectNameInput = document.createElement("input");
  projectNameInput.placeholder = "Project Name...";
  projectNameInput.type = "text";
  projectNameInput.id = "project-name-input";

  const inputBtnsContainer = document.createElement("div");
  inputBtnsContainer.className = "input-btns-container";

  const addProjectButton = document.createElement("button");
  addProjectButton.id = "add-project-btn";
  addProjectButton.textContent = "ADD";
  const closeProjectInputButton = document.createElement("button");
  closeProjectInputButton.id = "close-project-input-btn";
  closeProjectInputButton.textContent = "CLOSE";

  inputContainer.appendChild(projectNameInput);
  inputContainer.appendChild(inputBtnsContainer);

  inputBtnsContainer.appendChild(addProjectButton);
  inputBtnsContainer.appendChild(closeProjectInputButton);
  return inputContainer;
}
