export default function addDetailsModalToDOM(
  taskTitle,
  taskDescription,
  taskDate,
  taskPriority,
  taskStatus
) {
  const modalContainer = document.createElement("div");
  modalContainer.className = "details-modal";
  modalContainer.id = modalContainer.className;

  const detailsContainer = document.createElement("div");
  detailsContainer.className = "details-container";

  modalContainer.appendChild(detailsContainer);

  const titleDetailContainer = document.createElement("div");
  titleDetailContainer.className = "details-section";
  const titleDetail = document.createElement("p");
  titleDetail.className = "details-label";
  titleDetail.textContent = "Task title:";
  const title = document.createElement("p");
  title.textContent = taskTitle;

  titleDetailContainer.appendChild(titleDetail);
  titleDetailContainer.appendChild(title);

  const descriptionDetailContainer = document.createElement("div");
  descriptionDetailContainer.className = "details-section";
  const descriptionDetail = document.createElement("p");
  descriptionDetail.className = "details-label";
  descriptionDetail.textContent = "Task description:";
  const description = document.createElement("p");
  description.textContent = taskDescription;

  descriptionDetailContainer.appendChild(descriptionDetail);
  descriptionDetailContainer.appendChild(description);

  const dateDetailContainer = document.createElement("div");
  dateDetailContainer.className = "details-section";
  const dateDetail = document.createElement("p");
  dateDetail.className = "details-label";
  dateDetail.textContent = "Task date:";
  const date = document.createElement("p");
  date.textContent = taskDate;

  dateDetailContainer.appendChild(dateDetail);
  dateDetailContainer.appendChild(date);

  const priorityDetailContainer = document.createElement("div");
  priorityDetailContainer.className = "details-section";
  const priorityDetail = document.createElement("p");
  priorityDetail.className = "details-label";
  priorityDetail.textContent = "Task priority:";
  const priority = document.createElement("p");
  priority.textContent = taskPriority;
  priority.id = "details-priority-text";

  const detailsPriority = document.createElement("span");
  detailsPriority.id = "details-priority";
  detailsPriority.className = "details-priority";

  priorityDetailContainer.appendChild(priorityDetail);
  priorityDetailContainer.appendChild(priority);
  priorityDetailContainer.appendChild(detailsPriority);

  const statusDetailContainer = document.createElement("div");
  statusDetailContainer.className = "details-section";
  const statusDetail = document.createElement("p");
  statusDetail.className = "details-label";
  statusDetail.textContent = "Task finished:";
  const status = document.createElement("p");
  status.textContent = taskStatus;
  status.id = "status";

  statusDetailContainer.appendChild(statusDetail);
  statusDetailContainer.appendChild(status);

  const closeButton = document.createElement("button");
  closeButton.id = "close-details-btn";
  closeButton.textContent = "CLOSE";

  detailsContainer.appendChild(titleDetailContainer);
  detailsContainer.appendChild(descriptionDetailContainer);
  detailsContainer.appendChild(dateDetailContainer);
  detailsContainer.appendChild(priorityDetailContainer);
  detailsContainer.appendChild(statusDetailContainer)
  detailsContainer.appendChild(closeButton);

  return modalContainer;
}
