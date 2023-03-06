export default function formModal() {
  const modalContainer = document.createElement("div");
  modalContainer.className = "modal";
  modalContainer.id = "modal";

  const form = document.createElement("form");
  form.method = "get";
  form.action = "#";

  const titleDiv = document.createElement("div");
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  titleLabel.for = "title";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.required = true;
  titleInput.placeholder = "title";
  titleInput.id = "title";
  titleDiv.appendChild(titleLabel);
  titleDiv.appendChild(titleInput);

  const descDiv = document.createElement("div");
  const descLabel = document.createElement("label");
  descLabel.textContent = "Description:";
  descLabel.for = "description";
  const descInput = document.createElement("input");
  descInput.type = "text";
  descInput.required = true;
  descInput.id = "description";
  descInput.placeholder = "description";
  descDiv.appendChild(descLabel);
  descDiv.appendChild(descInput);

  const dueDateDiv = document.createElement("div");
  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Date:";
  dueDateLabel.for = "dueDate";
  const dueDateInput = document.createElement("input");
  dueDateInput.id = "date";
  dueDateInput.type = "date";
  dueDateInput.required = true;
  dueDateInput.placeholder = "date";
  dueDateDiv.appendChild(dueDateLabel);
  dueDateDiv.appendChild(dueDateInput);

  const priorityDiv = document.createElement("div");
  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority:"
  priorityLabel.for = "priortiy";
  const priorityInput = document.createElement("select");
  priorityInput.id = "priority"
  const option1 = document.createElement("option");
  option1.value = "low";
  option1.textContent = "Low";
  const option2 = document.createElement("option");
  option2.value = "medium";
  option2.textContent = "Medium";
  const option3 = document.createElement("option");
  option3.value = "high";
  option3.textContent = "High";
  priorityInput.id = "priority";
  priorityInput.name = "priority";
  priorityInput.appendChild(option1);
  priorityInput.appendChild(option2);
  priorityInput.appendChild(option3);
  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityInput);

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttons-container";
  const addBtn = document.createElement("button");
  addBtn.id = "submit-task-btn";
  addBtn.textContent = "ADD";
  addBtn.type = "button";
  const closeBtn = document.createElement("button");
  closeBtn.id = "close-modal-btn";
  closeBtn.type = "button";
  closeBtn.textContent = "CLOSE";
  closeBtn.formNoValidate = true;
  buttonsContainer.appendChild(addBtn);
  buttonsContainer.appendChild(closeBtn);

  modalContainer.appendChild(form);
  form.appendChild(titleDiv);
  form.appendChild(descDiv);
  form.appendChild(dueDateDiv);
  form.appendChild(priorityDiv);
  form.appendChild(buttonsContainer);
  return modalContainer;
}
