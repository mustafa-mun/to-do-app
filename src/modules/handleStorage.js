export function storeProjects(existArr, newArr, data) {
  localStorage.setItem("projects", JSON.stringify(newArr));

  if (existArr) {
    // Push fresh data to local storage and update it.
    existArr.push(data);
    localStorage.setItem("projects", JSON.stringify(existArr));
  }
}

export function removeStorageItem(item, array) {
  const index = array.indexOf(item);
  array.splice(index, 1);
}

export function updateStorage(array) {
  localStorage.setItem("projects", JSON.stringify(array));
}

export function changeStorageItem(project, array, task) {
  const index = array.findIndex((myProject) => myProject.id === project.id);
  array.splice(index, 1, task); // Replace previous task with new taks
}
