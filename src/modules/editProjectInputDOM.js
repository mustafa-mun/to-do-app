import check from "../assets/checked.png";
import cancel from "../assets/cancel.png";

export default function addEditProjectInputToDOM(parent) {
  const editProjectContainer = document.createElement("div");
  editProjectContainer.className = "edit-project-input-container";
  editProjectContainer.id = editProjectContainer.className;

  const editIput = document.createElement("input");
  editIput.type = "text";
  editIput.placeholder = "Project Name...";
  editIput.id = "edit-project-name-input";

  editProjectContainer.appendChild(editIput);

  const editProjectButtonsContainer = document.createElement("div");
  editProjectButtonsContainer.className = "edit-project-icons-container";
  editProjectButtonsContainer.id = "edit-project-icons-container";

  editProjectContainer.appendChild(editProjectButtonsContainer);

  const checkedButton = document.createElement("img");
  checkedButton.src = check;
  checkedButton.alt = "check";
  checkedButton.className = "edit-project-icon";
  checkedButton.id = "check-edit-project-icon";

  const cancelButton = document.createElement("img");
  cancelButton.src = cancel;
  cancelButton.alt = "cancel";
  cancelButton.className = "edit-project-icon";
  cancelButton.id = "cancel-edit-project-icon";

  editProjectButtonsContainer.appendChild(checkedButton);
  editProjectButtonsContainer.appendChild(cancelButton);

  parent.appendChild(editProjectContainer);
}
